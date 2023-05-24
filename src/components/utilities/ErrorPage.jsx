import errorImage from "../../assets/404.png";

const ErrorPage = () => {
  return (
    <div className="min-h-[75vh] grid place-items-center">
      <div>
        <img src={errorImage} alt="error" className="w-3/12 mx-auto" />
        <p className="text-center text-xl">
          Sorry, an unexpected error has occurred.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
