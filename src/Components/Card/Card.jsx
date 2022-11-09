import PropTypes from 'prop-types'

export const Card = ({titulo, texto}) => {
  return (
    <div className="card-body">
        <h3>{titulo}</h3>
        <p>{texto}</p>
    </div>
  )
}

Card.propTypes = {
    titulo: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired
}