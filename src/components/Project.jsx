import { projectsData } from "../data/projectdata";
import ProjectCard from "./ProjectCard";

const Project = () => {
 
  return (
    <section id="project" className="py-4 flex flex-wrap justify-evenly gap-2">
      {projectsData &&
        projectsData.map((elem) => {
          return <ProjectCard key={elem.id} {...elem} />;
        })}
    </section>
  );
};

export default Project;
