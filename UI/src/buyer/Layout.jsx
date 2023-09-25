import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <>
      <div className="profile-layout-wrapper">

        <Sidebar />

        <main className="profile-main">
          <Outlet />
        </main>

      </div>
    </>
  );
}

export default Layout;
