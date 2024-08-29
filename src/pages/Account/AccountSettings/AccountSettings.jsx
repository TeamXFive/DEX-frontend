import './AccountSettings.css'

function AccountSettings () {
    return (
        <div className="accountsettings">
            <div className="title">
                <h1 className="settingsTitle">Configurações</h1>
            </div>
            
            <div className="container-accountsetting">

                <div className="settings-options">

                    <div className="menu-options">
                        <p className="settings-menu">Perfil</p>
                        <p className="settings-menu">Privacidade</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default AccountSettings;