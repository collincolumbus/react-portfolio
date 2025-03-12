const Landing = () => {

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

    return (
      <section id = "home" className="h-screen flex flex-col justify-center items-center px-12 bg-black text-white">
        <div className="flex w-full max-w-6xl items-center justify-between -mt-16">
          {/* Left Side: Heading, Text, and Contact Button */}
          <div className="max-w-lg">
            <h1 className="text-6xl font-semibold leading-tight text-center">
              Building Seamless <br /> Web Experiences
            </h1>
            <p className="text-xl text-white mt-4 px-12">
              Hi, I'm Collin, a Web Developer and Designer.
              <br />
              Let's build something together!
            </p>
            <div className = "flex justify-center mt-8">
                <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
                <button className="contact-button px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg transition cursor-pointer swirlCustom">
                    Contact
                </button>
                </a>
                
            </div>
          </div>
  
          {/* Right Side: Placeholder */}
          <div className="relative w-[450px] h-[450px] flex items-center justify-center">

            {/* Glowing Ball */}
            <div   className="absolute w-76 h-76 mt-12 rounded-full blur-2xl opacity-100 swirlPulseCustom z-0"
              style={{
                background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)",
              }}
            ></div>
            <img className="w-full h-full object-cover z-10" src="./src/assets/Headshot2.png" alt="Headshot"/>
            <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gradient-to-t from-black to-transparent z-11"></div>
          </div>
        </div>
  
        {/* Bottom Center: See Work Button */}
        <div className="absolute bottom-6">
          <a href="#work" onClick={(e) => workScroll(e)} className="text-white text-lg font-semibold flex flex-col items-center 
          hover:text-blue-500 transition text-lg hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-500 to-blue-500">
            SEE WORK
            <img src="./src/assets/double_arrow_down.svg?v=2" alt="Logo" 
            className="h-16 w-16 text-white animate-[fadeBounce_2.5s_ease-in-out_infinite]"/>
          </a>
        </div>
      </section>
    );
  };
  
  export default Landing;