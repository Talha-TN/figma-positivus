import React, { useState } from "react";
import { useRef } from "react";
const Form = () => {
  const [data, setdata] = useState({});
  const hiRef = useRef();
  const getQoute = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const handleSubmit = () => {
    const hiValue = hiRef.current.checked ? "sayHi" : "quote";
    const quoteValue = getQoute.current.value;
    const nameValue = nameRef.current.value;
    const emailValue = emailRef.current.value;
    const messageValue = messageRef.current.value;
    setdata({
      hiValue,
      quoteValue,
      nameValue,
      emailValue,
      messageValue,
    });
    hiRef.current.value = "";
    getQoute.current.value = "";
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };
  console.log(data);
  return (
    <div className="flex flex-col gap-10">
      <div className="radio">
        <input
          ref={hiRef}
          type="radio"
          id="sayHi"
          name="contactOption"
          className="px-4  cursor-pointer"
        />
        <label htmlFor="sayHi" className="px-4  cursor-pointer">
          say hi
        </label>
        <input
          ref={getQoute}
          type="radio"
          id="quote"
          name="contactOption"
          className="px-4 cursor-pointer"
        />
        <label htmlFor="quote" className="px-4 cursor-pointer">
          Get a Quote
        </label>
      </div>
      <div className="flex flex-col gap-10">
        <input
          ref={nameRef}
          type="text"
          placeholder="enter your name"
          className="p-2 border-[1px] border-black rounded-md cursor-pointer"
        />
        <input
          ref={emailRef}
          type="email"
          placeholder="enter your email"
          className="p-2 border-[1px] border-black rounded-md cursor-pointer"
        />
        <textarea
          ref={messageRef}
          placeholder="message"
          className="cursor-pointer p-2 border-[1px] border-black rounded-md "
          name="message"
          id="textarea"
          rows="3"
          cols="6"
        ></textarea>
      </div>
      <div className="btn">
        <button
          onClick={handleSubmit}
          className="bg-black px-16 rounded-md text-white py-2"
        >
          Send message
        </button>
      </div>
    </div>
  );
};

export default Form;
