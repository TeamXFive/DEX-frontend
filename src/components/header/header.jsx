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
                <img></img>
                <div>
                    <ul className="list">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/sobre"><li>Sobre o Projeto</li></Link>
                        <Link to="/chat"><li>Chat</li></Link>
                    </ul>
                </div>
                <button>Login</button>
        </header>
    );
}

export default Header;