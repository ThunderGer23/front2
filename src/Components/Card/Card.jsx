import PropTypes from 'prop-types'

export const Card = ({titulo, texto}) => {
  return (
    <div role='div' className="card-body">
        <h3 role='h3'>{titulo}</h3>
        <p role='p'>{texto}</p>
    </div>
  )
}

Card.propTypes = {
    titulo: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired
}