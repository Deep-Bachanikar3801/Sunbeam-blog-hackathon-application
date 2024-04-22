import Footer from "../component/footer";

import Navbar from "../component/navbar";
function Home() {
  return (
    <div>
      
        <Navbar/>

      <div className="container mt-3 ">
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h2>Travel Blogs</h2>
                <p>Explore the world.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                style={{ height: 750 }}
                src="https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h2>Movies and Entertainment</h2>
                <p>Explore the Entertainment Industry.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://mongooseagency.com/files/3415/9620/1413/Return_of_Sports.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h2>Sports</h2>
                <p>Explore The Sports Industry.</p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
        
     <Footer/>
     
    </div>
  )
}

export default Home;
