import { Splide, SplideSlide } from  "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

const About = () => {
    const logos = [
        "./assets/HTML5.png",
        "./assets/CSS3.png",
        "./assets/JS.png",
        "./assets/React.png",
        "./assets/Typescript.png",
        "./assets/nodejs.png",
        "./assets/MongoDB.png",
    ];

    return (
        <section className="h-screen flex flex-col justify-center items-center px-12 bg-black text-white pt-24 -mt-16">
            <div id="about" className="flex w-full max-w-6xl items-center justify-between transform -mt-24 pt-20">
                
                <div className="relative w-[500px] h-[500px] flex items-center justify-center">

                {/* Glowing Ball */}
                <div   className="absolute w-64 h-64 ml-20 rounded-full blur-2xl opacity-100 swirlPulseCustom z-0"
                style={{
                    background: "linear-gradient(45deg,rgb(87, 152, 255),rgb(39, 0, 129), #ec4899)",
                }}
                ></div>
                <img className="w-full h-auto mt-5 object-cover z-10" src="./assets/AboutMe2.png" alt="Headshot"/>
                <div className="absolute -bottom-7 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-11"></div>
                </div>

                {/* Right Side: Heading, Text */}
                <div className="max-w-xl">
                    <h2 className="text-5xl font-semibold mb-4 leading-tight text-center monomakh-regular">About Me</h2>
                    <p className="text-lg text-white mb-4">
                        My name is Collin Columbus, and I'm a full stack developer based in Saint Paul, Minnesota.
                        I recently graduated from Augsburg University with a BS in Computer Science.
                        <br />
                        <br />
                        I'm a passionate developer specializing in building interactive web applications. 
                        With experience in modern front- and back-end technologies, I focus on performant and user-friendly experiences.
                        <br/>
                        <br/>
                        I prioritize collaboration and communication with my clients to ensure that they receive the best product possible.
                    </p>
                </div>
            </div>

            {/* Skills Section */}
            <div className="flex flex-col items-center gap-8 pt-20 w-full">
                {/* Skills Heading */}
                <h2 className="text-4xl font-semibold leading-tight text-center monomakh-regular">Skills</h2>

                {/* Infinite Scrolling Carousel */}
                <div className="w-full max-w-7xl">
                    <Splide
                        options={{
                            type: "loop",
                            perPage: 4, // Number of logos visible at a time
                            perMove: 1, // Moves one at a time to maintain spacing
                            focus: "center",
                            pagination: false,
                            arrows: false,
                            drag: true,
                            gap: "2rem",
                            autoWidth: true, // Ensures images keep their original width
                            autoScroll: {
                                speed: 0.5, // Slow scrolling speed
                                pauseOnHover: false,
                                pauseOnFocus: false,
                            },
                            breakpoints: {
                                1024: { perPage: 3 },
                                768: { perPage: 2 },
                                480: { perPage: 1 },
                            },
                        }}
                        extensions={{ AutoScroll }}
                    >
                        {logos.map((logo, index) => (
                            <SplideSlide key={index} className="p-4"> {/* Moved gap spacing here */}
                                <img 
                                    src={logo} 
                                    alt="Tech Logo" 
                                    className="h-24 rounded-lg transition duration-300 ease-in-out transform hover:scale-110"
                                />
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </section>
    );
};

export default About;
