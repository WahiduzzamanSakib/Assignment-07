
import Navbar from './Common/Navbar';
import { Outlet } from 'react-router';
import Footer from './Common/Footer';
import { ToastContainer } from "react-toastify";

const Root = () => {
    

    return (
        <div>
            <Navbar/>
            <Outlet />
            <Footer/>

             <ToastContainer />
        </div>
    );
};

export default Root;