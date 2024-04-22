import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/home';
import Allblogs from './Pages/All-blogs';
import Categories from './Pages/Categories';
import FindBlogs from './Pages/Find-Blogs';
import Myblogs from './Pages/My-blogs';
import NewBlog from './Pages/New-Blog';
import Register from './Pages/Register';
import Thankyou from './Pages/Thankyou';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
  <div className='container-fluid'>
     <Routes>
           <Route path='/' element={<Login/>}/>
           <Route path='/Home' element={<Home/>}/>
           <Route path='/All-blogs' element={<Allblogs/>}/>
           <Route path='/Categories' element={<Categories/>}/>
           <Route path='/Find_Blogs' element={<FindBlogs/>}/>
           <Route path='/Login' element={<Login/>}/>
           <Route path='/My_Blogs' element={<Myblogs/>}/>
           <Route path='/New_blog' element={<NewBlog/>}/>
           <Route path='/Register' element={<Register/>}/>
           <Route path='/Thankyou' element={<Thankyou/>}/>
     </Routes>

<ToastContainer/>
  </div>
  )
}

export default App;
