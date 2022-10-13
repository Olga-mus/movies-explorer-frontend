import './PageNotFound.css'
import { Link, useHistory } from 'react-router-dom'

function PageNotFound() {
  const history = useHistory()
  return (
    <>
      <div className="page-not-found">
        <div className="pageNotFound__container">
          <div className="pageNotFound__content">
            <h1 className="pageNotFound__title">404</h1>
            <h2 className="pageNotFound__subtitle">Страница не найдена</h2>
          </div>
          <button
            className="pageNotFound__redirect link"
            onClick={() => history.goBack()}
          >
            назад
          </button>
        </div>
      </div>
    </>
  )
}

export default PageNotFound
