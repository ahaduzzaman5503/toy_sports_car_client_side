import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto">
      {/* Banner section */}
      <section>
        <div>
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/Y7sBx7K/Find-Your-Dream-Toy-Car.png"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                <span>❮</span>
                </a>
                <a href="#slide2" className="btn btn-circle">
                <span>❯</span>
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/w4p4VGk/Find-Your-Dream-Toy-Car-1.png"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                <span>❮</span>
                </a>
                <a href="#slide3" className="btn btn-circle">
                <span>❯</span>
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/Y7sBx7K/Find-Your-Dream-Toy-Car.png"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                <span>❮</span>
                </a>
                <a href="#slide4" className="btn btn-circle">
                <span>❯</span>
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/pLsMJyD/Find-Your-Dream-Toy-Car-2.png"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  <span>❮</span>
                </a>
                <a href="#slide1" className="btn btn-circle">
                  <span>❯</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
