import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./account/Signup";
import Login from "./account/Login";
import Colors from "./pages/Colors";

import BLayout from "./buyer/Layout";
import BUserInfo from "./buyer/UserInfo";
import PurchaseHistory from "./buyer/PurchaseHistory";
import BiddingHistory from "./buyer/BiddingHistory";

import "./App.css";
import "./styles/components.css";
import "./styles/pages.css";
import "./styles/account.css";
import "./styles/buyer.css";

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

            <Route path="buyer" element={<BLayout />}>
              <Route path="userinfo" element={<BUserInfo />}></Route>
              <Route path="purchasehistory" element={<PurchaseHistory />}></Route>
              <Route path="biddinghistory" element={<BiddingHistory />}></Route>
              <Route path="colo" element={<Home />}></Route>
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
