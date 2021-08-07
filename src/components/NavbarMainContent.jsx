import Link from "next/link";
import Image from "next/image";
import { GiShoppingCart } from "react-icons/gi";

import { FaSearch, FaRegBell, FaRegHeart } from "react-icons/fa";
const NavbarMainContent = () => {
  return (
    <div className="nav-middle-level">
      <Image src="/logo.png" alt="furniture" width={50} height={50} />

      <Link href="/">
        <a>
          <h3>فروشگاه آنلاین ایران چوب</h3>
        </a>
      </Link>
      <form>
        <button
          onClick={() => {
            console.log("i am search button");
          }}
        >
          {" "}
          <FaSearch />
        </button>

        <input type="text" placeholder="جستجو"></input>
      </form>
      <div className="only-icons-links">
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
