import React from 'react';

export default function Techs() {
  return (
    <div className="techs" >
      <h3 className="techs__header" >Технологии</h3>
      <h2 className="techs__title" >7 технологий</h2>
      <p className="techs__text" >На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <div className="techs__table" >
        <p className="techs__cell" >HTML</p>
        <p className="techs__cell" >CSS</p>
        <p className="techs__cell" >JS</p>
        <p className="techs__cell" >React</p>
        <p className="techs__cell" >Git</p>
        <p className="techs__cell" >Express.js</p>
        <p className="techs__cell" >mongoDB</p>
      </div>
    </div>
  );
}
