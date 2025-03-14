const Work = () => {
    return (
      <section className="h-screen pt-24 pb-12 bg-black text-white">
        <h2 id = "work" className="text-5xl font-semibold text-center mb-4" style={{ scrollMarginTop: 8 }}>Professional Work</h2>
        <p className="text-xl font-semibold text-center mb-12">Click to expand</p>
        <div className="flex flex-wrap justify-center gap-8 items-start">
          {/* Project 1 */}
          <div className="project-window relative w-[400px] bg-gray-200 rounded-lg border border-gray-600 overflow-hidden p-0 flex flex-col 
            transform transition-transform duration-300 hover:scale-110 cursor-pointer" onClick={() => window.open("https://www.roughhouserox.com", "_blank")}>
            <div className="window-controls absolute top-2 right-2 flex gap-2">
                <button className="window-btn bg-red-600 hover:bg-red-700"></button>
                <button className="window-btn bg-yellow-500 hover:bg-yellow-600"></button>
                <button className="window-btn bg-green-600 hover:bg-green-700"></button>
            </div>
            {/* Project Image */}
            <img
              src="./assets/works/RHR.jpg"
              alt="Project Screenshot"
              className="w-full object-cover rounded-b-lg block mt-8 cursor-pointer"
                onClick={() => window.open("https://www.roughhouserox.com", "_blank")}
            />

          </div>

          {/* More Coming Soon Card */}
          <div className="project-window relative w-[400px] h-[266px] bg-gray-200 rounded-lg border border-gray-600 overflow-hidden p-0 flex flex-col items-center justify-center">
            <div className="window-controls absolute top-2 right-2 flex gap-2">
                <button className="window-btn bg-red-600 hover:bg-red-700"></button>
                <button className="window-btn bg-yellow-500 hover:bg-yellow-600"></button>
                <button className="window-btn bg-green-600 hover:bg-green-700"></button>
            </div>
            {/* Centered Text */}
            <h2 className="text-2xl font-semibold text-black">More Coming Soon...</h2>
          </div>

          
        </div>

        <h2 className="text-4xl font-semibold text-center mt-20 mb-16">Projects</h2>

        
      </section>
    );
};

export default Work;
