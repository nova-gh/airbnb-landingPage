import Link from "next/link";
import { FaAirbnb, FaSearch, FaUserCircle } from "react-icons/fa";
import { FiGlobe, FiMenu } from "react-icons/fi";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:px-10 ">
      {/* left */}
      <div className="flex items-center cursor-pointer text-brand">
        <FaAirbnb className="text-4xl" />
        <h1 className="text-xl font-bold">airbnb</h1>
      </div>
      {/* middle */}
      <div className="grid items-center grid-cols-4 p-2 transition duration-100 ease-in-out delay-100 rounded-full md:shadow-sm md:border-2 md:hover:shadow-md">
        <input
          type="text"
          placeholder="Start your search"
          className="col-span-3 pl-5 font-medium bg-transparent outline-none text-primeBlack placeholder-primeBlack"
        />
        <FaSearch className="col-span-1 p-2 text-3xl text-white rounded-full cursor-pointer place-self-end bg-brand" />
      </div>
      {/* right */}
      <div className="items-center hidden ml-auto space-x-4 md:flex text-primeBlack">
        <Link href="/">
          <a className="hidden lg:inline">Become a host</a>
        </Link>
        <FiGlobe className="text-lg cursor-pointer" />
        <div className="flex items-center p-2 space-x-2 border-2 rounded-full shadow-sm cursor-pointer hover:shadow-md">
          <FiMenu className="text-gray-500" />
          <FaUserCircle className="text-2xl text-gray-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;
