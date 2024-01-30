import React from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

const projects = [
  {
    id: 2,
    link: "rize-socialmedia.vercel.app",
    img: "/projSocialmed2.jpeg",
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
    img: "/projShoprizing2.jpeg",
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
    img: "/projZashboard2.png",
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
    <div className="py-20" id="projects">
      <div className="flex flex-col items-center justify-center mb-3 snap-start snap-always header">
        <motion.h1
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mt-3 text-base font-bold text-gray-400"
        >
          MY PROJECTS
        </motion.h1>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="flex items-center gap-2 text-xl text-center text-gray-700 md:text-3xl"
        >
          <motion.img
            initial={{
              rotate: "-5deg",
              scale: 1,
            }}
            animate={{
              rotate: "5deg",
              scale: 1,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            whileHover={{
              scale: 1.1,
            }}
            src="/clipboard.png"
            alt="clipboard"
            className="object-cover h-14 aspect-square"
          />
          <h1 className="text-xl text-center text-gray-700 md:text-3xl">
            Each project is a unique <br /> piece of my development
          </h1>
        </motion.div>
      </div>
      <div className="flex min-[300px]:flex-col md:flex-row items-center justify-center h-[77svh] gap-5 border-b p-14 bg-gray-50">
        <div className="left flex-[3] flex justify-center items-center aspect-video object-cover overflow-hidden">
          <motion.img
            initial={{
              opacity: 0,
              x: "-100%",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.5,
              type: "spring",
            }}
            src="/projChatapp2.png"
            alt="projChatapp2.png"
            className="md:h-[20rem] min-[300px]:h-[12rem] rounded-xl"
          />
        </div>
        <motion.div
          initial={{
            opacity: 0,
            x: "100%",
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.5,
            type: "spring",
          }}
          className="right flex justify-center items-center flex-[2] max-h-[24rem] detail"
        >
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
                  Live demo &rarr;
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {projects.map((proj) => (
        <div
          key={proj.id}
          className={`flex min-[300px]:flex-col  items-center justify-center snap-end h-[93svh] gap-5 border-b p-14 
          ${proj.color ? `${proj.color}` : `bg-gray-50`} 
          ${proj.id % 2 == 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            initial={{
              opacity: 0,
              x: "-50%",
            }}
            whileInView={{
              opacity: [0.1, 1],
              x: 0,
            }}
            transition={{
              duration: 1.5,
              type: "spring",
            }}
            className="left flex-[3] flex justify-center items-center aspect-video object-cover overflow-hidden"
          >
            <LazyLoadImage
              placeholderSrc="blur"
              src={proj.img}
              alt={proj.img}
              className="md:h-[20rem] min-[300px]:h-[12rem] rounded-xl"
            />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: "50%",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.5,
              type: "spring",
            }}
            className="right flex justify-center items-center flex-[2] max-h-[24rem] detail"
          >
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
                    Live demo &rarr;
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
