import React from 'react';

export default function Techs() {
  return (
    <div className="techs" >
      <h3 className="techs__header" >Технологии</h3>
      <h2 className="techs__title" >7 технологий</h2>
      <p className="techs__text" >На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <table className="techs__table" >
        <tr>
          <td className="techs__cell" >HTML</td>
          <td className="techs__cell" >CSS</td>
          <td className="techs__cell" >JS</td>
          <td className="techs__cell" >React</td>
          <td className="techs__cell" >Git</td>
          <td className="techs__cell" >Express.js</td>
          <td className="techs__cell" >mongoDB</td>
        </tr>
      </table>
    </div>
  );
}
