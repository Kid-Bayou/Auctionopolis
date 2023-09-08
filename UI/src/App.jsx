import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Colors from "./pages/Colors";

import "./App.css";
import "./styles/components.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/color" element={<Colors />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
