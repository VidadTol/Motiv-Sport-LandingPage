"use client";
import NavLink from "./home/components/NavLink";
import Cookies from "./home/components/Cookies";
import TextSection from "./home/components/TextSection";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [logoAnimationClass, setLogoAnimationClass] = useState(
    "animate-slide-in-center object-contain"
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setLogoAnimationClass("animate-heartbeat object-contain");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="relative">
        <NavLink />

        {/* Page principale*/}
        <section className="sticky top-0 min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
          {/* Vidéo de fond */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="/Video_landing_page.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Logo animé */}
          <div className="relative w-full max-w-[300px] h-[150px] sm:max-w-[400px] sm:h-[200px] md:max-w-[500px] md:h-[350px] mx-auto mb-16 z-10 mt-12">
            <Image
              src="/Logo_2.png"
              alt="Motiv Sports Logo"
              fill
              className={logoAnimationClass}
            />
          </div>

          {/* Flèche de défilement */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
            <svg
              className="w-10 h-10 text-white drop-shadow-lg"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </section>

        {/* Slides */}
        <TextSection
          title="Sports are better together."
          text="Curious beginner or passionate athlete? Easily find partners at your level, join groups near you, and share your passion in a welcoming atmosphere."
          imgSrc="/Chaussures-running.png"
          background="bg-gradient-to-b from-green-600 to-blue-200 text-white"
          showArrow={true}
        />

        <TextSection
          title="Your personal space!"
          text="Easily find partners, manage your groups and track your activities, all in one place. Stay motivated by following your progress and discover new opportunities to move together."
          imgSrc="/Dashboard.png"
          background="bg-gradient-to-b from-blue-200 to-green-600 text-white"
          reverse
          showArrow={true}
        />

        <TextSection
          title="Create or join events!"
          text="Whether you want to organize a match or participate in a session, find and join sports events in a snap."
          imgSrc="/Liste_event.png"
          background="bg-gradient-to-b from-green-600 to-blue-200 text-white"
          showArrow={true}
        />

        {/* Section à propos */}
        <section
          id="about"
          className="min-h-screen flex flex-col items-center justify-center py-16 px-4 bg-gray-100 text-gray-800 z-10 relative"
        >
          <div className="max-w-6xl mx-auto w-full">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 bg-gradient-to-br from-green-500 to-blue-600 bg-clip-text text-transparent">
              About Motiv Sport
            </h2>

            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center mb-6">
                Our Story, Our Motivation
              </h3>
              <p className="text-lg leading-relaxed md:text-justify max-w-5xl mx-auto mb-6">
                The idea of{" "}
                <span className="font-semibold text-green-700">
                  Motiv Sport
                </span>{" "}
                was born to address a concrete and widely shared need among sports enthusiasts: the difficulty of easily finding available and motivated partners or teammates to practice their favorite activities. Too often, isolation or organizational constraints hamper the desire to get moving, and we found that the lack of a simple and effective network was glaring. Moreover, by relying on a web and mobile application, the project exploits the digital trend, offering an accessible and practical solution for modern athletes.
              </p>
              <p className="text-lg leading-relaxed md:text-justify max-w-5xl mx-auto mb-6">
                It was during our intensive training at{" "}
                <a
                  href="https://www.holbertonschool.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  Holberton School
                </a>
                , a program resolutely focused on solving concrete problems through development, that this concept began to take on its full scope. As future Full Stack developers and project managers, our team set out to transform this observation into a functional solution. Throughout the design and development phases, we broke down user stories into tasks, prioritized features, and structured our approach to create an intuitive platform.
              </p>
              <p className="text-lg leading-relaxed md:text-justify max-w-5xl mx-auto mb-6">
                Motiv Sport is thus much more than a simple application; it&apos;s the reflection of our commitment to breaking the isolation of athletes, facilitating the organization of activities, encouraging regular practice, and creating a true community of enthusiasts. This project represents the culmination of our learning, our passion for web and mobile development, and our pride in presenting a concrete and relevant solution for the sports community.
              </p>
            </div>

            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center mb-8">The Team</h3>
              <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full md:w-1/3 lg:w-1/4">
                  <div className="relative w-24 h-24 mb-4">
                    <Image
                      src="/david.jpg"
                      alt="Photo de David Tolza"
                      fill
                      className="rounded-full object-cover border-4 border-green-500"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    David
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Project Manager
                    <br /> & <br /> Full-stack Developer
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/in/david-tolza/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-500 hover:animate-bounce"
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 fill-current mx-auto"
                      >
                        <title>LinkedIn</title>
                        <path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46c0 .98.79 1.77 1.77 1.77h20.46c.98 0 1.77-.79 1.77-1.77V1.77c0-.98-.79-1.77-1.77-1.77zM7.34 20.43H3.63V9.16h3.71v11.27zM5.49 7.54h-.02c-1.22 0-2-1.02-2-2.28 0-1.29.8-2.28 2.05-2.28 1.25 0 2 .99 2.02 2.28 0 1.26-.79 2.28-2.03 2.28zm15.82 12.89h-3.71v-6.36c0-1.5-.03-3.44-2.1-3.44-2.11 0-2.43 1.64-2.43 3.34v6.46H9.88V9.16h3.56v1.64h.05c.49-.93 1.68-1.92 3.47-1.92 3.72 0 4.41 2.45 4.41 5.64v6.86z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/VidadTol"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-gray-900 hover:animate-bounce"
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mx-auto fill-current"
                      >
                        <title>GitHub</title>
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.334-5.466-5.933 0-1.31.468-2.382 1.236-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.803 5.625-5.475 5.922.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full md:w-1/3 lg:w-1/4">
                  <div className="relative w-24 h-24 mb-4">
                    <Image
                      src="/jordan.jpg"
                      alt="Photo de Jordan Baroux"
                      fill
                      className="rounded-full object-cover border-4 border-green-500"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Jordan
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Project Manager
                    <br /> & <br /> Full-stack Developer
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/in/jordan-baroux/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-500 hover:animate-bounce"
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 fill-current"
                      >
                        <title>LinkedIn</title>
                        <path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46c0 .98.79 1.77 1.77 1.77h20.46c.98 0 1.77-.79 1.77-1.77V1.77c0-.98-.79-1.77-1.77-1.77zM7.34 20.43H3.63V9.16h3.71v11.27zM5.49 7.54h-.02c-1.22 0-2-1.02-2-2.28 0-1.29.8-2.28 2.05-2.28 1.25 0 2 .99 2.02 2.28 0 1.26-.79 2.28-2.03 2.28zm15.82 12.89h-3.71v-6.36c0-1.5-.03-3.44-2.1-3.44-2.11 0-2.43 1.64-2.43 3.34v6.46H9.88V9.16h3.56v1.64h.05c.49-.93 1.68-1.92 3.47-1.92 3.72 0 4.41 2.45 4.41 5.64v6.86z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/JoBEph"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-gray-900 hover:animate-bounce"
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mx-auto fill-current"
                      >
                        <title>GitHub</title>
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.334-5.466-5.933 0-1.31.468-2.382 1.236-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.803 5.625-5.475 5.922.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Cookies />
      </div>
    </>
  );
}