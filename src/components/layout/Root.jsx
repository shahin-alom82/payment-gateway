import { Outlet } from "react-router-dom";
import Header from "../Header";

const Root = () => {
      return (
            <main className="font-bodyFont">
                  <Header />
                  <Outlet />
            </main>
      );
};

export default Root;