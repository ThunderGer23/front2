import PropTypes from 'prop-types'

export const Icono = ({texto,Direccion}) => {
  return (
    <>
    <p>{texto}</p>
    <img className="logo" src={Direccion}  width="45"/>
    </>
  )
}

Icono.propTypes = {
    texto: PropTypes.string.isRequired,
    Direccion: PropTypes.string.isRequired
}