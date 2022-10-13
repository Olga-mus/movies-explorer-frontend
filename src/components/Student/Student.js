import "./Student.css";
import student from "../../images/student/student.jpg";

function Student() {
  return (
    <section className="student">
      <div className="student__container">
        <h2 className="student__title">Студент</h2>
        <div className="student__about">
          <img
            alt="фотография студента"
            src={student}
            className="student__photo"
          ></img>

          <div className="student__text">
            <h3 className="student__name">Ольга</h3>
            <h2 className="student__prof">Фронтенд-разработчик, 30 лет</h2>
            <p className="student__description">
              Я родилась и живу в Саратове, закончила факультет экономики СГУ. У
              меня есть муж и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начала кодить. С 2015 года работала в компании «СКБ
              Контур». После того, как прошла курс по веб-разработке, начала
              заниматься фриланс-заказами и ушла с постоянной работы.
            </p>
            <nav className="student__nav">
              <a
                className="student__link link"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Olga-mus"
              >
                Github
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Student;
