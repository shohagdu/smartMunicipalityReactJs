import React from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function Layouts({children}){
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    );
}