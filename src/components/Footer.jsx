import { FiInstagram } from "react-icons/fi";
import { FaTelegram, FaSuperpowers } from "react-icons/fa";
import { AiFillTwitterSquare, AiFillFacebook } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import PersianNumber from "../constant/PersianNumbers";
import { MdPayment } from "react-icons/md";
import { BsFolderSymlink, BsBoxArrowInUp } from "react-icons/bs";
import { RiSurveyLine } from "react-icons/ri";
import { BiArrowToTop } from "react-icons/bi";

import Link from "next/link";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer>
      <div className="footer-title">
        <h4>ایران چوب</h4>
        <button
          onClick={() => {
            scrollToTop();
          }}
          className="light-btn"
        >
          بازگشت به بالا <BsBoxArrowInUp />
        </button>
      </div>
      <div className="footer-header">
        <div className="footer-support">
          <p>
            تلفن پشتیبانی:{" "}
            <span className="phone-number">
              <PersianNumber number={`0912 4676371`} />
            </span>
          </p>
          <div className="vertical-seprator"></div>
          <p>هفت روز هفته، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم.</p>
        </div>
      </div>

      <div className="footer-icons">
        <article>
          <FaSuperpowers className="footer-icon" />
          <p>امکان تحویل اکسپرس</p>
        </article>
        <article>
          <MdPayment className="footer-icon" />
          <p>امکان پرداخت در محل</p>
        </article>
        <article>
          <BiSupport className="footer-icon" />
          <p className="desc">
            <span className="phone-number">
              <PersianNumber number={`7`} />
            </span>
            روز هفته،
            <span className="phone-number">
              <PersianNumber number={`24`} />
            </span>
            ساعته
          </p>
        </article>

        <article>
          <BsFolderSymlink className="footer-icon" />

          <p>
            {" "}
            <span className="phone-number">
              <PersianNumber number={`7`} />
            </span>{" "}
            روز ضمانت بازگشت کالا
          </p>
        </article>
        <article>
          <RiSurveyLine className="footer-icon" />
          <p>ضمانت اصل بودن کالا</p>
        </article>
      </div>
      <div className="footer-info-container">
        <article className="footer-info">
          <h5>با ایران چوب</h5>
          <ul>
            <li>
              <Link href="">
                <a>تماس با ما</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>درباره ما</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>دریافت نمایندگی</a>
              </Link>
            </li>
          </ul>
        </article>
        <article className="footer-info">
          <h5>خدمات مشتریان</h5>
          <ul>
            <li>
              <Link href="">
                <a>سوالات متداول</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>رویه های بازگرداندن کالا</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>شرایط استفاده</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>حریم خصوصی</a>
              </Link>
            </li>
          </ul>
        </article>
        <article className="footer-info">
          <h5>راهنمای خرید</h5>
          <ul>
            <li>
              <Link href="">
                <a>نحوه ثبت سفارش</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>رویه ارسال سفارش</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>شیوه های پرداخت</a>
              </Link>
            </li>
          </ul>
        </article>

        <div className="footer-contact">
          <article className="social-links">
            <h5>با ما همراه باشید</h5>

            <a href="https://instagram.com" target="_blank">
              <FiInstagram className="social-link instagram" />
            </a>
            <a href="https://twitter.com" target="_blank">
              <AiFillTwitterSquare className="social-link twitter" />
            </a>
            <a href="https://telegram.org" target="_blank">
              <FaTelegram className="social-link telegram" />
            </a>
            <a href="https://facebook.com" target="_blank">
              <AiFillFacebook className="social-link facebook" />
            </a>
          </article>
          <form className="footer-form">
            <h5>از جدیدترین اخبار آگاه شوید</h5>
            <input
              type="email"
              className="footer-form-input"
              placeholder="آدرس ایمیل خود را وارد کنید"
            />
            <button className="footer-form-btn">ثبت</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
