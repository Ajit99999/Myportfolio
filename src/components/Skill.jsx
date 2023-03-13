import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
const Skill = () => {
  return (
    <section id="skill" className="flex flex-wrap items-center justify-center gap-8 w-auto h-fit px-4 py-12">
      <div>
        <SiHtml5 className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-300  cursor-pointer shadow-xl rounded-full drop-shadow-lg w-24 h-24 text-gray-900" />
      </div>
      <div>
        <SiCss3 className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer shadow-xl rounded-full w-24 h-24 text-gray-900" />
      </div>
      <div>
        <FaReact className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer shadow-xl rounded-full w-24 h-24 text-gray-900" />
      </div>
      <div>
        <SiRedux className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer  shadow-xl rounded-full w-24 h-24 text-gray-900" />
      </div>
      <div>
        <SiFirebase className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer  shadow-xl rounded-full w-24 h-24 text-gray-900" />
      </div>
      <div>
        <SiNodedotjs className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer shadow-xl rounded-full w-24 h-24 text-gray-900" />
      </div>
      <div>
        <SiExpress className=" transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer shadow-xl rounded-full w-24 h-24 text-gray-900" />
      </div>
      <div>
        <SiTailwindcss className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer  shadow-xl rounded-full w-24 h-24 text-gray-900" />
      </div>
      <div>
        <BsGithub className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer  shadow-xl rounded-full w-24 h-24 text-gray-900" />
      </div>
    </section>
  );
};

export default Skill;
