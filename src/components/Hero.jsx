import HeroImg from "../images/hero.jpeg";
const Hero = () => {
  return (
    <section id="about" className="w-auto h-auto py-10 bg-indigo-200">
      <div className="flex items-center justify-evenly max-sm:flex-col-reverse max-sm:gap-6 max-sm:items-center">
        <div className="max-sm:text-center max-sm:mx-2">
          <p className="text-2xl font-semibold">
            Hi 👋 <span> I'm Ajit! Software Developer </span>
          </p>
          <p>I love to design & build new things. <span className="text-xl" > 😊 </span> </p>
          <p>
            3 years of experiences in Software industry having worked with Startups & Mnc like{" "}
            <span className="font-semibold"> Infosys , Brillio.</span>{" "}
          </p>
        </div>
        <div>
          <img
            className="shadow-lg rounded-full w-72 h-72 object-cover"
            src={HeroImg}
            alt="Not found"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
