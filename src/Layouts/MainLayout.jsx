import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main className="min-h-screen space-y-10 md:space-y-20 lg:space-y-32 xl:space-y-44  ">
                <Outlet />
            </main>
            <footer className="mt-10 md:mt-20 lg:mt-32 xl:mt-44">
                <Footer></Footer>
            </footer>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default MainLayout;