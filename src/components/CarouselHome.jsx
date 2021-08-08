import { Carousel } from "react-bootstrap";
import Image from "next/image";
import { carouselContent } from "../constant/Categories";
import "bootstrap/dist/css/bootstrap.css";
const CarouselHome = () => {
  return (
    <div className="carousel-container">
      <Carousel variant="dark">
        {carouselContent.map((carousel) => {
          const { id, img, title, description } = carousel;
          return (
            <Carousel.Item key={id} interval={3000}>
              <Image src={img} alt="furniture" width={800} height={600} />
              {/* <img src={img} alt="furniture" className="d-block w-100" /> */}
              <Carousel.Caption variant="dark">
                <h3>{title}</h3>
                <p>{description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselHome;
