import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
	console.log(props.loggedIn)
	// console.log(props.loggedIn['value'])
	return (

		props.loggedIn ? <Component {...props} /> : <Navigate to="/signin" />

	)
};

export default ProtectedRoute;

