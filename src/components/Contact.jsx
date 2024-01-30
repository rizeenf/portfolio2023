import { motion } from "framer-motion";
import {
  Facebook,
  Github,
  Linkedin,
  MessageCircle,
  Twitter,
} from "lucide-react";

const Contact = () => {
  return (
    <div
      className="h-[93svh] snap-end flex flex-col justify-between"
      id="contact"
    >
      <div className="flex flex-col items-center justify-center">
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
          className="mt-10 text-base font-bold text-gray-400"
        >
          CONTACT ME
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
          className="flex items-center gap-2  md:text-3xl min-[300px]:text-2xl text-center text-gray-700"
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
            src="/contact.svg"
            alt="contact"
            className="object-cover h-10 aspect-square"
          />
          <h4 className="md:text-3xl min-[300px]:text-2xl text-center text-gray-700">
            Share me your thoughts !
          </h4>
        </motion.div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: "50%",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.5,
          type: "spring",
        }}
        className="flex flex-[16] flex-col md:flex-row h-full gap-5 p-10 py-20 md:px-40 wrapper"
      >
        <div className="flex flex-col min-[300px]:items-center md:items-end justify-center flex-1 right">
          <div className="flex flex-col p-10 border rounded-xl h-[16rem] w-[22rem]">
            <div className="flex flex-col flex-1 top">
              <strong> My WhatsApp</strong>
              <span>
                <a
                  href="https://wa.me/6287786653726"
                  className="flex flex-row items-center hover:text-orange-400"
                  target="_blank"
                >
                  <MessageCircle />
                  (+62)877 8665 3726
                </a>
              </span>
            </div>
            <div className="flex flex-col justify-end flex-1 gap-2 bottom">
              <div className="text-xs">
                <strong> Email : </strong>
                <span className="">rizenf11@gmail.com</span>
              </div>
              <div className="text-xs">
                <strong> Address : </strong>
                <span className="">Jalan Bintara 14, Bekasi 17134</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-[300px]:items-center md:items-start justify-center flex-1 left">
          <form className="flex flex-col gap-3 p-5 rounded-sm ">
            <div className="flex flex-row gap-2">
              <input
                type="text"
                name="name"
                id="name"
                className="max-w-[10rem] p-2 bg-transparent border rounded placeholder:text-xs"
                placeholder="Name*"
                required
                minLength={5}
              />
              <input
                type="email"
                name="email"
                id="email"
                className="p-2 max-w-[12rem] bg-transparent border rounded placeholder:text-xs"
                placeholder="Email*"
                required
                minLength={5}
              />
            </div>
            <input
              type="text"
              name="subject"
              id="subject"
              className="p-2 bg-transparent border rounded placeholder:text-xs"
              placeholder="How can i help you?"
              required
              minLength={5}
            />
            <textarea
              type="textarea"
              rows={3}
              name="text"
              id="text"
              className="p-2 bg-transparent border rounded placeholder:text-xs"
              placeholder="How can i help you?"
              required
            />
            <div className="flex flex-row items-center justify-between gap-2">
              <div className="flex flex-row items-center gap-2">
                <input type="checkbox" id="checkbox" required />
                <span className="text-[0.6rem] text-gray-500">
                  I'm agreed to Terms & Conditions
                </span>
              </div>
              <input
                type="submit"
                value="Send message"
                className="p-2 bg-transparent hover:bg-orange-300 hover:text-white max-w-[16rem] border rounded placeholder:text-xs"
              />
            </div>
          </form>
        </div>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: "50%",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.5,
          type: "spring",
        }}
        className="flex flex-row items-center justify-between flex-1 min-[300px]:px-[2rem] md:px-40 bg-orange-50 min-h-[3rem] "
      >
        <div className="flex-row items-center hidden gap-2 sm:flex">
          <img src="/logo.svg" alt="Logo" className="w-10" />
          <span className="text-[0.7rem] italic font-thin text-gray-700">
            RizkiNrp
          </span>
        </div>
        <span className="text-[0.6rem] text-gray-400">
          Copyright 2023 - {new Date().getFullYear()}. All Rights Reserved
        </span>
        <div className="flex flex-row items-center gap-5">
          <a
            href="https://www.linkedin.com/in/rizki-nurpadilah/"
            target="_blank"
            aria-label="Linkedin link"
          >
            <Linkedin size={16} color="orangered" />
          </a>
          <a
            href="https://github.com/rizeenf"
            target="_blank"
            aria-label="Github link"
          >
            <Github size={16} color="orangered" />
          </a>
          <a
            href="https://twitter.com/rizenf"
            target="_blank"
            aria-label="Twitter link"
          >
            <Twitter size={16} color="orangered" />
          </a>
          <a
            href="https://www.facebook.com/rizenf"
            target="_blank"
            aria-label="Facebook link"
          >
            <Facebook size={16} color="orangered" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
