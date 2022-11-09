export const Input = () =>{
    return (
        <>
        <div className="input-group mb-4">
            <span className="input-group-text" id="basic-addon1">
                <i className="fa-regular fa-user" style={{color:'white'}}></i>
            </span>
        </div>
        <input type="text" className="form-control" placeholder="usuario:" aria-label="Username" aria-describedby="basic-addon1"/>
        </>
    )
}