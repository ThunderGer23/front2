import PropTypes from 'prop-types'

export const Avatar = ({Direccion}) =>{
    return(
        <>
        <li role='li'>
            <img className="img-fluid" width="140" src={Direccion} alt="" />
        </li>
        </>
    )
}

Avatar.propTypes={
    Direccion: PropTypes.string.isRequired
}