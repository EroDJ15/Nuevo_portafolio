import React from "react";
import Navbar from "./componets/Navbar";
import Banner from "./componets/Banner";
import About from "./componets/About";
import Services from "./componets/Services";
import Projects from "./componets/Projects";


function App() {
  return (
    <>
      <main className="bg-slate-900 min-h-screen">
        <Navbar />
        <Banner />
        <About />
        <Services/>
        <Projects/>


      </main>
    </>
  );
}

export default App;
