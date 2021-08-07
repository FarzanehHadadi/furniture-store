import Link from "next/link";
import Image from "next/image";
import { GiShoppingCart } from "react-icons/gi";

import { FaSearch, FaRegBell, FaRegHeart } from "react-icons/fa";
const NavbarMainContent = () => {
  return (
    <div className="nav-main-content">
      <div className="logo">
        <Image src="/logo.png" alt="furniture" width={50} height={50} />
        <Link href="/" className="logo-title">
          <a>
            <p>فروشگاه آنلاین ایران چوب</p>
          </a>
        </Link>
      </div>
      <form>
        <button
          className="search-btn"
          onClick={() => {
            console.log("i am search button");
          }}
        >
          {" "}
          <FaSearch />
        </button>

        <input type="text" className="search-area" placeholder="جستجو"></input>
      </form>
      <div className="nav-icons-links">
        <Link href="">
          <a>
            <FaRegBell />
          </a>
        </Link>
        <Link href="">
          <a>
            <FaRegHeart />
          </a>
        </Link>
        <Link href="">
          <a>
            <GiShoppingCart />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NavbarMainContent;
