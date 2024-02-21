import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./pages/signup";
import {Signin}from "./pages/signin"
import{Sendmoney} from "./pages/sendmoney"
import {Allpeople} from "./pages/allpeople"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Signin' element={<Signin />} />
        <Route path='/Sendmoney' element={<Sendmoney />} />
      <Route path='/Allpeople' element={<Allpeople />} /> 
              </Routes>
    </BrowserRouter>
  );
}

export default App;
