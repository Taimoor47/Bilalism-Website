import React from "react";
import hero from "../assets/Hero/hero.png";
import bb from "../assets/bb.png";
import "./custom.css";
import Services from "./Services";
import { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    var nav = document.querySelector("nav");

    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 100) {
        nav.classList.add("bg-danger", "shadow");
      } else {
        nav.classList.remove("bg-danger", "shadow");
      }
    });
  },[])
 
  return (
    <div>
      <div className=" ">
        <nav class="navbar fixed-top navbar-expand-lg navbar-danger ">
          <div class="container-fluid">
            <a class="navbar-brand  ms-4 text-info" href="#">
              <img src={bb} width="70rem" height="auto" alt="" />
            </a>
            <button
              class="navbar-toggler  border-white color-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="collapse navbar-collapse justify-content-end ms-2 me-2"
              id="navbarNavDropdown"
            >
              <ul class="navbar-nav mb-1 text-uppercase ms-auto ml-auto">
                <li class="nav-item ms-5 ">
                  <a
                    class="nav-link active text-white"
                    aria-current="page"
                    href="#"
                  >
                    Services
                  </a>
                </li>
                <li class="nav-item ms-5">
                  <a class="nav-link text-white" href="#">
                    Clients
                  </a>
                </li>
                <li class="nav-item ms-5">
                  <a class="nav-link text-white" href="#">
                    Portfolio
                  </a>
                </li>
                <li class="nav-item  ms-5">
                  <a
                    class="nav-link  text-white"
                    href="#"
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
        <div className="flex-1 ms-5 mb-5">
        <h1 className="text-dark display-2">Bilalism</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, doloribus! Sed maxime consequatur nam nemo magnam, est ducimus veniam id nostrum laborum quasi fugiat, velit, itaque odit maiores! Quam, labore!</p>

        </div>

        <div className="flex-1 ms-5 mb-5">
        <h1 className="text-dark display-2">Bilalism</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, doloribus! Sed maxime consequatur nam nemo magnam, est ducimus veniam id nostrum laborum quasi fugiat, velit, itaque odit maiores! Quam, labore!</p>

        </div>
        {/* <img src={hero} class=" w-100 position-absolute" alt="." /> */}
      </div>
   
    </div>
  );
}

export default Navbar;
