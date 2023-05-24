import Slider from "react-slick";

const BannerSlider = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="flex justify-center bg-base-100 text-erieBlack p-10">
        <div className="flex items-center">
          <div>
            <h1 className="text-2xl lg:text-6xl font-bold">{data.title}</h1>
            <p className="my-3">{data.message}</p>
            <button className="w-3/5 lg:w-3/12 py-2 bg-yellowOrange text-white rounded-full">
              Explore
            </button>
          </div>
        </div>
        <img src={data.img} alt="slider1" className="w-3/6" />
      </div>
    </>
  );
};

export default BannerSlider;
