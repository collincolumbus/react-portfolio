const About = () => {
    const logos = [
        "./src/assets/HTML5.png",
        "./src/assets/CSS3.png",
        "./src/assets/JS.png",
        "./src/assets/React.png",
        "./src/assets/Typescript.png",
        "./src/assets/nodejs.png",
        "./src/assets/MongoDB.png",
    ];

    return (
        <section className="h-screen flex flex-col justify-center items-center px-12 bg-black text-white pt-24 -mt-16">
            <div id="about" className="flex w-full max-w-6xl items-center justify-between transform -mt-24 pt-20">
                
                {/* Left Side: Placeholder */}
                <div className="w-80 h-80 bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-400">Placeholder</span>
                </div>

                {/* Right Side: Heading, Text */}
                <div className="max-w-xl">
                    <h2 className="text-5xl font-semibold mb-4 leading-tight text-center">About Me</h2>
                    <p className="text-lg text-white mb-6">
                        My name is Collin Columbus, and I'm a full stack developer based in Saint Paul, Minnesota.
                        I graduated from Augsburg University with a BS in Computer Science.
                        <br />
                        <br />
                        I'm a passionate developer specializing in building interactive web applications. 
                        With experience in modern front- and back-end technologies, I focus on performant and user-friendly experiences.
                    </p>
                </div>
            </div>

            {/* Skills Section */}
            <div className="flex flex-col items-center gap-8 pt-20">

                {/* Skills Heading */}
                <h2 className="text-4xl font-semibold leading-tight text-center">Skills</h2>
                {/* Skill Logos */}
                <div className="flex justify-center gap-16">
                    {logos.map((logo, index) => (
                        <img 
                            key={index} 
                            src={logo} 
                            alt="Tech Logo" 
                            className="skill-logos w-auto h-25 p-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-110"/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
