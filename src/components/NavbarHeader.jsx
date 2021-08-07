import Link from "next/link";
import { FaShuttleVan, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const NavbarHeader = () => (
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
);

export default NavbarHeader;
