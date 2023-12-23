import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a través de una solicitud HTTP o realizar cualquier otra acción necesaria
    console.log(formData);
  };

  return (
    <div id="contact" className="p-4 lg:p-20 flex-col items-center justify-center text-center">
      <h1 data-aos="fade-down" className="text-white font-semibold text-[38px]">
        Contact With <span className="text-fuchsia-500 font-semibold">Me</span>
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 lg:w-1/2 mx-auto">
        <input
          className="my-3 rounded-lg bg-slate-800 border-2 p-2 glow items-center"
          placeholder="Enter your name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          className="my-3 rounded-lg bg-slate-800 border-2 p-2 glow items-center"
          placeholder="Enter your email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <textarea
          className="w-full my-3 rounded-lg bg-slate-800 border-2 p-2 glow items-center"
          placeholder="Enter your message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          cols="30"
          rows="10"
        ></textarea>
        <button
          className="neno-button w-20 my-3 rounded-lg bg-slate-800 border-2 p-2 glow items-center text-center font-semibold text-white hover:bg-fuchsia-800 relative overflow-hidden mb-10"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
