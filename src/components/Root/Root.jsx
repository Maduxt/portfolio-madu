import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/header";
import Footer from "../Footer/footer";


const Root = () => {
    return(
        <div className="App">
            <Header />
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default Root;