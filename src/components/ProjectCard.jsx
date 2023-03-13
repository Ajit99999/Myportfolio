const ProjectCard = ({
  imageUrl,
  title,
  descr,
  techStack,
  sourceCode,
  liveUrl,
}) => {
  return (
    <div className=" px-4 py-2 w-fit h-fit border border-gray-300 shadow-lg ">
      <img
        src={imageUrl}
        className="border border-gray-300 object-cover w-100 h-36"
      />
      <p className="font-semibold">{title}</p>
      <p>{descr} </p>
      <ul className="flex flex-row list-disc mx-1 justify-around">
        {techStack && techStack.map((elem) => <li key={elem}>{elem}</li>)}{" "}
      </ul>
      <div className="flex justify-between mt-4">
        <a
          className="bg-blue-200  hover:bg-blue-300 px-2 py-1 rounded-lg"
          target={"_blank"}
          href={sourceCode}
        >
          Source Code
        </a>
        <a
          className="bg-blue-200 hover:bg-blue-300 px-2 py-1 rounded-lg"
          target={"_blank"}
          href={liveUrl}
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
