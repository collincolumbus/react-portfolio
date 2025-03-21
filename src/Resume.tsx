const Resume = () => {
    return (
        <section id ="resume" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h2 className="text-5xl text-white font-semibold mb-12 leading-tight text-center monomakh-regular">Resume</h2>
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <iframe
                    src="./assets/Resume.pdf" 
                    width="80%" 
                    height="600px"
                    style={{ border: "none" }}
                ></iframe>
            </div>
        </section>
    );
};

export default Resume;
