import './Dialog.css'

function Dialog({ error }) {
  return (
    <dialog className="dialog" open={!!error}>
      {error}
    </dialog>
  )
}

export default Dialog
