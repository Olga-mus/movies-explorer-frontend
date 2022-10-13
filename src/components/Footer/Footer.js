import "./Footer.css";
import { useLocation } from "react-router-dom";
function Footer() {
  const location = useLocation();
  if (
    location.pathname === "/" ||
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies"
  )
    return (
      <section className="footer">
        <div className="footer__information">
          <p className="footer__title">
            Учебный проект Яндекс.Практикум х BeatFilm.
          </p>
          <div className="footer__contact">
            <p className="footer__age">&copy;2022</p>
            <nav className="footer__nav">
              <a
                className="footer__link link"
                target="_blank"
                rel="noreferrer"
                href="https://practicum.yandex.ru"
              >
                Яндекс.Практикум
              </a>
              <a
                className="footer__link link"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Olga-mus"
              >
                Github
              </a>
            </nav>
          </div>
        </div>
      </section>
    );
}

export default Footer;
