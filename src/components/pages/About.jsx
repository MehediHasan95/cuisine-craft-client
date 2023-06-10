import useTitle from "../../hooks/useTitle";

const About = () => {
  useTitle("About");
  return (
    <div className="px-2 lg:px-72 my-10">
      <div className="min-h-[70vh] text-center">
        <h1 className="text-2xl mb-5">About us</h1>
        <p>
          A recipe website is an online platform that provides a wide variety of
          recipes and cooking-related content to assist users in meal planning,
          cooking, and exploring new dishes. These websites serve as valuable
          resources for both amateur and experienced home cooks, offering an
          extensive collection of recipes, cooking tips, ingredient information,
          and more. Recipe websites have become indispensable resources for
          cooking enthusiasts, providing inspiration, guidance, and a sense of
          community in the culinary world. Whether you're a beginner cook
          looking for simple recipes or an experienced chef seeking new ideas,
          these platforms are a treasure trove of culinary delights.
        </p>
      </div>
    </div>
  );
};

export default About;
