import { useEffect, useState } from 'react'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import './SearchForm.css'
function SerchForm({
  searchMovies,
  query,
  setQuery,
  isShort,
  setShort,
  required,
}) {
  const [error, setError] = useState('')

  function handleInputValue(e) {
    const value = e.target.value.trim()
    setQuery(value)
    setError(value ? '' : 'Нужно ввести ключевое слово')
  }

  function submitSearchForm(e) {
    e.preventDefault()
    searchMovies()
  }

  return (
    <>
      <div className="formSearch">
        <div className="formSearch__container">
          <form
            className="form-serch"
            name="form_serch"
            noValidate
            onSubmit={submitSearchForm}
          >
            <fieldset className="form-serch__movie">
              <label className="form-serch__field">
                <input
                  id="film"
                  type="text"
                  name="name"
                  placeholder="Фильм"
                  className="form-serch__input form-serch__input_type_film"
                  required={required}
                  value={query}
                  onInput={handleInputValue}
                />
                <span className="film-error form-serch__error-message">
                  {error}
                </span>
              </label>
              <button
                type="submit"
                className="form-serch__button link"
                disabled={!!error}
              >
                Найти
              </button>
            </fieldset>
          </form>
        </div>
      </div>
      <FilterCheckbox isShort={isShort} setShort={setShort} />
    </>
  )
}
export default SerchForm
