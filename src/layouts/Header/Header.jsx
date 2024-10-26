import "../../style/Header/Header.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuthenticationContext from "../../hook/Authentication/useAuthenticationContext.jsx";
import PropTypes from "prop-types";

Header.propTypes = {
    scrollDirection: PropTypes.string.isRequired,
    setScrollDirection: PropTypes.func.isRequired,
};

function Header({ scrollDirection, setScrollDirection }) {
    const { authedUser } = useAuthenticationContext();

    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            currentScrollY > lastScrollY
                ? setScrollDirection("down")
                : setScrollDirection("up");

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY, setScrollDirection]);

    return (
        <header
            className={`glass-effect ${
                scrollDirection === "down" && "hide-header"
            }`}
        >
            <div
                className={`page-header ${
                    scrollDirection === "down" && "hide-header"
                }`}
            >
                <div className="header-title-container">
                    <h1 className={`header-title`}>
                        <Link to={`/`}>DEX</Link>
                    </h1>
                </div>

                <nav className="header-nav">
                    <div className="header-nav-links">
                        {authedUser && <Link to="/">CHAT</Link>}
                        <Link to="/sobre">SOBRE O PROJETO</Link>
                        {authedUser && <Link to={"/knowledge"}>KNOWLEDGE</Link>}
                        {authedUser && <Link to="/dashboard">DASHBOARD</Link>}
                    </div>
                </nav>

                <div className="auth-menu">
                    <Link to={authedUser ? "/account" : "/authentication"}>
                        {authedUser ? `${authedUser.username}` : "LOGIN"}
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
