import React from "react";
import Navbar from "./componets/Navbar";
import Banner from "./componets/Banner";
import About from "./componets/About";
import Service from "./componets/Services";

function App() {
  return (
    <>
      <main className="bg-slate-900 min-h-screen">
        <Navbar />
        <Banner />
        <About />
        <Service/>


      </main>
    </>
  );
}

export default App;
