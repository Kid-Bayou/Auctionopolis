import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home"
import About from "./pages/About"
import Signup from "./account/jjjjjj";
import Login from "./account/Login";
import Colors from "./pages/Colors";

import "./App.css";
import "./styles/components.css";
import "./styles/pages.css";
import "./styles/account.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="signup" element={<Signup />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="colors" element={<Colors />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
