import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <section id="contact" className="flex flex-col items-center py-20 bg-black text-white">
      <h2 className="text-5xl font-semibold mb-4 text-center">Contact Me</h2>
      <p className="text-lg text-white mb-16 text-center max-w-lg">
        Reach out to me with any inquiries.
        <br/>
        I’ll get back to you as soon as possible.
      </p>

      <form action="https://api.web3forms.com/submit" method="POST" className="w-full max-w-lg" autoComplete="off">
        <input type="hidden" name="access_key" value="262b845e-5fce-4f3a-8458-48b8a5836ae6"></input>
        
        {/* Name Field */}
        <div className="relative mb-6">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="text-md w-full p-3 bg-transparent border-b-2 border-blue-500 text-white focus:outline-none focus:ring-0 placeholder-transparent peer"
            required
            placeholder="Your Name"
          />
          <label
                htmlFor="name"
                className="absolute -left-1 top-3 text-gray-400 transition-all duration-300 cursor-text bg-black px-1
               peer-placeholder-shown:top-3 peer-placeholder-shown:text-md 
               peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-blue-500
               peer-not-placeholder-shown:top-[-10px] peer-not-placeholder-shown:text-sm"
  >
            Your Name
          </label>
        </div>

        {/* Email Field */}
        <div className="relative mb-6">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="text-md w-full p-3 bg-transparent border-b-2 border-blue-500 text-white focus:outline-none focus:ring-0 placeholder-transparent peer"
            required
            placeholder="Your Email"
          />
          <label
            htmlFor="email"
            className="absolute -left-1 top-3 text-gray-400 transition-all duration-300 cursor-text bg-black px-1
               peer-placeholder-shown:top-3 peer-placeholder-shown:text-md 
               peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-blue-500
               peer-not-placeholder-shown:top-[-10px] peer-not-placeholder-shown:text-sm"
  >
            Your Email
          </label>
        </div>

        {/* Message Field */}
        <div className="relative mb-6">
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="text-md w-full p-3 bg-transparent border-b-2 border-blue-500 text-white focus:outline-none focus:ring-0 placeholder-transparent peer"
            required
            placeholder="Your Message"
          />
          <label
            htmlFor="message"
            className="absolute -left-1 top-3 text-gray-400 transition-all duration-300 cursor-text bg-black px-1
               peer-placeholder-shown:top-3 peer-placeholder-shown:text-md 
               peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-blue-500
               peer-not-placeholder-shown:top-[-10px] peer-not-placeholder-shown:text-sm"
  >
            Your Message
          </label>
        </div>

        <div className="flex justify-center">
            {/* Submit Button */}
            <button
                type="submit"
                className="submit-button px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg transition cursor-pointer">
                Submit
            </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
