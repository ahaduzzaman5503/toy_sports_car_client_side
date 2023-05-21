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
          <div>
            <h1 className="text-center text-3xl font-bold text-teal-500 py-10">
              Toy Car Gallary
            </h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://i.ibb.co/fHL9Y5p/Hc7163395fd3c4b78a96fcf2795e7922d-Z-jpg-250x250.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://i.ibb.co/rQx0DbZ/Ha78dc000c32f46ce95eb988983be41e1d-jpg-250x250.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://i.ibb.co/qLGw37W/H8f7f4f03441a4e7bacc7db43a7ed93ef8-jpg-960x960.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://i.ibb.co/NVYg0jK/H6d3d5e03e2a04e22a1f93a435b1b28b90-jpg-960x960.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://i.ibb.co/MBsQzMM/H7d533ab22bef483ebfa65472e0faa0fe-F-jpg-250x250.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://i.ibb.co/0QPG08Z/H9640ba2f0fd74308ab9959326e9ad9811-jpg-960x960.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://i.ibb.co/b6FCbp9/Hb418800caa6c431780f993420c08a6c1r-jpg-250x250.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://i.ibb.co/ysxVzWF/H52fe2c89895f4bb9b33b15b23dbed39a-Y-jpg-960x960.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://i.ibb.co/zfg3zvR/H71d926d4eab840d8ab87ed27851de2ef-O-jpg-250x250.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://i.ibb.co/sCB9fJV/Hf18dbccd6bed43e7909e3f3b996fae19q-jpg-250x250.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://i.ibb.co/HKG5KCq/H699dde0b2d854bb2b1090f6391b8d0b6e-jpg-250x250.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://i.ibb.co/pXK84vh/H782f278d4b7b4a69b8d9cf1d5e0a08f3h-jpg-250x250.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Section One  */}
      <section>
        <div>
          <h1 className="text-center text-3xl font-bold text-teal-500 py-10">
            Our Customer Review
          </h1>
        </div>
        <div>
          <div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Very easy this was to integrate
                </h3>
                <p class="my-4">
                  If you care for your time, I hands down would go with this."
                </p>
              </blockquote>
              <figcaption class="flex items-center justify-center space-x-3">
                <img
                  class="rounded-full w-9 h-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="profile picture"
                />
                <div class="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Bonnie Green</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    Developer at Open AI
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Solid foundation for any project
                </h3>
                <p class="my-4">
                  Designing with Figma components that can be easily translated
                  to the utility classes of Tailwind CSS is a huge timesaver!"
                </p>
              </blockquote>
              <figcaption class="flex items-center justify-center space-x-3">
                <img
                  class="rounded-full w-9 h-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                  alt="profile picture"
                />
                <div class="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Roberta Casas</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    Lead designer at Dropbox
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Mindblowing workflow
                </h3>
                <p class="my-4">
                  Aesthetically, the well designed components are beautiful and
                  will undoubtedly level up your next application."
                </p>
              </blockquote>
              <figcaption class="flex items-center justify-center space-x-3">
                <img
                  class="rounded-full w-9 h-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="profile picture"
                />
                <div class="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Jese Leos</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    Software Engineer at Facebook
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Efficient Collaborating
                </h3>
                <p class="my-4">
                  You have many examples that can be used to create a fast
                  prototype for your team."
                </p>
              </blockquote>
              <figcaption class="flex items-center justify-center space-x-3">
                <img
                  class="rounded-full w-9 h-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                  alt="profile picture"
                />
                <div class="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Joseph McFall</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    CTO at Google
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Extra Section Two */}
      <section>
        <div>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url("https://i.ibb.co/fx2tB11/DK-M720-S-PP.jpg")`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Your Best Toy Car</h1>
                <p className="mb-5">
                 Get you best toy car. And Enjoy with your Childern. They will also enjoy to paly by toy car.
                 Get you best toy car. And Enjoy with your Childern. They will also enjoy to paly by toy car.
                 Get you best toy car. And Enjoy with your Childern. They will also enjoy to paly by toy car.
                 Get you best toy car. And Enjoy with your Childern. They will also enjoy to paly by toy car.
                </p>
                <button className="btn btn-primary">Lets Enjoy</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
