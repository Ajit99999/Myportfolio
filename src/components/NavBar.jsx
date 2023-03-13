import resume from "../data/Ajit97resume.pdf";
const NavBar = () => {
  return (
    <div>
      <nav className="w-auto h-auto  bg-indigo-200 py-4">
        <ul className="flex flex-row justify-end gap-10 items-center mx-4 max-sm:gap-4 max-sm:justify-evenly">
          <li>
            {" "}
            <a href="#about"> About </a>{" "}
          </li>
          <li>
            <a href="#project"> Projects </a>
          </li>

          <li>
            <a href="#skill"> Skills </a>
          </li>
          <li>
            {" "}
            <a href="#contact"> Contact </a>{" "}
          </li>
          <li>
            {" "}
            <a href={resume} download={true}>
              {" "}
              Resume{" "}
            </a>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
