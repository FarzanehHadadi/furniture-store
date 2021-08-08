import Link from "next/link";
const Banner = () => {
  return (
    <Link href="">
      <a className="banner">
        <h4>فروشگاه مبل و دکوراسیون ایران چوب</h4>
        <div className="banner-img">
          <p>ثبت نام کنید</p>
          <p>
            و از مزایای <span>عضویت</span> بهره مند شوید
          </p>
        </div>
      </a>
    </Link>
  );
};

export default Banner;
