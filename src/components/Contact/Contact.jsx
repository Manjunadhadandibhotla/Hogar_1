import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper" id="cont">
      <div className=" flexCenter innerWidth paddings c-container">
        <div className=" flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText select-text">Easy to Contact Us</span>
          <span className="secondaryText">
            We always ready to help by providing the best service.
            <div className="flexColStart contactModes">
              <div className="flexStart row">
                <div className="flexColCenter mode  sm:mx-0 sm:shrink-0 shadow-lg shadow-indigo-500/40">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdCall size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Call</span>
                      <span className="secondaryText">021 123 145 14</span>
                    </div>
                  </div>
                  <div className="flexCenter bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500   hover: hover: text-white font-bold py-2 px-4 rounded">
                    Call Now
                  </div>
                </div>
                <div className="flexColCenter mode sm:mx-0 sm:shrink-0 shadow-lg shadow-indigo-500/40">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Chat</span>
                      <span className="secondaryText">021 123 145 14</span>
                    </div>
                  </div>
                  <div className="flexCenter bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500   hover: hover: text-white font-bold py-2 px-4 rounded">
                    Chat Now
                  </div>
                </div>
              </div>
              <div className="flexStart row">
                <div className="flexColCenter mode sm:mx-0 sm:shrink-0 shadow-lg shadow-indigo-500/40">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Video Call</span>
                      <span className="secondaryText">021 123 145 14</span>
                    </div>
                  </div>
                  <div className="flexCenter bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500   hover: hover: text-white font-bold py-2 px-4 rounded">
                    Video Call Now
                  </div>
                </div>
                <div className="flexColCenter mode sm:mx-0 sm:shrink-0 shadow-lg shadow-indigo-500/40">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <HiChatBubbleBottomCenter size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Message</span>
                      <span className="secondaryText">021 123 145 14</span>
                    </div>
                  </div>
                  <div className="flexCenter bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500   hover: hover: text-white font-bold py-2 px-4 rounded">
                    Message Now
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
        <div className="c-right">
          <div className="image-container sm:mx-0 sm:shrink-0 shadow-lg shadow-indigo-500/80">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
