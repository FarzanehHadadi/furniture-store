import Link from "next/link";
import Image from "next/image";

const HomeAgencies = () => {
  return (
    <section className="section">
      <h3 className="section-title">مراکز فروش ایران چوب</h3>
      <article className="home-agencies">
        <div className="home-agencies-description">
          <h4>نمایندگی های ایران چوب در سراسر کشور</h4>
          <p className="weather">
            فروشگاه ایران چوب، به منظور آسودگی خاطر و رفاه حال کاربران، امکان
            مراجعه به مراکز فروش و خرید حضوری برخی از وسایل و لوازم مانند
            کالاهای دسته مبلمان (که نیاز به انتخاب رنگ و جنس رویه از نزیک را
            دارند) را فراهم کرده است. برای کسب اطلاعات بیشتر می‌توانید با ما
            تماس بگیرید
          </p>
          <Link href="">
            <a className="light-btn">مشاهده شعب</a>
          </Link>
        </div>
        <picture className="home-agencies-picture">
          <img className="home-agencies-img" src="/img/homeAgency.jpg" />
        </picture>
      </article>
    </section>
  );
};

export default HomeAgencies;
