import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <>
      <div className="buyer-profile-layout-wrapper">

        <Sidebar />

        <main className="buyer-profile-main">
          <Outlet />
        </main>

      </div>
    </>
  );
}

export default Layout;
