// Needed Imports for doing

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Companies from "./components/Companies/companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
import React, { useState, useEffect } from "react";
 

// setting up the splash screen for 3 sec
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false); 
    }, 3000); 
  }, []);
// if loading works then splash screen comes

  if (loading) {
    return (
      <div className="SplashScreen bg-gradient-to-r from-slate-900 to-slate-700 text-white">
        <span id="welcome"></span>
        <div className="head123">
          <h1 class="animate">Welcome to Hogar Estate</h1>
        </div>
      </div>
    );
  }
// returning function 

  return (
    // using gradient colors for bg
    <div className="App bg-gradient-to-r from-violet-200 to-pink-200"> 
    
      <div>
        
        <div className="bg-slate-900" />
        
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />  

      <div class=" bg-gradient-to-r from-violet-200 to-pink-200 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0 shadow-lg shadow-indigo-700/40"
          src="./picmanju.jpeg"
          alt="face"
        />
        <div class="text-center space-y-2 sm:text-left ">
          <div class="space-y-0.5 ">
            <p class="text-lg text-black font-semibold select-all ">
              Manjunadha Sarma Dandibhotla
            </p>
            <p class="text-slate-500 font-medium">Software Engineer</p>
          </div>
          <button class="px-4 py-1 text-sm text-white font-semibold rounded-full border   hover:text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500   hover:scale-110  text-white font-bold py-2 px-4 rounded">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
