const Navbar = () => {
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    event.preventDefault(); // Prevent default anchor behavior

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Adjust for fixed navbar height
        behavior: "smooth",
      });
    }
  };

  const workScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault(); // Prevent default anchor behavior
  
    const targetElement = document.getElementById("work");
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Adjust for fixed navbar height
        behavior: "smooth",
      });
    }
  };

  const resumeScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault(); // Prevent default anchor behavior
  
    const targetElement = document.getElementById("resume");
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Adjust for fixed navbar height
        behavior: "smooth",
      });
    }
  };
  


  return (
    <nav className="flex justify-between items-center p-8 px-10 bg-black shadow-md fixed w-full top-0 z-50">
      {/* Left Side: Logo and Name */}
      <a href="#home" onClick={(e) => handleScroll(e, "home")} className="flex items-center gap-8">
        {/* <img src="" alt="Logo" className="h-10 w-10" /> */}
        <span className="text-4xl font-semibold text-white">Collin Columbus</span>
      </a>

      <ul className="flex gap-16 text-white">
        <li>
          <a 
            href="#about" 
            onClick={(e) => handleScroll(e, "about")} 
            className="text-white text-lg relative transition-all hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-500"
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="#work" 
            onClick={(e) => workScroll(e)} 
            className="text-white text-lg relative transition-all hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-500"
          >
            Work
          </a>
        </li>
        <li>
          <a 
            href="#resume" 
            onClick={(e) => resumeScroll(e)} 
            className="text-white text-lg relative transition-all hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-500"
          >
            Resume
         </a>
        </li>
        <li>
          <a 
            href="#contact" 
            onClick={(e) => handleScroll(e, "contact")} 
            className="text-white text-lg relative transition-all hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-500"
          >
            Contact
          </a>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;
