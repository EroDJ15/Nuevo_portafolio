import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="p-4 lg:p-20 flex-col items-center justify-center text-center">
      <h1 data-aos="fade-down" className="text-white font-semibold text-[38px]">
        Contact With <span className="text-fuchsia-500 font-semibold">Me</span>
      </h1>
      <form action="" className="flex flex-col gap-2 lg:w-1/2 mx-auto">
        <input className="my-3 rounded-lg bg-slate-800 border-2  p-2 glow items-center" placeholder="Enter your name" type="text" name="" id="" />
        <input className="my-3 rounded-lg bg-slate-800 border-2  p-2 glow items-center" placeholder="Enter your email" type="email" name="" id="" />
        <textarea className="w-full my-3 rounded-lg bg-slate-800 border-2  p-2 glow items-center" placeholder="Enter your message" name="" id="" cols="30" rows="10"></textarea>
        <button className="neno-button w-20 my-3 rounded-lg bg-slate-800 border-2 p-2 glow items-center text-center font-semibold text-white hover:bg-fuchsia-800 relative overflow-hidden mb-10" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
