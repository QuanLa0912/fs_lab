import { Outlet } from "react-router-dom";
import Header from "../common/header/Header";
import Navbar from "../common/navbar/Navbar";
import Footer from "../common/footer/Footer";

export function RootLayout() {
    return (
        <>
            <Header />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default RootLayout;
