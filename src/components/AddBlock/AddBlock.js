import './AddBlock.css'
import { useLocation } from 'react-router-dom'

function AddBlock({ showMoreMovies }) {
  const location = useLocation()
  if (location.pathname === '/movies') {
    return (
      <section className="add">
        <div className="add__more">
          <button
            type="button"
            className="add__more-button"
            onClick={showMoreMovies}
          >
            Ещё
          </button>
        </div>
      </section>
    )
  }
}

export default AddBlock
