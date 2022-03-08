import React from 'react';

export default function AboutProject() {
  return (
    <div className="about" >
      <h2 className="about__header">О проекте</h2>

      <div className="about__table-stages" >
        <h3 className="about__table-stages-head-cell">Дипломный проект включал 5 этапов</h3>
        <h3 className="about__table-stages-head-cell">На выполнение диплома ушло 5 недель</h3>
        <p className="about__table-stages-cell">Составление плана, работу над бэкендом,
        вёрстку, добавление функциональности и
        финальные доработки.</p>
        <p className="about__table-stages-cell">У каждого этапа был мягкий и
        жёсткий дедлайн, которые нужно
        было соблюдать, чтобы успешно защититься.</p>
      </div>

      <div className="about__table-graph" >
        <h3 className="about__table-graph-head-cell">1 неделя</h3>
        <h3 className="about__table-graph-head-cell">4 неделя</h3>
        <p className="about__table-graph-cell">Back-end</p>
        <p className="about__table-graph-cell">Front-end</p>
      </div>

    </div>
  );
}
