import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const Postdata = (e) => {
    console.log(name, email, message);
    if (message) {
      alert("your message sended successfully ");
      localStorage.setItem("key", message);
    } else {
      alert("now also enter your message ");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      name="contact"
      className={`w-full h-screen flex justify-center items-center p-4 ${
        theme === "dark" ? "bg-[#0a192f]" : "bg-white"
      }`}
    >
      <form
        className="flex flex-col max-w-[600px] w-full"
        onSubmit={handleSubmit}
      >
        <div className="pb-8">
          <p
            className={`text-4xl font-bold inline border-b-4 border-pink-600 ${
              theme === "dark" ? "text-gray-300" : "text-gray-800"
            }`}
          >
            Contact
          </p>
          <p
            className={`${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            } py-4`}
          >
            Submit the form below or shoot me an email - myemail@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          className={` border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center
            ${
              theme === "dark"
                ? "bg-[#0a192f] text-white"
                : "bg-white text-black"
            }`}
          onClick={() => Postdata()}
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
