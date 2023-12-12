import React from "react";

const projects = [
  {
    id: 1,
    link: "rize-chatreact-firebase.vercel.app/",
    img: "/projChatApp.png",
    name: "Chat Apps",
    desc: "Chat application build using React for UI and Firebase for handling Auth and Storage (Firestore)",
    framework: "React, Tailwind, Firebase",
    demo: "https://rize-chatreact-firebase.vercel.app/",
    src: "https://github.com/rizeenf/chat-react-firebase",
  },
  {
    id: 2,
    link: "rize-socialmedia.vercel.app",
    img: "/projSocialmed.png",
    name: "Socialmedia",
    desc: "Mini social media that you can upload, post, like, comment, and share such as usual social media",
    framework: "React, Tailwind",
    demo: "https://rize-socialmedia.vercel.app/",
    src: "https://github.com/rizeenf/socialmedia",
  },
  {
    id: 3,
    link: "rize-shoprizing.vercel.app",
    img: "/projShoprizing.png",
    name: "Shop App",
    desc: "Shopping application using Image API from Pixabay, it also using Redux for storing Cart",
    framework: "React, Redux, Sass",
    demo: "https://rize-shoprizing.vercel.app/",
    src: "https://github.com/rizeenf/shoprizing",
  },
  {
    id: 4,
    link: "https://zashboard.vercel.app",
    img: "/projZashboard.png",
    name: "Admin Dashboard",
    desc: "Dashboard provides charts for every data collected, using Charts from recharts and Data Table from MaterialUI",
    framework: "React, Sass, MaterialUI, Recharts",
    demo: "https://zashboard.vercel.app",
    src: "https://github.com/rizeenf/admindashboard",
  },
];

const Projects = () => {
  return (
    <div className="h-[372svh] " id="projects">
      <div className="flex flex-col items-center justify-center mb-8 header">
        <h1 className="text-3xl font-bold ">My Projects</h1>
        <h4 className="flex items-center gap-2 text-base text-gray-600">
          <img
            src="/clipboard.png"
            alt="clipboard"
            className="object-cover h-6 aspect-square"
          />
          Each project is a unique piece of my development
        </h4>
      </div>
      <div className="flex flex-row items-center justify-center snap-end h-[77svh] gap-5 border-b bg-gray-50">
        <div className="left flex-[3] rounded-md aspect-video max-h-[24rem] object-cover overflow-hidden">
          <img src="/projChatApp.png" alt="projChatApp.png" />
        </div>
        <div className="right flex-[2] max-h-[24rem] detail">
          <div className="flex flex-col items-center justify-center gap-5 text-justify name">
            <span className="mt-1 text-2xl font-semibold ">Chat Apps</span>
            <span className="text-sm">
              Chat application build using React for UI and Firebase for
              handling Auth and Storage (Firestore)
            </span>
            <span className="text-lg font-bold underline rounded-md ">
              React, Tailwind, Firebase Auth, Firestore
            </span>
            <div className="flex flex-row w-full gap-3 link">
              <div className="w-1/2 p-2 text-white bg-yellow-500 rounded-md cursor-pointer github hover:bg-yellow-600 ">
                <a
                  href="https://github.com/rizeenf/chat-react-firebase"
                  target="_blank"
                  className="text-sm "
                >
                  <img
                    src="https://cdn.cdnlogo.com/logos/g/69/github-icon.svg"
                    className="w-6 h-6 rounded-full "
                    alt="Github"
                  />
                  Source code
                </a>
              </div>
              <div className="w-1/2 p-2 text-white bg-yellow-500 rounded-md cursor-pointer vercel hover:bg-yellow-600">
                <a
                  href="https://rize-chatreact-firebase.vercel.app/"
                  target="_blank"
                  className="text-sm "
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
          className="flex flex-row items-center justify-center snap-end h-[93svh] gap-5 border-b bg-gray-200"
        ></div>
      ))}
    </div>
  );
};

export default Projects;
