import "./About.css";

function About() {
  return (
    <section className="about" id="abouts">
      <div className="about__container">
        <h2 className="about__title"> О проекте </h2>
        <div className="about__content">
          <div className="about__info">
            <h3 className="about__header">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about__description">
              Составление плана, работу над бэкендом, вёрстку, добавление &
              nbsp; & nbsp; функциональности и финальные доработки.
            </p>
          </div>
          <div className="about__info">
            <h3 className="about__header">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about__description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <time className="time">
          <div className="time__week time__week_green"> 1 неделя </div>
          <div className="time__week"> 4 недели </div>
          <div className="time__technology"> Back - end </div>
          <div className="time__technology"> Front - end </div>
        </time>
      </div>
    </section>
  );
}

export default About;
