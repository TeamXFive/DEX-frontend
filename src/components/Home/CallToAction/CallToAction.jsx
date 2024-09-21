import "../../../../public/images/dex-androide.png"
import "../../../style/Home/CallToAction/CallToAction.css"
import CallToActionButton from '../CallToActionButton/CallToActionButton.jsx';

function CallToAction() {
    return(
        <article className="call-to-action">
            <div className="fig-container">
                <img src="../../../../public/images/dex-androide.png" id="dex-fig"></img>
            </div>

            <section className="section-home-text">
                <div className="home-text">
                    DEX é um agente de IA generativa especializado em auxiliar os times de suporte a encontrarem soluções precisas de forma rapida e eficiente.
                    <div className="call-button">
                        <CallToActionButton/>
                    </div>
                </div>
            </section>
        </article>
    )
}
       

export default CallToAction;