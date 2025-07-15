"use client";
import Image from "next/image";


interface FeatureSectionProps {
  title: string;
  text: string;
  imgSrc: string;
  reverse?: boolean;
  background?: string;
  children?: React.ReactNode;
  showArrow?: boolean;
}

export default function FeatureSection({
  title,
  text,
  imgSrc,
  reverse = false,
  background = "bg-white",
  children,
  showArrow = false,
}: FeatureSectionProps) {
  return (
    <section
      className={`sticky top-0 min-h-screen flex flex-col items-center justify-center px-4 text-center z-0 ${background}`}
    >
      <div
        className={`flex flex-col md:flex-row items-center justify-between gap-16 max-w-6xl mx-auto w-full ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-[300px] h-[200px] sm:w-[400px] md:w-[700px] md:h-[350px]">
            <div className="absolute inset-0 rounded-xl shadow-2xl transform translate-x-3 translate-y-3 sm:translate-x-6 sm:translate-y-6 bg-white/10 backdrop-blur-sm -z-10"></div>
            <Image
              src={imgSrc}
              alt={title}
              fill
              className="rounded-xl shadow-2xl object-cover transition duration-500 hover:-translate-x-3 hover:-translate-y-3"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center md:text-left space-y-8">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-base sm:text-lg text-opacity-90">{text}</p>
          {children && <div className="mt-4">{children}</div>}
        </div>
      </div>

      {showArrow && (
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
      )}
    </section>
  );
}