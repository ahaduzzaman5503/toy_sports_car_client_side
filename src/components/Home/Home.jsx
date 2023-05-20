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
                src="https://i.ibb.co/w4p4VGk/Find-Your-Dream-Toy-Car-1.png"
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
                src="https://i.ibb.co/Y7sBx7K/Find-Your-Dream-Toy-Car.png"
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

      {/* Gallary Section */}
      <section>
        <div className="m-3">
          <div><h1 className="text-center text-3xl font-bold text-teal-500 py-10">Toy Car Gallary</h1></div>
          
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/fHL9Y5p/Hc7163395fd3c4b78a96fcf2795e7922d-Z-jpg-250x250.webp" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/rQx0DbZ/Ha78dc000c32f46ce95eb988983be41e1d-jpg-250x250.webp" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/qLGw37W/H8f7f4f03441a4e7bacc7db43a7ed93ef8-jpg-960x960.webp" alt="" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/NVYg0jK/H6d3d5e03e2a04e22a1f93a435b1b28b90-jpg-960x960.webp" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/MBsQzMM/H7d533ab22bef483ebfa65472e0faa0fe-F-jpg-250x250.webp" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/0QPG08Z/H9640ba2f0fd74308ab9959326e9ad9811-jpg-960x960.webp" alt="" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/b6FCbp9/Hb418800caa6c431780f993420c08a6c1r-jpg-250x250.webp" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/ysxVzWF/H52fe2c89895f4bb9b33b15b23dbed39a-Y-jpg-960x960.webp" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/zfg3zvR/H71d926d4eab840d8ab87ed27851de2ef-O-jpg-250x250.webp" alt="" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/sCB9fJV/Hf18dbccd6bed43e7909e3f3b996fae19q-jpg-250x250.webp" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/HKG5KCq/H699dde0b2d854bb2b1090f6391b8d0b6e-jpg-250x250.webp" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/pXK84vh/H782f278d4b7b4a69b8d9cf1d5e0a08f3h-jpg-250x250.webp" alt="" />
        </div>
    </div>
</div>

        </div>
      </section>
    </div>
  );
};

export default Home;
