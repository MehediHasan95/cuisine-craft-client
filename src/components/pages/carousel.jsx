import Slider from "react-slick";
import BannerSlider from "../utilities/BannerSlider";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";

const Carousel = () => {
  const sliderData = [
    {
      title: "Eat Healthy be Nutrition Wealthy",
      message:
        "Healthy eating is a way of life, so it’s important to establish routines that are simple, realistically, and ultimately livable.",
      img: slider1,
    },
    {
      title: "Healthy Food Improves Your Mood",
      message:
        "Moderation. Small helpings. Sample a little bit of everything. These are the secrets of happiness and good health.",
      img: slider2,
    },
    {
      title: "Be Fit by Eating Fresh",
      message:
        "Eating healthy food fills your body with energy and nutrients. Imagine your cells smiling back at you and saying: ‘thank you!",
      img: slider3,
    },
  ];

  const settings = {
    arrows: false,
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="lg:px-72 overflow-hidden">
      <Slider {...settings}>
        {sliderData.map((e, index) => (
          <BannerSlider key={index} data={e} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
