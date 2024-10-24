import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const Root = () => {
      return (
            <main className="font-bodyFont">
                  <Header />
                  <Outlet />
                  <Footer />
            </main>
      );
};

export default Root;