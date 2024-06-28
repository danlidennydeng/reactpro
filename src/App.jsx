// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import MultiSteps from "./pages/MultiSteps";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />

//         {/* <Route path="/multi-step-form" element={<MultiStepForm />} /> */}

//         <Route path="/multi-steps" element={<MultiSteps />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./utils/Home";
import MultiSteps from "./utils/MultiSteps";
import { StepsProvider } from "./utils/StepsContext";

const App = () => {
  return (
    <StepsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/multi-steps" element={<MultiSteps />} />
        </Routes>
      </BrowserRouter>
    </StepsProvider>
  );
};

export default App;
