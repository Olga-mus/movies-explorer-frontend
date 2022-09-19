import "./PageNotFound.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <div className="page-not-found">
        <div className="pageNotFound__container">
          <div className="pageNotFound__content">
            <h1 className="pageNotFound__title">404</h1>
            <h2 className="pageNotFound__subtitle">Страница не найдена</h2>
          </div>
          <Link className="pageNotFound__redirect link" to="/">
            назад
          </Link>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
