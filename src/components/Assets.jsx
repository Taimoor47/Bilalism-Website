import React from "react";
import { useEffect } from "react";
// import hero from "../assets/bb.png";
import "./custom.css";
function Assets() {
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


    let videoWrapper = document.getElementById("video_wrapper");

let w;
let h;

// get window size and resize the iframe
function resizeIframeWrapper() {
    w = window.innerWidth;
    h = window.innerHeight;

    videoWrapper.style["width"] = `${w}px`;
    videoWrapper.style["height"] = `${h - 200}px`;
}

// call the resize function when windows is resized and after load
window.onload = resizeIframeWrapper;
window.onresize = resizeIframeWrapper;
  }, []);

  return (
    <>
      <div className=" container-fluid text-center">
        <div className="container  pt-5 mb-5">
          <h1>Assets</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio odit
            doloribus laboriosam expedita debitis quo veniam, rem nulla dolore
            voluptates eos accusantium alias repellat! Commodi quas fugit
            quibusdam odio vel?
          </p>
        </div>

        <div class="container border border-danger text-center p-4 my-5">
          {/* <h2 class="font-weight-light">sdfs</h2> */}
          
                <div className="m-2 p-2">
                <button className="btn btn-danger p-3 assets_width w-50">Vectors</button>

                </div>
                <div className="m-2 p-2">
                <button className="btn btn-danger p-3 assets_width w-50">PNG</button>

                </div>

                <div className="m-2 p-2">
                <button className="btn btn-danger p-3 assets_width w-50">Others</button>

                </div>
               
            </div>
            
        
        
      </div>
    </>
  );
}

export default Assets;
