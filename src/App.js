
import React, { useState } from "react";
import Intro from "./Pages/Intro";
import Home from "./Commponent/Home";
export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>

    
      {showIntro ? (
        <Intro onEnter={() => setShowIntro(false)} />
      ) : (
        <Home />
      )}


      
   

        
     

      
    </>
  );
}
