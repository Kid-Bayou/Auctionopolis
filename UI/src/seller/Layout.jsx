import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <>
      <div className="seller-profile-layout-wrapper">

        <Sidebar />

        <main className="seller-profile-main">
          <Outlet />
        </main>

      </div>
    </>
  );
}

export default Layout;
