import React from "react";
import { useEffect } from "react";
// import hero from "../assets/bb.png";
import "./custom.css";
function Lectures() {
  useEffect(() => {
    let items = document.querySelectorAll(".carousel4 .carousel-item");

    items.forEach((el) => {
      // number of slides per carousel-item
      const minPerSlide = 4;
      let next = el.nextElementSibling;
      for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
          // wrap carousel by using first child
          next = items[0];
        }
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
      }
    });


//     let videoWrapper = document.getElementById("video_wrapper");

// let w;
// let h;

// get window size and resize the iframe
// function resizeIframeWrapper() {
//     w = window.innerWidth;
//     h = window.innerHeight;

//     videoWrapper.style["width"] = `${w}px`;
//     videoWrapper.style["height"] = `${h - 200}px`;
// }

// call the resize function when windows is resized and after load
// window.onload = resizeIframeWrapper;
// window.onresize = resizeIframeWrapper;
  }, []);

  return (
    <>
      <div className=" container-fluid text-center portfolio_sec ">
        <div className="container  pt-5 mb-5">
          <h1>Lectures</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio odit
            doloribus laboriosam expedita debitis quo veniam, rem nulla dolore
            voluptates eos accusantium alias repellat! Commodi quas fugit
            quibusdam odio vel?
          </p>
        </div>

        <div class="container text-center my-5">
          {/* <h2 class="font-weight-light">sdfs</h2> */}
          <div class="row mx-auto my-auto ">
            <div
              id="recipeCarouse4"
              class="carousel carousel4 slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner" role="listbox">
                <div class="carousel-item  active">
                  <div class="col-md-4  ">
                {/* <a href="#nav"> */}

                    <div
                      class="card mt-5 bg-danger card_size m-5  "
                      style={{
                        width: "334px",
                        height: "334px",
                        borderRadius: "12px",
                        overflow: "hidden",
                      }}
                    >
                      <div class="card-body border-rounded">
                        <h5 class="card-title ">Card title 1</h5>
                        <h6 class="card-subtitle  text-muted">
                          Card subtitle1
                        </h6>
                        
                        <iframe
                          className="p-3 responsive-iframe"
                         
                          width="100%"
                          height="100%"
                          title="myFrame"
                          src="https://www.youtube.com/embed/tgbNymZ7vqY"
                          
                        ></iframe>
                  
                      </div>

                    </div>
                {/* </a> */}

                  </div>
                </div>
                <div class="carousel-item">
                  <div class="col-md-4 ">
                    <div
                      class="card mt-5 bg-danger card_size m-5 "
                      style={{
                        width: "334px",
                        height: "334px",
                        borderRadius: "12px",
                        overflow: "hidden",
                      }}
                    >
                      <div class="card-body border-rounded">
                        <h5 class="card-title ">Card title 2</h5>
                        <h6 class="card-subtitle  text-muted">
                          Card subtitle1
                        </h6>
                        <iframe
                          className="p-3 responsive-iframe"
                          width="100%"
                          height="100%"
                          title="myFrame"
                          src="https://www.youtube.com/embed/tgbNymZ7vqY"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="col-md-4 ">
                    <div
                      class="card mt-5 bg-danger card_size m-5 "
                      style={{
                        width: "334px",
                        height: "334px",
                        borderRadius: "12px",
                        overflow: "hidden",
                      }}
                    >
                      <div class="card-body border-rounded">
                        <h5 class="card-title ">Card title 3</h5>
                        <h6 class="card-subtitle  text-muted">
                          Card subtitle1
                        </h6>
                        <iframe
                          className="p-3 responsive-iframe "
                          title="myFrame"
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/tgbNymZ7vqY"
                          allowfullscreen="allowfullscreen"
                          mozallowfullscreen="mozallowfullscreen" 
                          msallowfullscreen="msallowfullscreen" 
                          oallowfullscreen="oallowfullscreen" 
                          webkitallowfullscreen="webkitallowfullscreen"  
                          frameborder="0"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="col-md-4 ">
                    <div
                      class="card mt-5 bg-danger card_size m-5 "
                      style={{
                        width: "334px",
                        height: "334px",
                        borderRadius: "12px",
                        overflow: "hidden",
                      }}
                    >
                      <div class="card-body border-rounded">
                        <h5 class="card-title ">Card title 4</h5>
                        <h6 class="card-subtitle  text-muted">
                          Card subtitle1
                        </h6>
                        <iframe
                          className="p-3 responsive-iframe"
                          width="100%"
                          height="100%"
                          title="myFrame"
                          src="https://www.youtube.com/embed/tgbNymZ7vqY"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div class="carousel-item">
                    <div class="col-md-4 ">
                        <div class="card m-5">
                            <div class="card-img">
                                <img src="//via.placeholder.com/500x400/aba?text=5" class="img-fluid"/>
                            </div>
                            <div class="card-img-overlay">Slide 5</div>
                        </div>
                    </div>
                </div> */}
                <div class="carousel-item">
                  <div class="col-md-4 ">
                    <div
                      class="card mt-5 bg-danger card_size m-5 "
                      style={{
                        width: "334px",
                        height: "334px",
                        borderRadius: "12px",
                        overflow: "hidden",
                      }}
                    >
                      <div class="card-body border-rounded">
                        <h5 class="card-title ">Card title 5</h5>
                        <h6 class="card-subtitle  text-muted">
                          Card subtitle1
                        </h6>
                        <iframe
                          className="p-3 responsive-iframe"
                          width="100%"
                          height="100%"
                          title="myFrame"
                          src="https://www.youtube.com/embed/tgbNymZ7vqY"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                  
                </div>
              
              </div>
              <a
                class="carousel-control-prev bg-transparent w-aut"
                href="#recipeCarouse4"
                role="button"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
              </a>
              <a
                class="carousel-control-next bg-transparent w-aut"
                href="#recipeCarouse4"
                role="button"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
              </a>
            </div>
            
          </div>
          
        </div>
        
      </div>
    </>
  );
}

export default Lectures;
