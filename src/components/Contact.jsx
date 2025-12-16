import React, { useState, useContext, useRef } from "react";
import { ThemeContext } from "../context/ThemeContext";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields."); // Error toast
      return;
    }

    setLoading(true);

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        console.log("EmailJS Result:", result.text);
        toast.success("Message sent successfully!"); // Success toast
        setName("");
        setEmail("");
        setMessage("");
        setLoading(false);
      },
      (error) => {
        console.log("EmailJS Error:", error);
        toast.error("Something went wrong. Please try again later.");
        setLoading(false);
      }
    );
  };

  return (
    <div
      name="contact"
      className={`w-full py-20 flex justify-center items-center p-4 ${
        theme === "dark" ? "bg-[#0a192f]" : "bg-white"
      }`}
    >
      <form
        ref={form}
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
            Submit the form below or shoot me an email -
            sameerprogrammer5@gmail.com
          </p>
        </div>

        <input
          className="bg-[#ccd6f6] p-2 z-[9999]"
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] z-[9999]"
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="bg-[#ccd6f6] p-2 z-[9999]"
          name="message"
          rows="10"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className={`border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center z-[9999]
            ${
              theme === "dark"
                ? "bg-[#0a192f] text-white"
                : "bg-white text-black"
            } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {loading ? "Sending..." : "Let's Collaborate"}
        </button>
      </form>

      {/* Toast container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme === "dark" ? "dark" : "light"}
      />
    </div>
  );
};

export default Contact;
