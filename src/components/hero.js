import React, { PureComponent } from 'react'

export class hero extends PureComponent {
  render() {
    return (
      <>
        {/* Jumbotron */}
        <div
          className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-6 sm:p-8 md:p-12 text-center"
          style={{ 
            backgroundImage: 'url("img/hero-bg.jpg")', 
            backgroundSize: 'cover', // Ensures the image covers the entire div
            backgroundPosition: 'center', // Centers the image within the div
            height: 600 
          }}
        >
          <div
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="flex h-full items-center justify-center">
              <div className="text-white max-w-lg mx-auto">
                <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                  Heading
                </h2>
                <h4 className="mb-6 text-lg sm:text-xl md:text-2xl font-medium">
                  Subheading
                </h4>
                <button
                  type="button"
                  className="rounded border-2 border-neutral-50 px-6 py-2.5 md:px-7 md:py-3 text-sm sm:text-base font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  data-twe-ripple-init=""
                  data-twe-ripple-color="light"
                >
                  Call to action
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Jumbotron */}
      </>
    )
  }
}

export default hero;
