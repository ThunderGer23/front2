import PropTypes from 'prop-types'

export const Link = ({texto}) =>{
    return(
        <>
        <div className="text-center pt-1 mb-1">
            <p><a className="">{texto}</a></p>
        </div>
        </>
    )
}

Link.propTypes = {
    texto: PropTypes.string.isRequired
}