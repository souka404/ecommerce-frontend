import React from "react";
// import woman from "./woman_hero.png"
import banner1 from "assets/banner1.jpg"
import Products from "components/pages/products/Products";
import Footer from "components/layouts/footer/footer";
function Home() {
  return (
    <div className="hero">
      <div class="card bg-dark text-white border-0 ">
        {/* <img
          src={woman}
          class="card-img"
          alt="..."
          height="600px"
          width="50px"
        /> */}
        <img src={banner1} class="card-img" alt="..." height="600px" />

        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON</h5>
            <p class="card-text lead fs-2">CHECk OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Products />
      <Footer />
    </div>
  );
}

export default Home;
