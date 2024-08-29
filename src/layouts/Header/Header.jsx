import {Link } from "react-router-dom";
import '../../style/Header/Header.css';
import { useEffect, useState } from "react";
import useAuthenticationContext from "../../hook/Authentication/useAuthenticationContext.jsx";
import PropTypes from "prop-types";

Header.propTypes = {
    scrollDirection: PropTypes.string.isRequired,
    setScrollDirection: PropTypes.func.isRequired,
}

function Header({ scrollDirection, setScrollDirection }) {
    const [lastScrollY, setLastScrollY] = useState(0);

    const {
        setIsModalVisible,
        setIsSignInVisible,
        isUserLogged,
    } = useAuthenticationContext();

    const handleLogin = (event) => {
        if (isUserLogged) {
            return;
        }

        if (isUserLogged) {

        }

        if (location.pathname === "/authentication") {
            setIsModalVisible(false);
        } else {
            setIsModalVisible(true);
            setIsSignInVisible(true);
        }

        event.preventDefault();
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            (currentScrollY > lastScrollY) ? setScrollDirection("down") : setScrollDirection("up");

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    useEffect(() => {

    }, []);

    return (
        <header className={`page-header glass-effect ${scrollDirection === "down" && "hide-header"}`}>
            <div className="header-title-container">
                <h1 className={`header-title`}>DEX</h1>
            </div>

            <nav className="header-nav">
                <div className="header-nav-links">
                    <Link to="/">HOME</Link>
                    <Link to="/sobre">SOBRE</Link>
                    <Link to="/chat">CHAT</Link>
                    <Link to={isUserLogged ? "/account" : "/authentication"} onClick={handleLogin}>LOGIN</Link>
                </div>
            </nav>
        </header>
    )
    ;
}

export default Header;