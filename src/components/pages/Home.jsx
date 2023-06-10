import useTitle from "../../hooks/useTitle";
import ChefProfile from "./ChefProfile";
import ClientReview from "./ClientReview";
import OutMenu from "./OurMenu";
import Carousel from "./carousel";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Carousel />
      <OutMenu />
      <ChefProfile />
      <ClientReview />
    </div>
  );
};

export default Home;
