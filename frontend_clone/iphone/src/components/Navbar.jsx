import { appleImg, bagImg, searchImg } from "../utils";

const Navbar = () => {
  return (
    <header>
      <nav>
        {/* Apple logo */}
        <img src={appleImg} width={18} height={18} alt="apple" />

        {/* Nav Items */}
        {["Phones", "Macbooks", "Tablets"].map((item) => (
          <div key={item}>{item}</div>
        ))}

        {/* Search and Bag Image */}
        <img src={searchImg} width={18} height={18} alt="search" />
        <img src={bagImg} width={18} height={18} alt="bag" />
      </nav>
    </header>
  );
};

export default Navbar;
