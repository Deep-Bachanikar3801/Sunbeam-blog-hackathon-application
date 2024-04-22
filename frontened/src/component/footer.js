import {
    MDBFooter,

  } from 'mdb-react-ui-kit';
function Footer(){
    return (
        <MDBFooter bgColor='dark' className='text-center text-white text-lg-left mb-0 '>
        <div className='text-center p-3 footer' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a className='text-white' href='https://sunbeaminfotech.com/'>
            Sunbeaminfotech.com
          </a>
        </div>
      </MDBFooter>
  
    )
}
export default Footer