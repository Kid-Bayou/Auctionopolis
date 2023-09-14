import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./account/Signup";
import Login from "./account/Login";
import Colors from "./pages/Colors";

import BLayout from "./buyer/Layout";
import BProfile from "./buyer/Profile";
import PurchaseHistory from "./buyer/PurchaseHistory";
import BiddingHistory from "./buyer/BiddingHistory";

import SLayout from "./seller/Layout";
import SProfile from "./seller/Profile";
import Listings from "./seller/Listings";
import ActiveListings from "./seller/ActiveListings";
import SoldItems from "./seller/SoldItems";
import UnsoldItems from "./seller/UnsoldItems";
import SalesHistory from "./seller/SalesHistory";
import RevenueAndEarnings from "./seller/RevenueAndEarnings";

import "./App.css";
import "./styles/components.css";
import "./styles/pages.css";
import "./styles/account.css";
import "./styles/buyer.css";
import "./styles/seller.css";

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
              <Route path="profile" element={<BProfile />}></Route>
              <Route
                path="purchasehistory"
                element={<PurchaseHistory />}
              ></Route>
              <Route path="biddinghistory" element={<BiddingHistory />}></Route>
              <Route path="colo" element={<Home />}></Route>
            </Route>

            <Route path="seller" element={<SLayout />}>
              <Route path="profile" element={<SProfile />}></Route>
              <Route path="listings" element={<Listings />}></Route>
              <Route path="activelistings" element={<ActiveListings />}></Route>
              <Route path="solditems" element={<SoldItems />}></Route>
              <Route path="unsolditems" element={<UnsoldItems />}></Route>
              <Route path="saleshistory" element={<SalesHistory />}></Route>
              <Route path="revenueandearnings" element={<RevenueAndEarnings />}></Route>
              <Route path="colo" element={<Home />}></Route>
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
