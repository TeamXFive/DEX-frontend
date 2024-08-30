import "../../style/Header/Header.css";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import useAuthenticationContext from "../../hook/Authentication/useAuthenticationContext.jsx";
import PropTypes from "prop-types";

Header.propTypes = {
    scrollDirection: PropTypes.string.isRequired,
    setScrollDirection: PropTypes.func.isRequired,
};

function Header({scrollDirection, setScrollDirection}) {
    const navigate = useNavigate();
    const [lastScrollY, setLastScrollY] = useState(0);

    const {
        setIsModalVisible,
        setIsSignInVisible,
        authedUser, setAuthedUser
    } = useAuthenticationContext();

    const handleLogout = () => {
        setAuthedUser(undefined);
        navigate("/");
    };

    const handleLogin = (event) => {
        if (authedUser) {
            return;
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

            currentScrollY > lastScrollY
                ? setScrollDirection("down")
                : setScrollDirection("up");

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={`glass-effect ${scrollDirection === "down" && "hide-header"}`}>
            
            <div className={`page-header ${scrollDirection === "down" && "hide-header"}`}>
                
                <div className="header-title-container">
                    <h1 className={`header-title`}>DEX</h1>
                </div>
    
                <nav className="header-nav">
                    <div className="header-nav-links">
                        <Link to="/">HOME</Link>
                        <Link to="/sobre">SOBRE</Link>
                        <Link to="/chat">CHAT</Link>
                    </div>
                </nav>
    
                <div className="auth-menu">)
                    <Link to={authedUser ? "/account" : "/authentication"} onClick={handleLogin}>
                        {authedUser ? `Olá ${authedUser.username}` : "LOGIN"}
                    </Link>
                    
                    {authedUser && (
                        <Link to={"/logout"} onClick={handleLogout}>
                            SAIR
                        </Link>
                    )}
                </div>
                
            </div>
        </header>
    );
}

export default Header;
