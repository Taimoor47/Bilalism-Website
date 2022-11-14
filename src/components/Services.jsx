import React from "react";
import { useEffect } from "react";
import hero from "../assets/bb.png";
import "./custom.css";
function Services() {
    // useEffect(() => {
    //   let items = document.querySelectorAll(".carousel .carousel-item");
    //   var item = items;
    //   item.forEach((el) => {
    //     const minPerSlide = 1;
    //     let next = el.nextElementSibling;
    //     for (var i = 1; i < minPerSlide; i++) {
    //       if (!next) {
    //         // wrap carousel by using first child
    //         next = items[0];
    //       }
    //       let cloneChild = next.cloneNode(true);
    //       el.appendChild(cloneChild.children[0]);
    //       next = next.nextElementSibling;
    //     }
    //   });
    // }, []);

  return (
    <>
      <div className="">
        <div className="container pt-5">
          <h1>Services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio odit
            doloribus laboriosam expedita debitis quo veniam, rem nulla dolore
            voluptates eos accusantium alias repellat! Commodi quas fugit
            quibusdam odio vel?
          </p>
        </div>

        <div className=" mt-5">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="true"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active justify-content-center">
                <div class="cards-wrapper">
                  <div
                    class="card mt-5 bg-info m-5  "
                    style={{ width: "15rem", height: "15rem" }}
                  >
                    <div class="card-body border border-rounded">
                      <h5 class="card-title ">Card title</h5>
                      <h6 class="card-subtitle  text-muted">Card subtitle1</h6>
                      <p class="card-text p-2">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>

				  <div
                    class="card mt-5 bg-info m-5  "
                    style={{ width: "15rem", height: "15rem" }}
                  >
                    <div class="card-body border border-rounded">
                      <h5 class="card-title ">Card title</h5>
                      <h6 class="card-subtitle  text-muted">Card subtitle1</h6>
                      <p class="card-text p-2">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>

				  <div
                    class="card mt-5 bg-info m-5  "
                    style={{ width: "15rem", height: "15rem" }}
                  >
                    <div class="card-body border border-rounded">
                      <h5 class="card-title ">Card title</h5>
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
			  <div class="cards-wrapper">
                  <div
                    class="card mt-5 bg-danger m-5  "
                    style={{ width: "15rem", height: "15rem" }}
                  >
                    <div class="card-body border border-rounded">
                      <h5 class="card-title ">Card title</h5>
                      <h6 class="card-subtitle  text-muted">Card subtitle1</h6>
                      <p class="card-text p-2">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>

				  <div
                    class="card mt-5 bg-danger m-5  "
                    style={{ width: "15rem", height: "15rem" }}
                  >
                    <div class="card-body border border-rounded">
                      <h5 class="card-title ">Card title</h5>
                      <h6 class="card-subtitle  text-muted">Card subtitle1</h6>
                      <p class="card-text p-2">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>

				  <div
                    class="card mt-5 bg-danger m-5  "
                    style={{ width: "15rem", height: "15rem" }}
                  >
                    <div class="card-body  border border-rounded">
                      <h5 class="card-title ">Card title</h5>
                      <h6 class="card-subtitle  text-muted">Card subtitle1</h6>
                      <p class="card-text p-2">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
			  </div>
              <div class="carousel-item justify-content-center ">
			  <div class="cards-wrapper  ">
                  <div
                    class="card mt-5 bg-warning m-5 "
                    style={{ width: "15rem", height: "15rem" }}
                  >
                    <div class="card-body  border border-rounded">
                      <h5 class="card-title ">Card title</h5>
                      <h6 class="card-subtitle  text-muted">Card subtitle1</h6>
                      <p class="card-text p-2">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>

				  <div
                    class="card mt-5 bg-warning m-5  "
                    style={{ width: "15rem", height: "15rem" }}
                  >
                    <div class="card-body border border-rounded">
                      <h5 class="card-title ">Card title</h5>
                      <h6 class="card-subtitle  text-muted">Card subtitle1</h6>
                      <p class="card-text p-2">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>

				  <div
                    class="card mt-5 bg-warning m-5  "
                    style={{ width: "15rem", height: "15rem" }}
                  >
                    <div class="card-body border border-rounded">
                      <h5 class="card-title ">Card title</h5>
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
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          {/* <div class="container text-center my-3">
            <div class="row mx-auto my-auto justify-content-center">
              <div
                id="recipeCarousel"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item  justify-content-center active">
                    <div class="col-md-12 col-sm-8 col-lg-4">
                      <div
                        class="card mt-5 bg-warning m-5  "
                        style={{ width: "15rem", height: "15rem",}}
                      >
                        <div class="card-body border border-rounded">
                          <h5 class="card-title ">Card title</h5>
                          <h6 class="card-subtitle  text-muted">
                            Card subtitle1
                          </h6>
                          <p class="card-text p-2">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                        
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item justify-content-center">
				  <div class="col-md-12 col-sm-8 col-lg-4 ">
                      <div
                        class="card mt-5 bg-info m-5"
                        style={{ width: "15rem", height: "15rem" }}
                      >
                        <div class="card-body border border-rounded">
                          <h5 class="card-title ">Card title</h5>
                          <h6 class="card-subtitle  text-muted">
                            Card subtitle2
                          </h6>
                          <p class="card-text p-2">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                        
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item justify-content-center">
				  <div class="col-md-12 col-sm-8 col-lg-4 ">
                      <div
                        class="card mt-5 bg-danger m-5"
                        style={{ width: "15rem", height: "15rem", }}
                      >
                        <div class="card-body border border-rounded">
                          <h5 class="card-title ">Card title</h5>
                          <h6 class="card-subtitle  text-muted">
                            Card subtitle3
                          </h6>
                          <p class="card-text p-2">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                        
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item justify-content-center">
				  <div class="col-md-12 col-sm-8 col-lg-4 ">
                      <div
                        class="card mt-5 bg-danger m-5"
                        style={{ width: "15rem", height: "15rem"  }}
                      >
                        <div class="card-body border border-rounded">
                          <h5 class="card-title ">Card title</h5>
                          <h6 class="card-subtitle  text-muted">
                            Card subtitle4
                          </h6>
                          <p class="card-text p-2">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                        
                        </div>
                      </div>
                    </div>
					</div>
					<div class="carousel-item justify-content-center">
					<div class="col-md-12 col-sm-8 col-lg-4 ">
                      <div
                        class="card mt-5 bg-danger m-5"
                        style={{ width: "15rem", height: "15rem",}}
                      >
                        <div class="card-body border border-rounded">
                          <h5 class="card-title ">Card title</h5>
                          <h6 class="card-subtitle  text-muted">
                            Card subtitle5
                          </h6>
                          <p class="card-text p-2">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                        
                        </div>
                      </div>
                    </div>
					</div>
					<div class="carousel-item justify-content-center">
					<div class="col-md-12 col-sm-8 col-lg-4">
                      <div
                        class="card mt-5 bg-danger m-5"
                        style={{ width: "15rem", height: "15rem"  }}
                      >
                        <div class="card-body border border-rounded">
                          <h5 class="card-title ">Card title</h5>
                          <h6 class="card-subtitle  text-muted">
                            Card subtitle6
                          </h6>
                          <p class="card-text p-2">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                        
                        </div>
                      </div>
                    </div>
					</div>
                </div>
                <a
                  class="carousel-control-prev bg-transparent w-aut text-dark"
                  href="#recipeCarousel"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon ms-5"
                    aria-hidden="true"
                  ></span>
                </a>
                <a
                  class="carousel-control-next bg-transparent w-aut"
                  href="#recipeCarousel"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon ms-5"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Services;
