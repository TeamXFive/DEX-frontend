import "../../../../public/images/dex-androide.png"
import "../../../style/Home/CallToAction/CallToAction.css"

function CallToAction() {
    return(
        <article className="call-to-action">
            <div className="fig-container">
                <img src="../../../../public/images/dex-androide.png" id="dex-fig"></img>
            </div>

            <section className="section-home-text">
                <div className="home-text">
                    DEX é um agente de suporte baseado em IA generativa e especializado em auxiliar os times de suporte a encontrarem soluções precisas de forma rapida e eficiente
                </div>
            </section>
        </article>
    )
}
       

export default CallToAction;