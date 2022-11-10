import PropTypes from 'prop-types'

export const Boton = ({texto}) => {
  return(
    <>
      <div role='div' className="d-grid gap-2 mb-4">
          <button name={texto+'button'} className="btn btn-light" type="button">
              <i role='i' className="fa fa-right-to-bracket orange"></i>
              {texto}
          </button>
      </div>
    </>
  )
}

Boton.protoTypes = {
  texto: PropTypes.string.isRequired
}