import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700">
      <section className="hero-wrapper  ">
        <div className="paddings innerWidth flexCenter hero-container ">
          
          <div className="flexColStart hero-left">
            <div className="hero-title">
              <div className="orange-circle" />
              <motion.h1
                initial={{ y: "2rem", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 2,
                  type: "ease-in",
                }}
              >
                Discover <br />
                Most Suitable
                <br /> Property
              </motion.h1>
            </div>
            <br />
            <br />
            <div className="flexColStart secondaryText flexHero-des">
              <span>
                Find a variety of properties that suit you very easily
              </span>

              <span>
                Forget all difficulties in finding a residence for you
              </span>
              <br />
              <br />
            </div>

            <div className="flexCenter search-bar">
              <HiLocationMarker color="var(--blue)" size={35} className="bit2" />
              <input
                type="text"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:  rounded-md sm:text-sm focus:ring-1"
              />
              <button className=" bit1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500   hover:scale-110  text-white font-bold py-2 px-4 rounded">
                Search
              </button>
            </div>
            <br />
            <br />
            <div className="flexCenter stats">
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={8800} end={9000} duration={4} />{" "}
                  <span>+</span>
                </span>
                <span className="secondaryText">Premium Product</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp start={1950} end={2000} duration={4} />{" "}
                  <span>+</span>
                </span>
                <span className="secondaryText">Happy Customer</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp end={28} /> <span>+</span>
                </span>
                <span className="secondaryText">Awards Winning</span>
              </div>
            </div>
          </div>

          
          <div className="flexCenter hero-right">
            <motion.div
              initial={{ x: "7rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
              className="image-container"
            >
              <img src="./hero-image.png" alt="houses" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
