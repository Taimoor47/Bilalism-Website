import React from "react";
// import hero from "../assets/Hero/hero.png";
import bb from "../assets/bb.png";
import "./custom.css";
// import { FontAwesomeIcon } from '@fontawesomeicon'

// import Services from "./Services";
import { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    var nav = document.querySelector("nav");

    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 90) {
        nav.classList.add("nav_Color", "shadow");

      } else {
        nav.classList.remove("nav_Color", "shadow");


      }
    });

    window.onload = function () {
      document.addEventListener("click", function (event) {
          // if the clicked element isn't child of the navbar, you must close it if is open
          if (!event.target.closest("#nav") && document.getElementById("navbarNavDropdown").classList.contains("show")) {
              document.getElementById("hamburger_menu_button").click();
          }
      });
  }
  
  },[])

  return (
    <div>
      
      <div className=" ">

        <nav class="navbar fixed-top navbar-expand-lg navbar-danger " id="nav">
 
          <div class="container-fluid">
            <a class="navbar-brand  ms-4 text-info" href="#nav">
              <img src={bb} width="70rem" height="auto" alt="" />
            </a>
            <button
              class="navbar-toggler p-1 collapsed  color-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
              id="hamburger_menu_button"
              style={{zIndex: "12222"}}
            >
                 {/* <i className="fas fa-times "></i> */}
          <span class="icon-bar top-bar"></span>
          <span class="icon-bar middle-bar"></span>
          <span class="icon-bar bottom-bar"></span>


            </button>

            <div
              class="collapse navbar-collapse justify-content-end ms-2 me-2"
              id="navbarNavDropdown"
            >
              <ul class="navbar-nav mb-1 text-uppercase ms-auto ml-auto" id="ul_nav">
                <li class="nav-item ms-3 ">
                  <a
                    class="nav-link active text-white"
                    aria-current="page"
                    href="#nav"
                  >
                 
                    Services
                  </a>
                </li>
                <li class="nav-item ms-3">
                  <a class="nav-link text-white" href="#nav">
                    Clients
                  </a>
                </li>
                <li class="nav-item ms-3">
                  <a class="nav-link text-white" href="#nav">
                    Portfolio
                  </a>
                </li>
                <li class="nav-item  ms-3">
                  <a
                    class="nav-link  text-white"
                    href="#nav"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About Us
                  </a>
                  {/* <ul class="dropdown-menu p-1">
                  <li>
                    <a class="dropdown-item text-white" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white" href="#">
                      Something else here
                    </a>
                  </li>
                </ul> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div class="b_img w-100 vh-100 d-flex justify-content-start align-items-center ">
        <div className="flex-1 text-center mb-5">
        <h1 className="text-dark display-2 fw-bold">Bilalism</h1>
        <h1 className="text-dark display-6">DIGITAL LITERECY</h1>
        <p className="text-center text-break lh-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, doloribus! Sed maxime consequatur nam nemo magnam, est ducimus veniam id nostrum laborum quasi fugiat, velit, itaque odit maiores! Quam, labore!</p>
        </div>

        {/* <div className="flex-1 ms-3 mb-5">
        <h1 className="text-dark display-2">Bilalism</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, doloribus! Sed maxime consequatur nam nemo magnam, est ducimus veniam id nostrum laborum quasi fugiat, velit, itaque odit maiores! Quam, labore!</p>

        </div> */}
        {/* <img src={hero} class=" w-100 position-absolute" alt="." /> */}
      </div>
   
    </div>
  );
}

export default Navbar;
