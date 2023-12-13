import React from "react";

const Contact = () => {
  return (
    <div
      className="h-[93svh] snap-end flex flex-col justify-between "
      id="contact"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-3 text-base font-bold text-gray-400">CONTACT ME</h1>
        <h4 className="flex items-center gap-2 text-3xl text-center text-gray-700">
          <img
            src="/contact.svg"
            alt="contact"
            className="object-cover h-10 aspect-square"
          />
          Share me your thoughts !
        </h4>
      </div>
      <div className="flex flex-[16] min-[300px]:flex-col md:flex-row h-full gap-5 min-[300px]:p-10 md:px-40 wrapper">
        <div className="flex flex-col min-[300px]:items-center md:items-end justify-center flex-1 right">
          <div className="flex flex-col p-10 border rounded-xl h-[16rem] w-[22rem]">
            <div className="flex flex-col flex-1 top">
              <strong> My WhatsApp</strong>
              <span className="">(+62)877 8665 3726</span>
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
              <div className="text-xs">
                <strong> Email : </strong>
                <span className="">rizenf11@gmail.com</span>
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
              />
              <input
                type="email"
                name="email"
                id="email"
                className="p-2 max-w-[12rem] bg-transparent border rounded placeholder:text-xs"
                placeholder="Email*"
              />
            </div>
            <input
              type="text"
              name="subject"
              id="subject"
              className="p-2 bg-transparent border rounded placeholder:text-xs"
              placeholder="How can i help you?"
            />
            <textarea
              type="textarea"
              rows={3}
              name="text"
              id="text"
              className="p-2 bg-transparent border rounded placeholder:text-xs"
              placeholder="How can i help you?"
            />
            <div className="flex flex-row items-center justify-between gap-2">
              <div className="flex flex-row items-center gap-2">
                <input type="checkbox" name="checkbox" id="checkbox" />
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
      </div>
      <div className="flex flex-row items-center justify-between flex-1 min-[300px]:px-[2rem] md:px-40 bg-orange-50">
        <div className="flex flex-row items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="w-10" />
          <span className="text-[0.7rem] italic font-thin text-gray-700">
            RizkiNrp
          </span>
        </div>
        <span className="text-[0.6rem] text-gray-400">
          Copyright 2023. All Rights Reserved
        </span>
        <div className="flex flex-row items-center gap-5">
          <a href="" target="_blank">
            <img
              src="/linkedin.svg"
              alt="linkedin"
              className="w-4 rounded aspect-square"
            />
          </a>
          <a href="" target="_blank">
            <img
              src="/github.svg"
              alt="github"
              className="w-4 rounded aspect-square"
            />
          </a>
          <a href="" target="_blank">
            <img
              src="/twitter.svg"
              alt="twitter"
              className="w-4 rounded aspect-square"
            />
          </a>
          <a href="" target="_blank">
            <img
              src="/facebook.svg"
              alt="facebook"
              className="w-4 rounded aspect-square"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
