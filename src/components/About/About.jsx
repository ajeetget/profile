import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile_pic.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[2vw] md:px-[2vw] lg:px-[10vw] font-sans mt-16 md:mt-24 lg:mt-16"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:gap-12">
        <div className="md:w-55%] text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am  <span className="text-[#8245ec]">Ajeet</span>
          </h1>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Frontend Developer',
                'ReactJS Developer',
                'Web Developer',
                'Performance Optimizer'
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I’m a front-end developer with 8+ years of experience in HTML, CSS, JavaScript, and 2 years in ReactJS,
            with a solid understanding of frontend concepts. I’ve contributed to companies like Edneed Technology,
            O2F Info Solutions, Health Booster Foods, Magento Guru, and Arihant Publication, leading projects
            from concept to deployment
          </p>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I specialize in ReactJS and modern web technologies, focusing on performance optimization, responsive design,
            and clean architecture. My experience includes mentoring teams, managing deadlines, and improving app efficiency,
            notably optimizing an application at Samsung SDS, which significantly boosted performance and user satisfaction.
          </p>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            With strong leadership, communication, and problem-solving skills, I’m passionate about continuous learning and
            building scalable, high-quality digital experiences.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1ycYbf0bZDTy-9bMFCo6UoMUsqQCKjtud/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>

        </div>
        {/* Right Side */}
        {/* <div className="md:w-[40%] flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Tarun Kaushik"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div> */}

        {/* Right Side */}
        <div className="md:w-[45%] flex justify-center md:justify-end">
          <div className="relative rounded-full overflow-hidden border-4 border-purple-700 shadow-[0_0_20px_rgba(130,69,236,0.5)]"
            style={{
              width: "22rem",
              height: "22rem",
            }}>
            <img
              src={profileImage}
              alt="Ajeet"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
