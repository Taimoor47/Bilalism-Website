import React from "react";
import { useEffect } from "react";
import hero from "../assets/bb.png";
import "./custom.css";
function Portfolio() {
    useEffect(() =>{
        let items = document.querySelectorAll('.carousel .carousel-item')
        var item = items;
		item.forEach((el) => {
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
            
        <div class="container text-center my-3">
		<div class="row mx-auto my-auto justify-content-center">
			<div id="recipeCarousel" class="carousel slide" data-bs-ride="carousel">
				<div class="carousel-inner" role="listbox">
					<div class="carousel-item active">
						<div class="col-md-3 col-sm-12">
                        <div class="card" style={{width:"20rem", height: "auto"}}>
  <div class="card-body">
    <h5 class="card-title p-5">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text p-5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
</div>
					</div>
					<div class="carousel-item">
						<div class="col-md-3">
							<div class="card">
								<div class="card-img">
									<img src={hero} class="img-fluid"/>
								</div>
								<div class="card-img-overlay">Slide 2</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="col-md-3">
							<div class="card">
								<div class="card-img">
									<img src={hero} class="img-fluid"/>
                                    
								</div>
								<div class="card-img-overlay">Slide 3</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="col-md-3">
							<div class="card">
								<div class="card-img">
									<img src={hero} class="img-fluid"/>
								</div>
								<div class="card-img-overlay">Slide 4</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="col-md-3">
							<div class="card">
								<div class="card-img">
									<img src={hero} class="img-fluid"/>
								</div>
								<div class="card-img-overlay">Slide 5</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="col-md-3">
							<div class="card">
								<div class="card-img">
									<img src={hero} class="img-fluid"/>
								</div>
								<div class="card-img-overlay">Slide 6</div>
							</div>
						</div>
					</div>
				</div>
				<a class="carousel-control-prev bg-transparent w-aut text-dark" href="#recipeCarousel" role="button" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				</a>
				<a class="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
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