import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex-[3] transition-all duration-500 dark:bg-black dark:text-white">
      <main className="flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14">
        <div className="space-y-5">
          <h1 className="text-2xl font-bold md:text-4xl">About</h1>
          <p className="text-sm text-gray-600 dark:text-gray400 md:text-base">
            Former LPN with a diverse background in medical logistics, critical
            care, and pediatrics, now thriving as a software developer. With a
            strong foundation in healthcare, I bring a unique perspective to the
            tech industry—blending problem-solving skills, attention to detail,
            and a deep understanding of user-centric solutions.
          </p>
        </div>
        <div className="space-y-10">
          <h1 className="text-2xl font-bold md:text-4xl">Experience</h1>
          <div className="flex flex-col lg:flex-row 1g:gap-20">
            <ul>
              <li className="relative flex flex-col gap-1 border p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                <span className="text-lg font-semibold">Junior Developer</span>
                <span className="font-light">Army Futures Command</span>
                <span className="text-sm text-gray-400">2024-Present</span>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  As a Fullstack Developer at the Army Software Factory, I am
                  part of a dynamic team committed to delivering innovative
                  software solutions that support mission-critical operations
                  and enhance operational efficiency for the U.S. Army. I work
                  across the full development lifecycle, from conceptualization
                  to deployment, designing and building robust, scalable
                  applications that address complex challenges and empower users
                  in high-stakes environments.
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  With a strong foundation in both front-end and back-end
                  development, I utilize technologies such as Java, TypeScript,
                  React, Node.js, to create seamless, user-friendly experiences
                  while ensuring system reliability and performance. My role
                  requires a deep understanding of software architecture, and
                  modern development practices, as well as a collaborative
                  mindset to work closely with cross-functional teams to deliver
                  solutions that align with operational goals.
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  At the Army Software Factory, I'm continuously challenged to
                  innovate, applying agile methodologies to iterate rapidly and
                  incorporate user feedback. This fast-paced, mission-driven
                  environment pushes me to think creatively, solve complex
                  problems, and remain adaptable in the face of evolving needs.
                  By leveraging my technical expertise and strategic thinking, I
                  aim to contribute to software systems that enhance operational
                  readiness and improve the effectiveness of Army personnel.
                </p>
              </li>
              <li className="relative flex flex-col gap-1 border p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                <span className="text-lg font-semibold">Junior Developer</span>
                <span className="font-light">Army Futures Command</span>
                <span className="text-sm text-gray-400">2024-Present</span>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  As a dedicated and versatile LPN, I have gained extensive
                  experience in critical care, pediatrics, and medical-surgical
                  nursing. Throughout my career, I’ve provided high-quality,
                  compassionate care in fast-paced environments, working with
                  diverse patient populations and collaborating with
                  multidisciplinary teams to ensure optimal outcomes.
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  My nursing journey includes significant experience in critical
                  care, where I was responsible for managing critically ill
                  patients, making swift, evidence-based decisions in
                  life-threatening situations. In pediatrics, I provided
                  specialized care to young patients, offering not only medical
                  expertise but also emotional support to families in stressful
                  times. In med-surg, I honed my ability to manage multiple
                  patients with varying needs, focusing on comprehensive care
                  and patient education.
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  In addition to my clinical expertise, I have a solid
                  background in medical logistics, ensuring the efficient
                  management and distribution of medical supplies, equipment,
                  and personnel to meet the needs of the healthcare team. My
                  role as Wardmaster during deployment overseas further
                  developed my leadership and operational skills. As Wardmaster
                  of a Mixed Care Unit, I was responsible for overseeing patient
                  care, managing a multidisciplinary team, and coordinating
                  logistics in challenging, high-stress combat-zone conditions.
                  This experience strengthened my ability to lead in crisis
                  situations, maintain composure under pressure, and ensure the
                  best possible care despite resource constraints.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Throughout my nursing career, I’ve developed a deep commitment
                  to patient care, resilience, and adaptability—qualities that
                  continue to guide me as I pursue new professional challenges.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-3xl space-y-8">
          <h1 className="text-2xl font-bold md:text-4xl">Certificates</h1>
          <div className="space-y-10">
            <div className="text-baseline space-y-3">
              <h3 className="font-bold text-sm md:text-lg">
                Army Software Factory Technical Accelerator
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-600 md:text-base">
                I completed the{" "}
                <strong>Army Software Factory Technical Accelerator</strong>{" "}
                program, a rigorous 5-month training course that equipped me
                with the foundational skills necessary to become a proficient
                full-stack developer. Throughout the program, I gained hands-on
                experience in various technologies, including front-end
                frameworks, back-end development, and database management. This
                accelerated course emphasized practical problem-solving,
                collaboration, and building real-world applications in a
                fast-paced, dynamic environment.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-10">
          <h1 className="text-2xl font-bold md:text-4xl"></h1>
          <div className="flex flex-wrap gap-10">
            <div className="text-baseline space-y-1">
              <h3 className="text-lg font-light">Software Developer</h3>
              <h2 className="text-base font-semibold md:text-2xl">TBD</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Phone: 123-456-7890
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                email: user@gmail.com
              </p>
            </div>
            <div className="text-baseline space-y-1">
              <h3 className="text-lg font-light">Software Developer</h3>
              <h2 className="text-base font-semibold md:text-2xl">TBD</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Phone: 123-456-7890
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                email: user@gmail.com
              </p>
            </div>{" "}
            <div className="text-baseline space-y-1">
              <h3 className="text-lg font-light">Software Developer</h3>
              <h2 className="text-base font-semibold md:text-2xl">TBD</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Phone: 123-456-7890
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                email: user@gmail.com
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
