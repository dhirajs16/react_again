import { navLists } from "../constants";
import { appleImg, bagImg, searchImg } from "../utils";

const Navbar = () => {
  return (
    <header className="w-screen p-5 sm:px-10 ">
      <nav className="w-full screen-max-width flex justify-between items-center">
        {/* Apple logo */}
        <img src={appleImg} width={18} height={18} alt="apple" />

        {/* Nav List Items */}
        <div className="max-sm:hidden flex gap-5">
          {navLists.map((item) => (
            <div
              key={item}
              className="text-gray cursor-pointer hover:text-white transition-all"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Search and Bag Image */}
        <div className="flex sm:gap-7 gap-5 items-center">
          <img src={searchImg} width={18} height={18} alt="search" />
          <img src={bagImg} width={18} height={18} alt="bag" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
