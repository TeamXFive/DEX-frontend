import "../../style/Account/Account.css";

function Account() {

return (
    <>
        <article className="account-page-container">
            <section className="sidebar-container">
                <ul className="sidebar">
                    <li className="sidebar-item active-sidebar-item">INFORMAÇÕES PESSOAIS</li>
                    <li className="sidebar-item">PERMISSÕES</li>
                    <li className="sidebar-item">HISTÓRICO DE CHAT</li>
                    <li className="sidebar-item">PREFERÊNCIAS</li>
                </ul>
            </section>

            <section className="window-account">

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