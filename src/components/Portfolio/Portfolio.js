import './Portfolio.css'
import arrow from '../../images/portfolio/arrow.svg'

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio-container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__link">
            <a
              className="portfolio__link-element link"
              target="_blank"
              rel="noreferrer"
              href="https://olga-mus.github.io/russian-travel/index.html"
            >
              Статичный сайт
            </a>
            <a
              className="portfolio__link-element"
              target="_blank"
              rel="noreferrer"
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
              target="_blank"
              rel="noreferrer"
            >
              Адаптивный сайт
            </a>
            <a
              className="portfolio__link-element"
              target="_blank"
              rel="noreferrer"
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
              target="_blank"
              rel="noreferrer"
              href="https://olga-mus.github.io/mesto/index.html"
            >
              Одностраничное приложение
            </a>
            <a
              className="portfolio__link-element"
              href="https://olga-mus.github.io/mesto/index.html"
              target="_blank"
              rel="noreferrer"
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
  )
}

export default Portfolio
