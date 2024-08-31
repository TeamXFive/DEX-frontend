import "../../style/Account/Account.css";
import "../../../public/images/profile_icon.png";
import useAuthenticationContext from "../../hook/Authentication/useAuthenticationContext";
import { useState } from "react";

function PersonalInfo() {
    const {
        authedUser,
        setAuthedUser,
        registeredUsersList,
        setRegisteredUsersList,
        setAccountEditedAlertVisible,
    } = useAuthenticationContext();

    const [hasChanged, setHasChanged] = useState(false);
    const [temporaryUser, setTemporaryUser] = useState({ ...authedUser });

    const handleAccountDataChange = (event) => {
        const { name, value } = event.target;
        setHasChanged(true);
        setTemporaryUser({
            ...temporaryUser,
            [name]: name === "username" ? value.toLowerCase() : value,
        });
    };

    const handleSaveChanges = (event) => {
        event?.preventDefault?.();
        setHasChanged(false);
        setAuthedUser({ ...temporaryUser });
        setRegisteredUsersList(
            registeredUsersList.map((user) => {
                if (
                    user.username === authedUser.username &&
                    user.email === authedUser.email
                ) {
                    return {
                        ...user,
                        ...temporaryUser,
                        password: user.password,
                    };
                }
                return user;
            })
        );
        setAccountEditedAlertVisible(true);
    };

    return (
        <>
            <figure className="profile-icon">
                <img src="../../../public/images/profile_icon.png"></img>
            </figure>
            <form className="form-info-pessoais" onSubmit={handleSaveChanges}>
                <fieldset className="fs-account-nome">
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        name="name"
                        id="nome"
                        className="form-control text-white bg-transparent"
                        value={temporaryUser.name || ""}
                        onChange={handleAccountDataChange}
                    />
                </fieldset>
                <fieldset className="fs-account-empresa">
                    <label htmlFor="empresa">Empresa</label>
                    <input
                        type="text"
                        name="company"
                        id="empresa"
                        className="form-control text-white bg-transparent"
                        value={temporaryUser.company || ""}
                        onChange={handleAccountDataChange}
                    />
                </fieldset>
                <fieldset className="fs-account-nome">
                    <label htmlFor="nome">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        className="form-control text-white bg-transparent"
                        value={temporaryUser.username || ""}
                        onChange={handleAccountDataChange}
                    />
                </fieldset>
                <fieldset className="fs-account-email">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control text-white bg-transparent"
                        value={temporaryUser.email || ""}
                        onChange={handleAccountDataChange}
                    />
                </fieldset>
                
                <div className="submit-button">
                    <button type={`submit`} className={`${hasChanged ? "active" : ""}`}>Salvar alterações</button>
                </div>
                
            </form>
        </>
    );
}
export default PersonalInfo;
