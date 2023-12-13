import React from "react";

const About = () => {
  return (
    <div className="h-[93svh] snap-end" id="about">
      <div className="flex min-[300px]:flex-col md:flex-row h-full gap-5 min-[300px]:px-10 md:px-40 wrapper">
        <div className="flex flex-col items-center justify-center flex-[2] right">
          <img
            src="/work.gif"
            alt=""
            className="object-cover min-[300px]:w-56 md:w-72 min-w-[12rem] aspect-square"
          />
        </div>
        <div className="flex flex-col items-center justify-center flex-[3] left">
          <h1 className="max-w-md text-sm text-center">
            <span className="flex items-center gap-4">
              I've been working with some frontend technologies such as
              JavaScript, React, Tailwind and others.
              <img
                src="/terminal.png"
                alt="terminal"
                className="object-cover h-6 aspect-square"
              />
            </span>
            <br />
            <br />
            <span className="flex items-center gap-4">
              <img
                src="/book.png"
                alt="book"
                className="object-cover h-8 aspect-square"
              />
              My educational background as an Information Technology college
              student
            </span>
            <br />
            <br />
            <span className="flex items-center gap-4">
              I’m reliable person, motivated and able to adapt quickly to new
              technologies and exploring new things.
              <img
                src="/research.png"
                alt="research"
                className="object-cover h-6 aspect-square"
              />
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
