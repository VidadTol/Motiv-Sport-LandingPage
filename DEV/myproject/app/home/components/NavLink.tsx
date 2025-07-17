"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function NavLink() {
  const router = useRouter();
  const [navOpen, setNavOpen] = useState(false);
  const [navOpaque, setNavOpaque] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavOpaque(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Sign Up" },
    { href: "/", label: "Login" },
  ];

  return (
    <nav
      className={`bg-white border-gray-200 fixed top-0 left-0 w-full z-50 shadow transition-all duration-300 ${
        navOpaque ? "bg-opacity-80 backdrop-blur" : "bg-opacity-100"
      }`}
    >
      <div className="flex justify-between items-center px-5 py-2">
        {/* Logo */}
        <button
          onClick={() => router.push("/")}
          className="flex items-center bg-transparent border-none p-0 m-0 h-12 w-auto"
        >
          <div className="relative w-24 h-24 mt-3">
            <Image
              src="/Logo_2.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
        </button>

        {/* Burger menu (mobile) */}
        <div className="relative md:hidden">
          <button
            type="button"
            onClick={() => setNavOpen(!navOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-expanded={navOpen}
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          {/* Dropdown menu */}
          {navOpen && (
            <div className="absolute right-0 top-12 w-48 bg-white border shadow-md rounded-xl z-50">
              <ul className="flex flex-col py-2 text-sm text-gray-800">
                {links.map((link) => (
                  <li key={link.href}>
                    <button
                      type="button"
                      onClick={() => {
                        setNavOpen(false);
                        router.push(link.href);
                      }}
                      className="block w-full text-left px-4 py-2 rounded-lg font-semibold text-green-700 hover:bg-gradient-to-r hover:from-green-100 hover:to-green-200 hover:text-green-900 shadow-sm transition-all duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 text-green-600 font-semibold">
          {links.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => router.push(link.href)}
              className="relative inline-block py-2 px-3 hover:text-green-800 transition-colors duration-200
                after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-1 after:h-[2px] after:w-0 after:bg-green-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-3/4"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
