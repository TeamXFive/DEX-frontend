import "../../style/Account/Account.css";
import PersonalInfo from "../../components/accountWindows/AccountWindowPersonalInfo";
import Preferences from "../../components/accountWindows/AccountWindowPreferences";
import ChatHistory from "../../components/accountWindows/AccountWindowChatHistory";
import Permissions from "../../components/accountWindows/AccountWindowPermissions";
import { useNavigate } from "react-router-dom";
import useAuthenticationContext from "../../hook/Authentication/useAuthenticationContext";

function Account() {
    const navigate = useNavigate();

    const { setAuthedUser, setChatHistory } = useAuthenticationContext();

    const handleLogout = () => {
        setAuthedUser(undefined);
        setChatHistory({});
        navigate("/");
    };

    return (
        <>
            <article className="account-page-container">
                <section className="sidebar-container">
                    <ul className="sidebar">
                        <li className="sidebar-item active-sidebar-item">
                            INFORMAÇÕES PESSOAIS
                        </li>
                        <li className="sidebar-item" onClick={handleLogout}>
                            SAIR
                        </li>
                    </ul>
                </section>

                <section className={`window-account`}>
                    <PersonalInfo />
                    <Preferences />
                    <ChatHistory />
                    <Permissions />
                </section>
            </article>
        </>

        // Página conta
        //     - Menu lateral (info pessoal, permissão, cor) [componente]
        //     - aba aberta (info pessoal -> usuario, email, senha) [compoente]
        //       >    - Baseado no item selecionado do menu lateral (lógica)
    );
}

export default Account;
