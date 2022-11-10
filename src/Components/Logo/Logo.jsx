import PropTypes from 'prop-types'

export const Logo = ({Direccion}) =>{
    return(
        <>
        <div role='div' className="text-center mb-5">
            <img role='img' className="logo" src={Direccion} alt="" style={{width:'7rem'}}/>
        </div>
        </>
    )
}

Logo.propTypes={
    Direccion: PropTypes.string.isRequired
}