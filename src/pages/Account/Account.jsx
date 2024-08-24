import SignUp from "../../components/Account/SignUp/SignUp.jsx";
import "./Account.css";

function Account () {

    return (
        <>
            <div className="account-container">
                <div className="account-card-container">
                    <SignUp/>
                </div>
            </div>
        </>
    );
}

export default Account;