import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import Marquee from "react-fast-marquee";

const ClientReview = () => {
  const data = [
    {
      name: "Jhon Deo",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum iusto quas suscipit atque debitis voluptatem deserunt ipsa quae modi",
    },
    {
      name: "Jhon Deo",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum iusto quas suscipit atque debitis voluptatem deserunt ipsa quae modi",
    },
    {
      name: "Jhon Deo",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum iusto quas suscipit atque debitis voluptatem deserunt ipsa quae modi",
    },
    {
      name: "Jhon Deo",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum iusto quas suscipit atque debitis voluptatem deserunt ipsa quae modi",
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-2 lg:px-72 my-32">
      <h1 className="text-4xl font-bold uppercase text-center mb-10">
        Our Client <span className="text-yellowOrange">Review</span>
      </h1>
      <div>
        <Slider {...settings}>
          {data.map((e, index) => (
            <div key={index}>
              <div className="bg-base-100 p-8 mx-5 rounded-xl text-center">
                <p>
                  <span className="font-bold text-yellowOrange">
                    {e.name} -{" "}
                  </span>
                  {e.review}
                </p>

                <p className="my-3">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-yellowOrange mx-2"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-yellowOrange mx-2"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-yellowOrange mx-2"
                  />
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientReview;
