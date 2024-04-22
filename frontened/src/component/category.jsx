import axios from "axios"

function Category({id , title}){
      
     const deleteRecord = async()=>{
             const body={
              "id":1
             }
             const response = await axios.delete('http://localhost:4007/category/delete',body)
             const result = response.data

             if(result['status']=='success'){
                  alert('data deleted successfully')
             }
             else{
              alert('something went wrong')
             }
     }
    return (
        <tr>
        <th scope="row">{id}</th>
        <td>{title}</td>
        <td> 
           
           <button className="btn btn-warning ms-4"><i class="bi bi-pencil-fill"></i></button>
           <button onClick={deleteRecord} className="btn btn-danger ms-4"><i class="bi bi-trash-fill"></i></button>
          
        </td>
      </tr>
    )
}

export default Category