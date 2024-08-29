import { Link } from "react-router-dom";
import './header.css';
import React, { useEffect, useState } from "react";

function Header() {
    const[currentPage,setCurrentPage]=useState("")
    useEffect(() => {
        console.log("INITIAL LOAD");
    }, []);

    useEffect(() => {
        setCurrentPage(window.location.pathname.replace("/", ""));
    }, []);

    return(
        <header>
                <div>
                <h1 className="Logo">DEX</h1>
                </div>
                <div>
                    <ul className="list">
                        <Link to="/"><li>HOME</li></Link>
                        <Link to="/sobre"><li>SOBRE O PROJETO</li></Link>
                        <Link to="/chat"><li>CHAT</li></Link>
                    </ul>
                </div>
                <div>
                    <button>Login</button>
                </div>
        </header>
    );
}

export default Header;