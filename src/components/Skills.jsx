import React from "react";

const skill = [
  {
    id: 1,
    image: "html.svg",
    name: "html 5",
  },
  {
    id: 2,
    image: "/css.svg",
    name: "css",
  },
  {
    id: 3,
    image: "/sass.svg",
    name: "sass",
  },
  {
    id: 4,
    image: "/JS.png",
    name: "javascript",
  },
  {
    id: 5,
    image: "/react.svg",
    name: "react",
  },
  {
    id: 6,
    image: "/bootstrap.svg",
    name: "bootstrap",
  },
  {
    id: 7,
    image: "/tailwind.svg",
    name: "tailwind",
  },
  {
    id: 8,
    image: "/git.svg",
    name: "git",
  },
  {
    id: 9,
    image: "/vitejs.svg",
    name: "vite",
  },
  {
    id: 10,
    image: "/mysql.svg",
    name: "mysql",
  },
];

const skillLearning = [
  {
    id: 1,
    image: "next-js.svg",
    name: "next js",
  },
  {
    id: 2,
    image: "typescript.svg",
    name: "typescript",
  },
  {
    id: 3,
    image: "mongodb.svg",
    name: "mongodb",
  },
];

const Skills = () => {
  return (
    <div
      className="h-[93svh] snap-end flex justify-center items-center"
      id="skills"
    >
      <div className="flex flex-col items-center justify-center header ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-base font-bold text-gray-400">TECH STACK</h1>
          <h4 className="flex items-center gap-2 text-3xl text-center text-gray-700">
            <img
              src="/terminal.png"
              alt="terminal"
              className="object-cover h-10 aspect-square"
            />
            My skills, my journey.
          </h4>
        </div>

        <h4 className="mt-5 text-base text-gray-700 uppercase">Using Now : </h4>
        <div className="flex mt-5 flex-row flex-wrap items-center min-[300px]:max-w-xs md:max-w-xl justify-around gap-10">
          {skill.map((item) => (
            <div
              className="flex flex-col items-center justify-between gap-2 item "
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.name}
                className="object-cover h-8 aspect-auto"
              />
              <span className="text-xs font-thin text-gray-700 uppercase">
                {item.name}
              </span>
            </div>
          ))}
        </div>
        <h4 className="my-5 text-base text-gray-600 uppercase">learning :</h4>
        <div className="flex flex-row flex-wrap items-center min-[300px]:max-w-xs md:max-w-xl justify-around gap-10">
          {skillLearning.map((item) => (
            <div
              className="flex flex-col items-center justify-between gap-2 item "
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.name}
                className="object-cover h-8 aspect-auto"
              />
              <span className="text-xs font-thin text-gray-600 uppercase">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
