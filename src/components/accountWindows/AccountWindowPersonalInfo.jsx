import "../../style/Account/Account.css";
import "../../../public/images/profile_icon.png"

function PersonalInfo() {
    return (
        <section className="window-account">
        <figure className="profile-icon">
            <img src="../../../public/images/profile_icon.png"></img>
        </figure>
        <form className="form-info-pessoais">    
            <fieldset className="fs-account-nome">
                <label htmlFor="nome">Nome</label>
                <input 
                    type="text"
                    name="nome"
                    id="nome"
                />
            </fieldset>
            <fieldset className="fs-account-empresa">
                <label htmlFor="empresa">Empresa</label>
                <input 
                    type="text"
                    name="empresa"
                    id="empresa"
                />
            </fieldset>
            <fieldset className="fs-account-email">
                <label htmlFor="email">E-mail</label>
                <input 
                    type="email"
                    name="email"
                    id="email"
                />
            </fieldset>                   
        </form>
        <div className="submit-button">
            <button>Salvar alterações</button>
        </div> 
    </section>
    )
}
export default PersonalInfo;