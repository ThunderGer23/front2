import PropTypes from 'prop-types'

export const Boton = ({texto}) => {
  return(
    <>
      <div className="d-grid gap-2 mb-4">
          <button className="btn btn-light" type="button">
              <i className="fa fa-right-to-bracket orange"></i>
              {texto}
          </button>
      </div>
    </>
  )
}

Boton.protoTypes = {
  texto: PropTypes.string.isRequired
}