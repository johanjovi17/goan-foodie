import React from "react";
import simpleBetterPic from "../../assets/pics/simpleBetterPic.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SimpleTastesBetter = () => {
  return (
    <div className="simple-better-container md:min-h-screen max-w-full p-5 md:p-20">
      <div className="simple-better-content items-center md:justify-between md:flex">
        <div className="simple-better-left md:px-20 py-10 md:flex-[0.9]">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
            className="md:text-6xl text-4xl mb-4 font-serif font-bold"
          >
            Simple Tastes
          </motion.h1>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
            className="md:text-6xl text-4xl font-serif font-bold text-indigo-600 mb-4"
          >
            Better
          </motion.span>
          <hr className="h-1 bg-indigo-600 w-24 my-6 border-rounded rounded-full"></hr>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="mt-10 text-base text-slate-500 mb-10"
          >
            At GoanFoodie, we believe that grilling with family and friends is
            one of life's simple pleasures and that the products we use to grill
            should be simple too. That's why we created the country's best
            tasting line of food products using real, simple ingredients with
            names you can pronounce.
          </motion.p>
          <Link to="/about">
            <button
              onClick={() => window.scrollTo(0, 0)}
              className="bg-indigo-600 rounded-full px-5 py-3 text-md font-display text-white hover:cursor-pointer hover:bg-indigo-700 transition"
            >
              <motion.p
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.3,
                  y: { type: "spring", stiffness: 40 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                whileTap={{ scale: 0.9 }}
              >
                About GoanFoodie
              </motion.p>
            </button>
          </Link>
        </div>
        <div className="simple-better-right flex-1">
          <div className="hidden items-center md:flex mt-8 justify-center">
            <img src={simpleBetterPic} alt="" className="rotate-6 shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleTastesBetter;
