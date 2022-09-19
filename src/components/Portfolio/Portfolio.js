import "./Portfolio.css";
import arrow from "../../images/portfolio/arrow.png";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio-container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__link">
            <a
              className="portfolio__link-element link"
              href="https://olga-mus.github.io/russian-travel/index.html"
            >
              <h3 className="portfolio__name">Статичный сайт</h3>
            </a>
            <a
              className="portfolio__link-element"
              href="https://olga-mus.github.io/russian-travel/index.html"
            >
              <img
                alt="стрелка-ссылка"
                className="portfolio__image link"
                src={arrow}
              />
            </a>
          </li>
          <li className="portfolio__link">
            <a
              className="portfolio__link-element link"
              href="https://olga-mus.github.io/russian-travel/index.html"
            >
              <h3 className="portfolio__name">Адаптивный сайт</h3>
            </a>
            <a
              className="portfolio__link-element"
              href="https://olga-mus.github.io/russian-travel/index.html"
            >
              <img
                alt="стрелка-ссылка"
                className="portfolio__image link"
                src={arrow}
              />
            </a>
          </li>
          <li className="portfolio__link">
            <a
              className="portfolio__link-element link"
              href="https://olga-mus.github.io/mesto/index.html"
            >
              <h3 className="portfolio__name">Одностраничное приложение</h3>
            </a>
            <a
              className="portfolio__link-element"
              href="https://olga-mus.github.io/mesto/index.html"
            >
              <img
                alt="стрелка-ссылка"
                className="portfolio__image link"
                src={arrow}
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
