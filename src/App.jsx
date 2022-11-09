export const App = ({texto}) => {
  return(
    <>
      <div className="d-grid gap-2 mb-4">
          <button className="btn btn-light" type="button">
              <i className="fa fa-right-to-bracket orange"></i>
              {texto}
          </button>
      </div>
    </>
  )
}
