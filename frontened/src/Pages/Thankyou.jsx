import { Link } from "react-router-dom"
function Thankyou(){
    return(
        <div style={{textAlign:'center'}}>
            <h2>
                Thank You for visiting
            </h2>
             
             <Link to='/Login'>Login again</Link>
        </div>
    )
}

export default Thankyou