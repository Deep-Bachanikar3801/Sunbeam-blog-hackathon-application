import { Link, useNavigate } from "react-router-dom"

function Navbar(){
    const Navigate = useNavigate()
   
    function visitT(){

       Navigate('/Thankyou')
    }
    return(
        <nav class="navbar bg-dark" >
        <div class="container-fluid">
          <h2 class="navbar-brand text-white">SUNBEAM BLOGS</h2>
          <div className="nav-item navMembers">
            <ul className="nav ">
              <Link to={"/New_blog"}>
                <li className="nav-item ms-4">New Blog</li>
              </Link>
              <Link to={"/All-blogs"}>
                <li className="nav-item ms-4">All Blogs</li>
              </Link>
              <Link to={"/My_Blogs"}>
                <li className="nav-item ms-4">My Blogs</li>
              </Link>
              <Link to={"/Find_Blogs"}>
                <li className="nav-item ms-4">Find Blogs</li>
              </Link>
              <Link to={"/Categories"}>
                <li className="nav-item ms-4">Categories</li>
              </Link>
            </ul>
          </div>
          
          <button onClick={visitT} style={{ marginRight: "30px" }} className="btn btn-danger">
            {" "}
           <i class="bi bi-box-arrow-in-right"></i> Log Out 
          </button>
        
        </div>
      </nav>
    )
}

export default Navbar