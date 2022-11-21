import React from "react";
import { useEffect } from "react";
import hero from "../assets/bb.png";
// import "./css/portfolio.css";
function Portfolio() {
      useEffect(() =>{
          let items = document.querySelectorAll('.carousel1 .carousel-item')
       
          items.forEach((el) => {
  			const minPerSlide = 4
  			let next = el.nextElementSibling
  			for (var i=1; i<minPerSlide; i++) {
  				if (!next) {
              // wrap carousel by using first child
              next = items[0]
          }
          let cloneChild = next.cloneNode(true)
          el.appendChild(cloneChild.children[0])
          next = next.nextElementSibling
              }
  })
      },[])

  return (
    <>
      <div className="text-center bg-warning py-4" >
        <div className="container pt-5">
          <h1>Portfolio</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio odit
            doloribus laboriosam expedita debitis quo veniam, rem nulla dolore
            voluptates eos accusantium alias repellat! Commodi quas fugit
            quibusdam odio vel?
          </p>
        </div>

        <div className=" mt-5 my-5" >
          <div class="container bg-danger p-5 text-center my-5"
           style={{ borderRadius: "12px" }}
           >
            <div class="row mx-auto my-auto justify-content-center">
              <div
                id="recipeCarousel1"
                class="carousel carousel1 slide"
                data-bs-ride="carousel"
				
              >
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
				          <div class="col-md-3">
                      <div class="card">
                        <div class="card-img">
                        <div class="card-img">
                          <img src={hero} class="img-fluid" alt="img"/>
                        </div>
                        </div>
                        <div class="card-img-overlay">Slide 6</div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="col-md-3">
                      <div class="card">
                        <div class="card-img">
                          <img src={hero} class="img-fluid" width="auto" height="auto" alt="img"/>
                        </div>
                        <div class="card-img-overlay">Slide 2</div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="col-md-3">
                      <div class="card">
                        <div class="card-img">
                          <img src={hero} class="img-fluid" alt="img"/>
                        </div>
                        <div class="card-img-overlay">Slide 3</div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="col-md-3">
                      <div class="card">
                        <div class="card-img">
                          <img src={hero} class="img-fluid" alt="img"/>
                        </div>
                        <div class="card-img-overlay">Slide 4</div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="col-md-3">
                      <div class="card">
                        <div class="card-img">
                          <img src={hero} class="img-fluid" alt="img"/>
                        </div>
                        <div class="card-img-overlay">Slide 5</div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="col-md-3">
                      <div class="card">
                        <div class="card-img">
                          <img src={hero} class="img-fluid" alt="img"/>
                        </div>
                        <div class="card-img-overlay">Slide 6</div>
                      </div>
                    </div>
                  </div>
                </div>
                <a class="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel1" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a class="carousel-control-next bg-transparent w-aut" href="#recipeCarousel1" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
              </div>
          
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
