import PropTypes from 'prop-types'

export const Icono = ({texto,Direccion}) => {
  return (
    <>
    <p role='p'>{texto}</p>
    <img role='img' className="logo" src={Direccion}  width="45"/>
    </>
  )
}

Icono.propTypes = {
    texto: PropTypes.string.isRequired,
    Direccion: PropTypes.string.isRequired
}