import React from "react";
import { useEffect } from "react";
import "./custom.css";

function Blogs() {
  useEffect(() => {
    let items = document.querySelectorAll(".carousel3 .carousel-item");

    items.forEach((el) => {
      const minPerSlide = 1;
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
  }, []);

  return (
    <>
      <div className="text-center py-4">
        <div className="container pt-5">
          <h1>Blogs</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio odit
            doloribus laboriosam expedita debitis quo veniam, rem nulla dolore
            voluptates eos accusantium alias repellat! Commodi quas fugit
            quibusdam odio vel?
          </p>
        </div>

        <div className="mt-5 text-center my-5">
          <div
            class="container border border-danger p-5 text-center my-5"
            style={{ borderRadius: "12px" }}
          >
            <div class="row mx-auto my-auto ">
              <div
                id="recipeCarousel3"
                class="carousel carousel3 slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                    <div class="col-md-12   ">
                      <div class="card1 border m-5">
                        <div class="card1 border-img">
                          <h1 className=" pt-4">Fundamentals of Design</h1>

                          <p className="p-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Minus perferendis error ducimus odit inventore
                            numquam rem omnis non temporibus adipisci totam
                            vitae, aliquid excepturi deserunt officia dolorem
                            molestias quisquam eos. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Assumenda est cum
                            debitis, nulla architecto sint unde eligendi quis.
                            Atque nostrum nesciunt natus magnam molestias sunt.
                            Recusandae quas unde similique cupiditate. Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Ea impedit quia odit maiores doloremque numquam
                            dolore eveniet error accusantium, harum laudantium
                            earum beatae totam ullam molestiae, quas reiciendis
                            id perferendis!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="carousel-item active">
                    <div class="col-md-12 ">
                      <div class="card1 border m-5">
                        <div class="card1 border-img">
                          <h1 className=" pt-4">Fundamentals of Design</h1>

                          <p className="p-3 px-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Minus perferendis error ducimus odit inventore
                            numquam rem omnis non temporibus adipisci totam
                            vitae, aliquid excepturi deserunt officia dolorem
                            molestias quisquam eos. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Assumenda est cum
                            debitis, nulla architecto sint unde eligendi quis.
                            Atque nostrum nesciunt natus magnam molestias sunt.
                            Recusandae quas unde similique cupiditate. Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Ea impedit quia odit maiores doloremque numquam
                            dolore eveniet error accusantium, harum laudantium
                            earum beatae totam ullam molestiae, quas reiciendis
                            id perferendis!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="carousel-item active">
                    <div class="col-md-12 ">
                      <div class="card1 border m-5">
                        <div class="card1 border-img">
                          <h1 className=" pt-4">Fundamentals of Design</h1>

                          <p className="p-3 px-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Minus perferendis error ducimus odit inventore
                            numquam rem omnis non temporibus adipisci totam
                            vitae, aliquid excepturi deserunt officia dolorem
                            molestias quisquam eos. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Assumenda est cum
                            debitis, nulla architecto sint unde eligendi quis.
                            Atque nostrum nesciunt natus magnam molestias sunt.
                            Recusandae quas unde similique cupiditate. Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Ea impedit quia odit maiores doloremque numquam
                            dolore eveniet error accusantium, harum laudantium
                            earum beatae totam ullam molestiae, quas reiciendis
                            id perferendis!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  class="carousel-control-prev bg-transparent w-aut"
                  href="#recipeCarousel3"
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
                  href="#recipeCarousel3"
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
      </div>
    </>
  );
}

export default Blogs;
