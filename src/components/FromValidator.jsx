import { useState, useEffect, useCallback } from "react";

const VALUE = "value";
const ERROR = "error";

const REQUIRED_FIELD_ERROR = "Это обязательное поле";

function isObject(value) {
  return value !== null && typeof value === "object";
}

function getPropValues(stateSchema, prop) {
  if (!isObject(stateSchema) || !prop) {
    throw new Error("Неверный параметр отправлен");
  }

  return Object.keys(stateSchema).reduce((accumulator, curr) => {
    accumulator[curr] = stateSchema[curr][prop];
    // console.log(accumulator)
    return accumulator;
  }, {});
}

function isRequiredField(value, isRequired) {
  if (!value && isRequired) return REQUIRED_FIELD_ERROR;
  return "";
}


export default function FromValidator(
  stateSchema = {},
  stateValidatorSchema = {},
  submitFormCallback
) {
  const [state, setStateSchema] = useState(stateSchema);

  const [values, setValues] = useState(getPropValues(state, VALUE));
  const [errors, setErrors] = useState(getPropValues(state, ERROR));

  const [disable, setDisable] = useState(true);
  const [isDirty, setIsDirty] = useState(false);

  const [allInputsErrors, setAllInputsErrors] = useState(false)

  useEffect(() => {
    setStateSchema(stateSchema);
    // setDisable(true);

  }, []);

  useEffect(() => {
    // console.log(isDirty)
    // console.log(allInputsErrors)
    // console.log(validateErrorState())
    // console.log(errors)
    // console.log(values)
    if (isDirty && allInputsErrors) {
      setDisable(validateErrorState());
    }
  }, [errors, isDirty]);

  const validateErrorState = useCallback(
    () => Object.values(errors).some(error => error),
    [errors]
  );

  function testAll() {
    for (const [key, value] of Object.entries(values)) {
      value === "" ? setAllInputsErrors(false) : setAllInputsErrors(true)
    }
  }

  const handleOnChange = useCallback(
    event => {

      setIsDirty(true);
      const name = event.target.name;
      const value = event.target.value;

      const _validator = stateValidatorSchema;

      if (!_validator[name]) return;

      const _field = _validator[name];

      let error = "";
      error = isRequiredField(value, _field.required);

      if (error === "" && isObject(_field["validator"])) {
        const _fieldValidator = _field["validator"];

        const testFunc = _fieldValidator["func"];

        if (!testFunc(value, values)) {
          error = _fieldValidator["error"];
        }
      }
      
      setValues(prevState => ({ ...prevState, [name]: value }));
      setErrors(prevState => ({ ...prevState, [name]: error }));

      testAll()
    },
    [stateValidatorSchema, values]
  );

  const handleOnSubmit = useCallback(
    event => {
      event.preventDefault();
      
      if (!validateErrorState()) {
        submitFormCallback(values);
      }
      
    },
    [validateErrorState, submitFormCallback, values, stateValidatorSchema]
  );

  return {
    handleOnChange,
    handleOnSubmit,
    values,
    errors,
    disable,
    setValues,
    setErrors
  };
}

