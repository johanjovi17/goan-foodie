import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { BiSolidDish } from "react-icons/bi";
import HeroImg from "../../assets/hero-img.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="container min-h-screen px-10 pt-20 bg-gradient-to-br from-purple-50 via-orange-50 to-transplant max-w-full">
        <div className="container-content max-w-full mx-auto md:gap-10 pb-15 md:flex justify-between pt-18">
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-indigo-600 text-left hidden md:block mt-5 font-medium w-1/4 leading-relaxed text-sm"
          >
            Sorpotel, is a dish of Portuguese origin now commonly cooked in the
            Konkan—primarily Goa, Mangalore, and Bombay—the erstwhile Estado da
            Índia Portuguesa colony. It is also prepared in northeastern Brazil.
          </motion.p>
          <div className=" flex flex-col ml-30 text-center pt-5 mt-20 md:mt-0 md:w-1/2 items-center">
            <motion.h1
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              className="text-grey-700 font-serif text-6xl md:text-7xl mb-10 md:mb-0"
            >
              We Have <br />
              <span className="text-indigo-600 text-right">SORPOTEL!</span>
            </motion.h1>
            <div className="btn-container flex md:mt-10 gap-8 items-center mx-auto mb-10 md:mb-0">
              <Link to="/menu">
                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { delay: 0.4 } }}
                  onClick={() => window.scrollTo(0, 0)}
                  whileTap={{ scale: 0.9 }}
                  className="md:px-8 px-3 py-3 group flex transition items-center justify-center gap-2 font-semibold text-md md:font-display rounded-full text-white bg-indigo-600 shadow-sm hover:opacity-80 transition"
                >
                  <BiSolidDish className="group-hover:-translate-y-1 transition duration-300" />
                  Order now
                </motion.button>
              </Link>
              <Link to="https://en.wikipedia.org/wiki/Sarapatel">
                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { delay: 0.6 } }}
                  whileTap={{ scale: 0.9 }}
                  className="md:px-8 px-2 py-3 font-semibold md:font-display text-md rounded-full text-indigo-600 border rounded shadow-sm  hover:border-indigo-600 transition duration-300"
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </div>
          <div className="social-media-container px-3 py-10 flex md:w-1/5  items-center justify-center md:items-end md:flex-col gap-6 md:gap-3">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
            >
              <FaTwitter className="text-xl text-indigo-600 mb-3 cursor-pointer hover:translate-x-1 transition" />
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.5 } }}
            >
              <FaInstagram className="text-xl text-indigo-600 mb-3 cursor-pointer hover:translate-x-1 transition" />
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.7 } }}
            >
              <FaFacebook className="text-xl text-indigo-600 mb-3 cursor-pointer hover:translate-x-1 transition" />
            </motion.p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.7 } }}
          className="items-center flex md:mt-8 justify-center "
        >
          <motion.img
            animate={{
              y: [0, -10, 0], // Move up, then down, and back to the original position
            }}
            transition={{
              duration: 1.5, // Length of one bounce
              repeat: Infinity, // Repeat infinitely
              repeatType: "loop", // Loop the animation
              ease: "easeInOut", // Smooth bounce effect
            }}
            src={HeroImg}
            className="w-fit"
          />
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
