import React from "react";

import MainSection from "./componant/sections/MainSection/MainSection";
import AboutSection from "./componant/sections/AboutSection/AboutSection";
import TimeLine from "./componant/sections/MainSection/TimeLine";

function App() {
  return (
    <div className="contain">
      <TimeLine/>
      <MainSection />
      <AboutSection />
      <div className="testpices"></div>
      
    </div>
  );
}

export default App;
