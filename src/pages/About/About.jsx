import TeamCarousel from "../../components/TeamCarousel/TeamCarousel";
import "../../style/About/About.css";

const picsMeetOurTeam = [
    {
        url: "/images/foto-carol.png",
        name: "Caroline Nunes Levino Brandão",
        work: "Full stack developer",
    },
    {
        url: "/images/foto-ivan.png",
        name: "Ivan Ramos Biagioni",
        work: "Full stack developer",
    },
    {
        url: "/images/foto-sani.png",
        name: "Luiz Henrique Sani",
        work: "Full stack developer",
    },
    {
        url: "/images/foto-lorenzo.png",
        name: "Lorenzo Oliveira Zimbres",
        work: "Full stack developer",
    },
    {
        url: "/images/foto-othon.png",
        name: "José Othon Ribeiro Moreira Neto",
        work: "Full stack developer",
    },
];

function About() {
    return (
        <>
            <article className="about-page-container">
                <section className="inicialContainer">
                    <img
                        className="background"
                        src="/images/background-about.png"
                        alt="background"
                    />
                    <span className="background-overlay" aria-hidden="true" />
                    <div className="inicialContainerContent">
                        <h1 className="InicialTitle">Sobre o Projeto</h1>
                        <p className="InicialText">
                            Neste projeto, nossa equipe se dedicou a desenvolver
                            uma solução inovadora de inteligência artificial
                            generativa para atender às necessidades de uma
                            empresa moderna. Nesta seção, apresentamos os
                            membros do grupo, suas contribuições individuais e
                            as tecnologias que aplicamos, baseadas nos
                            conhecimentos adquiridos ao longo das disciplinas do
                            curso até a FASE 5. Nossa jornada combinou teoria e
                            prática para criar uma ferramenta poderosa e
                            funcional.
                        </p>
                    </div>
                </section>
                <section className="infoScroll">
                    <div className="infoScrollContent">
                        <a href="">Veja as tecnologias Utilizadas</a>
                        <span></span>
                        <a href="">Conheça a Nossa Equipe</a>
                    </div>
                    <span className="divider"></span>
                </section>
                <section className="MeetOurTeam">
                    <div className="topContentMOT">
                        <h2>Conheça nosso lindo time</h2>
                        <p>
                            Nossa filosofia é simples; tenha ótimas pessoas, e
                            de a elas os recursos necessários para assim ter um
                            bom produto.
                        </p>
                    </div>

                    <TeamCarousel />

                    <div className="bottomContentMOT">
                        <p>
                            Uma equipe apaixonada por tecnologia e inovação,
                            trabalhando para criar um futuro melhor.
                        </p>
                        <p>
                            <i>Engenharia de Software - 1 ESOA</i>
                        </p>
                        <img
                            src="/images/fiap_logo.png"
                            alt="logo da faculdade fiap"
                        />
                    </div>
                </section>
            </article>
        </>
    );
}

export default About;
