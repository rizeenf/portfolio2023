import React from "react";

const projects = [
  // {
  //   id: 1,
  //   link: "rize-chatreact-firebase.vercel.app/",
  //   img: "/projChatApp.png",
  //   name: "MWatsapp | Chat Apps",
  //   desc: "Chat application build using React for UI and Firebase for handling Auth and Storage (Firestore)",
  //   framework: "React, Tailwind, Firebase",
  //   demo: "https://rize-chatreact-firebase.vercel.app/",
  //   src: "https://github.com/rizeenf/chat-react-firebase",
  // },
  {
    id: 2,
    link: "rize-socialmedia.vercel.app",
    img: "/projSocialmed.png",
    name: "Sipaling social | Socialmedia",
    desc: "Mini social media that you can upload, post, like, comment, and share such as usual social media",
    framework: "React, Tailwind",
    demo: "https://rize-socialmedia.vercel.app/",
    src: "https://github.com/rizeenf/socialmedia",
    color: "bg-gray-50",
  },
  {
    id: 3,
    link: "rize-shoprizing.vercel.app",
    img: "/projShoprizing.png",
    name: "Shoprizing | Marketplace",
    desc: "Shopping application using Image API from Pixabay, it also using Redux for storing Cart",
    framework: "React, Redux, Sass",
    demo: "https://rize-shoprizing.vercel.app/",
    src: "https://github.com/rizeenf/shoprizing",
    color: "bg-cyan-50",
  },
  {
    id: 4,
    link: "https://zashboard.vercel.app",
    img: "/projZashboard.png",
    name: "Zashboard | Admin dashboard",
    desc: "Dashboard provides charts for every data collected, using Charts from recharts and Data Table from MaterialUI",
    framework: "React, Sass, MaterialUI, Recharts",
    demo: "https://zashboard.vercel.app",
    src: "https://github.com/rizeenf/admindashboard",
    color: "bg-orange-50",
  },
];

const Projects = () => {
  return (
    <div
      className="h-[93svh] overflow-x-hidden no-scrollbar snap-mandatory snap-y "
      id="projects"
    >
      <div className="flex flex-col items-center justify-center mb-8 snap-start snap-always header">
        <h1 className="mt-3 text-3xl font-bold">My Projects</h1>
        <h4 className="flex items-center gap-2 text-base text-center text-gray-600">
          <img
            src="/clipboard.png"
            alt="clipboard"
            className="object-cover h-6 aspect-square"
          />
          Each project is a unique piece of my development
        </h4>
      </div>
      <div className="flex min-[300px]:flex-col md:flex-row items-center justify-center snap-end h-[77svh] gap-5 border-b p-14 bg-gray-50">
        <div className="left flex-[3] flex justify-center items-center aspect-video object-cover overflow-hidden">
          <img
            src="/projChatApp.png"
            alt="projChatApp.png"
            className="max-h-[20rem] min-h-[12rem]"
          />
        </div>
        <div className="right flex justify-center items-center flex-[2] max-h-[24rem] detail">
          <div className="flex flex-col items-center justify-center gap-5 p-2 text-justify">
            <span className="text-lg font-semibold ">MWatsapp | Chat Apps</span>
            <span className="text-sm">
              Chat application build using React for UI and Firebase for
              handling Auth and Storage (Firestore)
            </span>
            <span className="text-base font-medium ">
              <span className="font-normal">Tech : </span>
              React, Tailwind, Firebase Auth, Firestore
            </span>
            <div className="flex flex-row justify-between w-full">
              <div className="transition-all duration-300 hover:scale-[1.03]">
                <a
                  href="https://github.com/rizeenf/chat-react-firebase"
                  target="_blank"
                  className="flex flex-row items-center justify-center gap-3 text-sm "
                >
                  <img
                    src="https://cdn.cdnlogo.com/logos/g/69/github-icon.svg"
                    className="w-3 h-3 rounded-full "
                    alt="Github"
                  />
                  Source code
                </a>
              </div>
              <div className="transition-all duration-300 hover:scale-[1.03]">
                <a
                  href="https://rize-chatreact-firebase.vercel.app/"
                  target="_blank"
                  className="flex flex-row items-center justify-center gap-3 text-sm "
                >
                  <img
                    src="https://cdn.cdnlogo.com/logos/v/78/vercel.svg"
                    className="object-cover w-6 h-6 overflow-hidden rounded-full "
                    alt="Vercel"
                  />
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {projects.map((proj) => (
        <div
          key={proj.id}
          className={`flex min-[300px]:flex-col  items-center justify-center snap-end h-[93svh] gap-5 border-b p-14 
          ${proj.color ? `${proj.color}` : `bg-gray-50`} 
          ${proj.id % 2 == 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <div className="left flex-[3] flex justify-center items-center aspect-video object-cover overflow-hidden">
            <img
              src={proj.img}
              alt={proj.img}
              className="max-h-[20rem] min-h-[12rem]"
            />
          </div>
          <div className="right flex justify-center items-center flex-[2] max-h-[24rem] detail">
            <div className="flex flex-col items-center justify-center gap-5 p-2 text-justify">
              <span className="text-lg font-semibold ">{proj.name}</span>
              <span className="text-sm">{proj.desc}</span>
              <span className="text-base font-medium">
                <span className="font-normal">Tech : </span>
                {proj.framework}
              </span>
              <div className="flex flex-row justify-between w-full">
                <div className="transition-all duration-300 hover:scale-[1.03]">
                  <a
                    href={proj.src}
                    target="_blank"
                    className="flex flex-row items-center justify-center gap-3 text-sm "
                  >
                    <img
                      src="https://cdn.cdnlogo.com/logos/g/69/github-icon.svg"
                      className="w-3 h-3 rounded-full "
                      alt="Github"
                    />
                    Source code
                  </a>
                </div>
                <div className="transition-all duration-300 hover:scale-[1.03]">
                  <a
                    href={proj.demo}
                    target="_blank"
                    className="flex flex-row items-center justify-center gap-3 text-sm "
                  >
                    <img
                      src="https://cdn.cdnlogo.com/logos/v/78/vercel.svg"
                      className="object-cover w-6 h-6 overflow-hidden rounded-full "
                      alt="Vercel"
                    />
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
