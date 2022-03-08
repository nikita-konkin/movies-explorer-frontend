import React from 'react';

export default function AboutProject() {
  return (
    <div className="about" >
      <h2 className="about__header">О проекте</h2>

      <table className="about__table-stages" >
        <tbody>
          <tr>
            <th className="about__table-stages-head-cell" >
              Дипломный проект включал 5 этапов
            </th>
            <th className="about__table-stages-head-cell" >
              На выполнение диплома ушло 5 недель
            </th>
          </tr>
          <tr>
            <td className="about__table-stages-cell" >
              Составление плана, работу над бэкендом,
              вёрстку, добавление функциональности и
              финальные доработки.
            </td>
            <td className="about__table-stages-cell" >
              У каждого этапа был мягкий и
              жёсткий дедлайн, которые нужно
              было соблюдать, чтобы успешно защититься.
            </td>
          </tr>
        </tbody>
      </table>

      <table className="about__table-graph" >
        <tbody>
          <tr>
            <th className="about__table-graph-head-cell" >
              1 неделя
            </th>
            <th className="about__table-graph-head-cell" >
              4 недели
            </th>
          </tr>
          <tr>
            <td className="about__table-graph-cell" >
              Back-end
            </td>
            <td className="about__table-graph-cell" >
              Front-end
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}
