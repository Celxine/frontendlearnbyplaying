// import React from "react";
// import Landing from "./Landing";
// import "./Landing.css";

// function App() {
//   return (
//     <div className="App">
//       <Landing />
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Landing from "./Landing"; 
import Signupform from "./Signupform";
import MultipleChoice from "./MultipleChoice"; 
import SolarSystemInfo from "./SolarSystemInfo"; 
import Homepage from "./Homepage"; 
import LearnerStyle from "./LearnerStyle"; 
import ProcessingInformation from "./ProcessingInformation"
function App() {
  return (
    <Routes>
      <Route path="/landing" element={<Landing />} />
      <Route path="/signupform" element={<Signupform />} />
      <Route path="/multiplechoice" element={<MultipleChoice />} />
      <Route path="/SolarSystemInfo" element={<SolarSystemInfo />} />
      <Route path="/Homepage" element={<Homepage />} />
      <Route path="/LearnerStyle" element={<LearnerStyle />} />
      <Route path="/ProcessingInformation" element={<ProcessingInformation />} />
    </Routes>
  );
}

export default App;
