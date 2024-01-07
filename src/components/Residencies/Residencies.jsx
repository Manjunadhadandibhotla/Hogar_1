import React from "react";
import "./Residencies.css";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";


// Component ->   slider navigation buttons


const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className=" flexCenter r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

// Main Residencies moving with slider buttons and mouse 
const Residencies = () => {
  return (
    <section className="r-wrapper" id="res">
      <div className="paddings innerWidth r-container ">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="  flexColStart r-card sm:mx-0 sm:shrink-0 shadow-lg shadow-indigo-500/40">
                <img src={card.image} alt="home" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;


