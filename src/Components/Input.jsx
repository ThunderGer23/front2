

export const Input = ({Tipo,Holder}) =>{
    return (
        <>
        <div className="input-group mb-4">
            <span className="input-group-text" id="basic-addon1">
                <i className="fa-regular fa-user" style={{color:'white'}}></i>
            </span>
        </div>
        <input type={Tipo} className="form-control" placeholder={Holder} aria-label="Username" aria-describedby="basic-addon1"/>
        </>
    )
}

