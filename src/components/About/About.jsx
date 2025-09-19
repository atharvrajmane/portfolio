import React from "react";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/MyPortfolioPic.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Part */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Atharv Rajmane
          </h2>
          <h3 className="flex justify-center md:justify-start flex-wrap text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#006666] leading-tight">
            <span className="text-white mr-2">I am a </span>
            <Typewriter
              options={{
                strings: ["Full Stack Developer", "Mern Stack Developer"],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50,
              }}
            />
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb:10 mt: 8 leading-relaxed">
            I am a full-stack web developer with practical experience in
            building dynamic and scalable web applications using technologies
            like JavaScript, React, Node.js, Express, MongoDB, HTML, CSS, and
            Git. I enjoy creating user-friendly interfaces and efficient backend
            systems, transforming complex problems into elegant solutions. With
            a strong foundation in DSA and a passion for continuous learning, I
            thrive in collaborative environments and am always ready to take on
            challenges that contribute to meaningful, real-world projects.
          </p>
          <a
            href="https://drive.google.com/file/d/1cBuShyrievKUAUcJBmxGP8OxmIrITcb_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #006666, #00b3b3)",
              boxShadow: "0 0 2px #006666, 0 0 2px #006666, 0 0 40px #006666",
            }}
          >
            VIEW RESUME
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-[#006666] rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Atharv Rajmane"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(0,102,102,0.8)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
