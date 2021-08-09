import Banner from "../components/Banner";
import CarouselHome from "../components/CarouselHome";
import CategoryList from "../components/CategoryList";
import FeatureProductsList from "../components/FeatureProductsList";
import HomeAgencies from "../components/HomeAgencies";

const Home = () => {
  //

  return (
    <div>
      <CarouselHome />
      <Banner />
      <FeatureProductsList />
      <CategoryList />
      <HomeAgencies />
    </div>
  );
};

export default Home;
