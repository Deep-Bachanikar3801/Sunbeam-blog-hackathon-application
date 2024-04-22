import { useEffect, useState } from "react"
import Footer from "../component/footer"
import Navbar from "../component/navbar"
import axios from "axios"
import Category from "../component/category"
function Categories(){

        
       const[Categories,setCategories]=useState([])
       const[title,settitle]=useState('')
      const loadata= async()=>{
              const response = await axios.get('http://localhost:4007/category/display')
              const result = response.data

              if(result['status']==='success'){
                 if(result['data'].isDeleted !=1){
                    setCategories(result['data'])
                 }
              }
      }
      const addcat =async()=>{
        const body ={
            title
        }
        const response = await  axios.post('http://localhost:4007/category/add',body)
        const result = response.data

        if(result['status']=='success'){
            alert('added successfully')
        }
     }

      useEffect(()=>{
        loadata()
      },[])
    return(
        <div>
             <Navbar/>
             <div className="container">
             <div className="ms-4">
              <div className="container row mt-4">
                <div className="col-3">
                  <label htmlFor="" >
                       <h3 className="inline-block">Category Name :</h3>
                  </label>
                  </div>
                  <div className="col">
                  <input onChange={(e)=>{
                    settitle(e.target.value)
                  }} type="text" name="" id="" className="form-control" />
                  </div>
                  <div className="col-1">
                        <button onClick={addcat} className="btn btn-warning">Add</button>
                  </div>
               </div>
            </div>
            </div>  
            <div className="container mt-4">
            <table class="table table-dark">
                     <thead>
                          <tr>
                            <th scope="col">ID</th>
                              <th scope="col">Category</th>
                              <th scope="col">Action</th>
                           </tr>
                     </thead>
                     <tbody>
                     {Categories.map((category) => {
                              return (
                              <Category
                              id={category.id}
                                 title={category.title}
                                 />
            )
          })}
                     </tbody>
            </table>
            </div>
            <div className="FooterDiv">
             <Footer/>
             </div>
        </div>
    )
}

export default Categories