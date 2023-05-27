const Contact = () => {
  return (
    <div className="px-2 lg:px-72 my-10">
      <div className="min-h-[70vh]">
        <h1 className="text-2xl mb-5 text-center">Contact us</h1>
        <form className="p-5 rounded-md bg-base-100 w-3/6 mx-auto">
          <input
            type="text"
            className="w-full p-3 mb-2 bg-base-300 border-none outline-none rounded-md"
            placeholder="Email"
          />
          <textarea
            rows={5}
            className="w-full p-3 mb-2 bg-base-300 border-none outline-none rounded-md"
            placeholder="Message"
          ></textarea>
          <button className="w-full p-3 mb-2 bg-alabamaCrimson text-white uppercase border-none outline-none rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
