import React from "react";
import image from "/public/image.jpg";
import {
  BiCurrentLocation,
  BiEnvelope,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiMoon,
  BiPhone,
  BiSun,
} from "react-icons/bi";

const skills = [
  "HTML",
  "CSS",
  "Java",
  "JavaScript",
  "PostgreSQL",
  "TypeScript",
  "Test Driven Development",
  "GitHub",
  "npm",
  "Tailwind CSS",
  "REACT",
  "Docker",
];

const HeaderLeft = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="min-h-screen flex-1 relative p-10 transition-all duration-500 dark:bg-black dark:text-white sm:border-r dark:border-gray-700">
      <div className="flex flex-col gap-5">
        {/* Profile Section */}
        <div className="flex flex-col items-center justify-center gap-5">
          <img
            src={image}
            alt="Profile Picture"
            className="w-32 rounded-full"
          />
          <div className="text-center space-y-1">
            <h1 className="text-4xl font-light">
              Tyler <span className="font-semibold">McGuire</span>
            </h1>
            <h3 className="text-xl font-light">Software Engineer</h3>
          </div>
          <button
            className="absolute right-10 top-10"
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <BiSun className="text-2xl" />
            ) : (
              <BiMoon className="text-2xl" />
            )}
          </button>
        </div>

        {/* Contact Info Section */}
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <BiCurrentLocation className="text-xl" />
              <span>Austin, Texas</span>
            </li>
            <li className="flex items-center gap-2">
              <BiEnvelope className="text-xl" />
              <span>mursemcguire@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <BiPhone className="text-xl" />
              <span>904-318-1805</span>
            </li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-xl font-semibold md:text-2xl">SOCIAL</h1>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <BiLogoGithub className="text-xl" />
              <span>@teemac</span>
            </li>
            <li className="flex items-center gap-2">
              <BiLogoTwitter className="text-xl" />
              <span>@tymguire</span>
            </li>
            <li className="flex items-center gap-2">
              <BiLogoLinkedin className="text-xl" />
              <span>www.linkedin.com/in/tyler-mcguire</span>
            </li>
          </ul>
        </div>

        {/* Education Section */}
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-xl font-semibold md:text-2xl">EDUCATION</h1>
          <ul>
            <li className="relative flex flex-col gap-1 border p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
              <span className="font-semibold md:text-lg">
                Software Technical Accelerator
              </span>
              <span className="text-sm text-gray-400">
                Army Software Factory
              </span>
              <span className="text-sm text-gray-400">
                Graduated: January 2025
              </span>
            </li>
            <li className="relative flex flex-col gap-1 border p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
              <span className="font-semibold md:text-lg">
                Health Care Administration
              </span>
              <span className="text-sm text-gray-400">
                Purdue Global University
              </span>
              <span className="text-sm text-gray-400">
                Graduated: January 2024
              </span>
              <span className="text-sm text-gray-400">Summa Cum Laude</span>
            </li>
            <li className="relative flex flex-col gap-1 border p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
              <span className="font-semibold md:text-lg">
                Associates in the Arts
              </span>
              <span className="text-sm text-gray-400">
                Florida State College at Jacksonville
              </span>
              <span className="text-sm text-gray-400">
                Graduated: July 2012
              </span>
            </li>
          </ul>
        </div>

        {/* Skills Section */}
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-xl font-semibold md:text-2xl">SKILLS</h1>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-xl font-semibold md:text-2xl">HOBBIES</h1>
          <div className="flex flex-wrap gap-16 p-3">
            <ul className="flex list-disc flex-col gap-3">
              <li>Hiking</li>
              <li>Gardening</li>
              <li>Cooking</li>
              <li>Reading</li>
              <li>Video Games</li>
              <li>Paddleboarding</li>
              <li>Lifting</li>
            </ul>
          </div>
          <div className="flex list-disc font-semibold flex-wrap gap-12 md:text-lg">
            LANGUAGES
          </div>
          <li>English</li>
          <li>Spanish</li>
        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;
