import "./SearchForm.css";
function SerchForm() {
  return (
    <div className="formSearch">
      <div className="formSearch__container">
        <form class="form-serch" name="form_serch" novalidate>
          <fieldset className="form-serch__movie">
            <label className="form-serch__field">
              <input
                id="film"
                type="text"
                name="name"
                placeholder="Фильм"
                class="form-serch__input form-serch__input_type_film"
                required
                minlength="2"
                maxlength="30"
              />
              {/* <span class='film-error form-serch__error-message'></span> */}
            </label>
            <button type="button" className="form-serch__button link">Найти</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
export default SerchForm;
