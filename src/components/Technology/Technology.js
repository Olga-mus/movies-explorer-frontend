import "./Technology.css";

function Technology() {
  return (
    <section className="technology">
      <div className="technology__container">
        <h2 className="technology__title">Технологии</h2>
        <div className="technology__description">
          <h3 className="technology__tech">7 технологий</h3>
          <p className="technology__text">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <div className="set">
          <div className="set__element">HTML</div>
          <div className="set__element">CSS</div>
          <div className="set__element">JS</div>
          <div className="set__element">React</div>
          <div className="set__element">Git</div>
          <div className="set__element">Express.js</div>
          <div className="set__element">mongoDB</div>
        </div>
      </div>
    </section>
  );
}

export default Technology;
