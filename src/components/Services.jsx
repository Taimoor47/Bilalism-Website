import React from "react";
import { useEffect } from "react";
// import hero from "../assets/bb.png";
import "./custom.css";
function Services() {
  useEffect(() => {
    let items = document.querySelectorAll('.carousel2 .carousel-item')

    items.forEach((el) => {
        // number of slides per carousel-item justify-content-center
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
  }, []);

  return (
    <>
      <div className=" text-center my-3" >
        <div className="container pt-5 mb-5">
          <h1>Services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio odit
            doloribus laboriosam expedita debitis quo veniam, rem nulla dolore
            voluptates eos accusantium alias repellat! Commodi quas fugit
            quibusdam odio vel?
          </p>
        </div>

        <div class="container text-center my-5" >
    {/* <h2 class="font-weight-light">sdfs</h2> */}
    <div class="row mx-auto my-auto ">
        <div id="recipeCarousel" class="carousel carousel2 slide" data-bs-ride="carousel">
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item  active">
                    <div class="col-md-4  ">
                    <div
                    class="card mt-5 bg-info card_size m-5  "
                    style={{
                      width: "334px",
                      height: "334px",
                      borderRadius: "12px",
                      overflow: "hidden"
                      
                    }}
                  >
                    <div class="card-body border-rounded">
                      <h5 class="card-title ">Card title 1</h5>
                      <h6 class="card-subtitle  text-muted">Card subtitle1</h6>
                      <p class="card-text p-2">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                    </div>
                </div>
                <div class="carousel-item justify-content-center">
                    <div class="col-md-4 ">
                    <div
                    class="card mt-5 bg-danger card_size m-5 "
                    style={{
                      width: "334px",
                      height: "334px",
                      borderRadius: "12px",
                      overflow: "hidden"
                      
                    }}
                  >
                    <div class="card-body border-rounded">
                      <h5 class="card-title ">Card title 2</h5>
                      <h6 class="card-subtitle  text-muted">Card subtitle1</h6>
                      <p class="card-text p-2">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-md-4 ">
                    <div
                    class="card mt-5 bg-warning card_size m-5 "
                    style={{
                      width: "334px",
                      height: "334px",
                      borderRadius: "12px",
                      overflow: "hidden"
                      
                    }}
                  >
                    <div class="card-body border-rounded">
                      <h5 class="card-title ">Card title 3</h5>
                      <h6 class="card-subtitle  text-muted">Card subtitle1</h6>
                      <p class="card-text p-2">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                    </div>
                </div>
                <div class="carousel-item justify-content-center">
                    <div class="col-md-4 ">
                    <div
                    class="card mt-5 bg-success card_size m-5 "
                    style={{
                      width: "334px",
                      height: "334px",
                      borderRadius: "12px",
                      overflow: "hidden"
                      
                    }}
                  >
                    <div class="card-body border-rounded">
                      <h5 class="card-title ">Card title 4</h5>
                      <h6 class="card-subtitle  text-muted">Card subtitle1</h6>
                      <p class="card-text p-2">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                    </div>
                </div>
                {/* <div class="carousel-item justify-content-center">
                    <div class="col-md-4 ">
                        <div class="card m-5">
                            <div class="card-img">
                                <img src="//via.placeholder.com/500x400/aba?text=5" class="img-fluid"/>
                            </div>
                            <div class="card-img-overlay">Slide 5</div>
                        </div>
                    </div>
                </div> */}
                <div class="carousel-item justify-content-center">
                    <div class="col-md-4 ">
                    <div
                    class="card mt-5 bg-primary card_size m-5 "
                    style={{
                      width: "334px",
                      height: "334px",
                      borderRadius: "12px",
                      overflow: "hidden"
                      
                    }}
                  >
                    <div class="card-body border-rounded">
                      <h5 class="card-title ">Card title 5</h5>
                      <h6 class="card-subtitle  text-muted">Card subtitle1</h6>
                      <p class="card-text p-2">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                    </div>
                </div>
             
            </div>
            <a class="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a class="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div>
      
    </div>

</div>

      </div>
    </>
  );
}

export default Services;
