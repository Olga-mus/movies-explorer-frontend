import './FilterCheckbox.css'
function FilterCheckbox({ isShort, setShort }) {
  return (
    <div className="checkbox">
      <div className="checkbox__container">
        <div className="checkbox__block">
          <label className="switch link">
            <input
              type="checkbox"
              checked={isShort}
              onChange={() => setShort(!isShort)}
            />
            <span className="slider round"></span>
          </label>
          <p className="checkbox__title">Короткометражки</p>
        </div>
        <div className="checkbox__border"></div>
      </div>
    </div>
  )
}
export default FilterCheckbox
