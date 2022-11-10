import PropTypes from 'prop-types'

export const Input = ({Tipo,Holder}) =>{
    return (
        <>
        <div role='div' className="input-group mb-4">
            <span role='span' className="input-group-text" id="basic-addon1">
                <i role='i' className="fa-regular fa-user" style={{color:'white'}}></i>
            </span>
        </div>
        <input role='input' type={Tipo} className="form-control" placeholder={Holder} aria-label="Username" aria-describedby="basic-addon1"/>
        </>
    )
}

Input.propTypes = {
    Tipo: PropTypes.string.isRequired,
    Holder: PropTypes.string.isRequired
}