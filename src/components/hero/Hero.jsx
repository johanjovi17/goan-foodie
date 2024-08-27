import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { BiSolidDish } from "react-icons/bi";
import HeroImg from "../../assets/hero-img.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="container min-h-screen px-10 pt-20 bg-gradient-to-br  from-purple-50  via-orange-50 to-transplant max-w-full">
        <div className="container-content max-w-full mx-auto gap-10 pb-15 flex justify-between pt-18">
          <p className="text-indigo-600 text-left mt-5 font-medium w-1/4 leading-relaxed text-sm">
            Sorpotel, is a dish of Portuguese origin now commonly cooked in the
            Konkan—primarily Goa, Mangalore, and Bombay—the erstwhile Estado da
            Índia Portuguesa colony. It is also prepared in northeastern Brazil.
          </p>
          <div className=" flex flex-col ml-30 text-center pt-5 w-1/2 items-center">
            <h1 className="text-grey-700 font-serif text-7xl">
              We Have <br />
              <span className="text-indigo-600 text-right">SORPOTEL!</span>
            </h1>
            <div className="btn-container flex mt-10 gap-8 items-center  mx-auto ">
              <Link to="/menu">
                <button className="px-8 py-3 group flex transition items-center justify-center gap-2 font-semibold font-display rounded-full text-white bg-indigo-600 shadow-sm hover:opacity-80 transition">
                  <BiSolidDish className="group-hover:-translate-y-1 transition duration-300" />
                  Order now
                </button>
              </Link>
              <Link to="https://en.wikipedia.org/wiki/Sarapatel">
                <button className="px-8 py-3 font-semibold font-display rounded-full text-indigo-600 border rounded shadow-sm  hover:border-indigo-600 transition duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className="social-media-container px-3 py-10 flex w-1/5 items-end flex-col gap-3">
            <FaTwitter className="text-xl text-indigo-600 mb-3 cursor-pointer hover:translate-x-1 transition" />
            <FaInstagram className="text-xl text-indigo-600 mb-3 cursor-pointer hover:translate-x-1 transition" />
            <FaFacebook className="text-xl text-indigo-600 mb-3 cursor-pointer hover:translate-x-1 transition" />
          </div>
        </div>
        <div className="items-center flex mt-8 justify-center">
          <img src={HeroImg} className="w-fit" />
        </div>
      </div>
    </>
  );
};

export default Hero;
