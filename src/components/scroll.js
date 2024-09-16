import React, { PureComponent } from "react";

export class Scroll extends PureComponent {
  render() {
    return (
      <div>
        {/* Full-screen section with a static background image and responsive design */}
        <div
          className="bg-cover bg-center h-screen flex items-center justify-center"
          style={{
            backgroundImage: 'url("img/cta-bg.jpg")',
            backgroundAttachment: "fixed", // Make the background static
            height: 400
          }}
        >
          {/* Content container */}
          <div className="text-center">
            {/* Button with text */}
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition duration-300">
              Click Me
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Scroll;
