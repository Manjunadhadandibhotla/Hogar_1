import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <section id="gets">
      <div id="get-started" className="g-wrapper ">
        <div className="paddings innerWidth g-container">
          <div className="flexColCenter inner-container bg-gradient-to-r from-slate-900 to-slate-700">
            <span className="primaryText select-none">
              Get started with Hogar Estate
            </span>
            <span className="secondaryText">
              Subscribe and find super attractive price quotes from us.
              <br />
              Find your residence soon
            </span>
            <button
              className=" bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500   hover:scale-110  text-white font-bold py-2 px-4 rounded"
              href
            >
              <a href="mailto:zainkeepscode@gmail.com">Get Started</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
