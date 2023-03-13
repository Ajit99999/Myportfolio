import { skillData } from "../data/skillData";
const Skill = () => {
  return (
    <section
      id="skill"
      className="flex flex-wrap items-center justify-center gap-8 w-auto h-fit px-4 py-12"
    >
      {skillData &&
        skillData.map((elem) => {
          return (
            <div
              key={elem.id}
              className="flex flex-col items-center transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-300  cursor-pointer"
            >
              <elem.imageUrl className=" shadow-xl rounded-full drop-shadow-lg w-24 h-24 text-gray-900" />
              <p>{elem.title}</p>
            </div>
          );
        })}
    </section>
  );
};

export default Skill;

