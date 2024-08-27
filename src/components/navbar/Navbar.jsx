import React, { useState, useContext } from "react";
import { MdLogout, MdMenu, MdClose } from "react-icons/md";
import { PiShoppingCartFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const { getTotalCartAmount, getTotalCartItems } = useContext(StoreContext);

  return (
    <nav className="p-4 w-full flex bg-white border-b justify-between items-center fixed z-10 ">
      <span className="text-indigo-600 pl-5 text-xl font-bold font-playwrite">
        GoanFoodie
      </span>
      {/* Navbar for large devices */}
      <div className="navContainer hidden md:flex justify-evenly items-center gap-12 mx-10">
        <Link
          to="/"
          className="font-medium text-indigo-600 hover:-translate-y-1 transition"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="font-medium text-indigo-600 hover:-translate-y-1 transition"
        >
          About
        </Link>
        <Link
          to="/menu"
          className="font-medium text-indigo-600 hover:-translate-y-1 transition"
        >
          Menu
        </Link>
        <Link
          to="/recommend"
          className="font-medium text-indigo-600 hover:-translate-y-1 transition"
        >
          Recommend
        </Link>
      </div>
      {/* Logout button for large devices */}
      <div className=" items-center gap-5 hidden md:flex cursor-pointer px-5 ">
        <div className="cart-container relative p-3">
          <Link to="/cart">
            <PiShoppingCartFill className="text-indigo-600 text-3xl " />
          </Link>
          <div
            className={
              getTotalCartAmount() === 0
                ? ""
                : "animate-bounce h-[12px] w-[12px] items-center flex justify-center bg-red-600 rounded rounded-full absolute top-0 right-0 text-[14px] text-white"
            }
          ></div>
        </div>
        <p className="border border-indigo-600 py-2 px-5 rounded-full text-indigo-600 hover:translate-x-2 transition items-center gap-2 flex">
          Logout
          <MdLogout className="text-indigo-600 text-lg" />
        </p>
      </div>
      {/* Menu button for small devices */}
      <button
        className="md:hidden text-white text-2xl z-10"
        onClick={toggleNavbar}
      >
        {isOpen ? <MdClose /> : <MdMenu className="text-indigo-600" />}
      </button>
      {/* Responsive navbar container */}
      {isOpen && (
        <div className="p-3 fixed bg-indigo-600 inset-0 md:hidden">
          <span className="text-white font-bold font-mono">
            Fish<span className="text-cyan-500">Face</span>
          </span>
          <div className="mt-6">
            <p className="m-3 p-2 font-medium text-white">Home</p>
            <p className="m-3 p-2 font-medium text-white">About</p>
            <p className="m-3 p-2 font-medium text-white">Menu</p>
            <p className="m-3 p-2 font-medium text-white">Profile</p>
          </div>
          <div className="border rounded py-3 cursor-pointer flex px-5 items-center justify-center gap-2">
            <p className="text-white">Logout</p>
            <MdLogout className="text-white text-lg" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
