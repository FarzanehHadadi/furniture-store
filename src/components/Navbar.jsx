import Image from "next/image";
import Link from "next/link";
import {
  FaShuttleVan,
  FaEnvelope,
  FaMapMarkerAlt,
  FaSearch,
  FaRegBell,
  FaRegHeart,
} from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
// import { FaShuttleVan, FaEnvelope } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav>
      <Image src="/logo.png" alt="furniture" width={50} height={50} />
      {/* top level links */}
      <div className="nav-top">
        <div className="icon-links">
          <Link href="">
            <a>
              <FaShuttleVan /> پیگیری سفارش
            </a>
          </Link>
          <div className="vertical-seprator"></div>
          <Link href="">
            <a>
              <FaEnvelope /> راهنمایی
            </a>
          </Link>
          <div className="vertical-seprator"></div>
          <Link href="">
            <a>
              <FaMapMarkerAlt /> نمایندگی ها
            </a>
          </Link>
        </div>
        <div className="nav-title">
          <p>بهترین محصولات چوبی را از ما بخواهید.</p>
        </div>
        <div className="simple-links">
          <Link href="">
            <a>همکاری با ما</a>
          </Link>
          <div className="vertical-seprator"></div>
          <Link href="">
            <a>
              <FaEnvelope /> سفارش خاص
            </a>
          </Link>
          <div className="vertical-seprator"></div>
          <Link href="">
            <a>
              <FaMapMarkerAlt /> بلاگ
            </a>
          </Link>
        </div>
      </div>
      {/* end of top level links */}
      {/* main navbar */}
      {/* end of main navbar */}
      <div className="nav-middle-level">
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
      {/* end of main navbar */}
    </nav>
  );
};

export default Navbar;
