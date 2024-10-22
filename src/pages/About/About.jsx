import TeamCarousel from "../../components/TeamCarousel/TeamCarousel";
import "../../style/About/About.css";

import Draw from  '../../assets/icons/svg-technologies.svg?react'
import Html from '../../assets/icons/html.svg?react'
import Css from '../../assets/icons/css.svg?react'
import ReactJs from '../../assets/icons/react.svg?react'
import Js from '../../assets/icons/js.svg?react'
import Git from '../../assets/icons/git.svg?react'
import GitHub from '../../assets/icons/github.svg?react'
import Npm from '../../assets/icons/npm.svg?react'
import Swiper from '../../assets/icons/swiper.svg?react'
import Vite from '../../assets/icons/vite.svg?react'
import VsCode from '../../assets/icons/vscode.svg?react'
import Node from '../../assets/icons/Node.svg?react'
import OpenIA from '../../assets/icons/OpenAI.svg?react'
import Videoslider from "../../components/Home/Videoslider/Videoslider";





const technologies =[{
    icon: <Html/>,
    title: 'HTML',
},
{
    icon: <Css />,
    title: 'Css',
},
{
    icon: <ReactJs />,
    title: 'React',
},
{
    icon: <Js />,
    title: 'JavaScript',
},
{
    icon: <Git />,
    title: 'Git',
},
{
    icon: <GitHub />,
    title: 'GitHub',
},
{
    icon: <Npm />,
    title: 'Npm',
},
{
    icon: <Swiper />,
    title: 'Swiper',
},
{
    icon: <Vite />,
    title: 'Vite',
},
{
    icon: <VsCode />,
    title: 'VS Code',
},
{
    icon: <Node />,
    title: 'Node JS',
},
{
    icon: <OpenIA />,
    title: 'Open IA',
}
]



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
                        DEX foi projetado para ser um agente de IA generativa especializado em suporte técnico.
                         Nesse site apresentamos o protótipo do DEX e como os membros do xFIVE, time com skills diversas,
                          contribuíram e usaram variadas tecnologias para construir um MVP poderoso e funcional.
                           Este site foi construído com cinco páginas principais, no quais são: Home, Sobre o Projeto, Autenticação, Chat, e Account.
                        </p>
                    </div>
                </section>
                <section className="infoScroll">
                    <div className="infoScrollContent">
                        <a href="#technologies">Veja as tecnologias Utilizadas</a>
                        <span></span>
                        <a href="#MeetOurTeam">Conheça a Nossa Equipe</a>
                    </div>
                    <span className="divider"></span>
                </section>
                <section id="MeetOurTeam" className="MeetOurTeam">
                    <div className="topContentMOT">
                        <h2>Conheça Nosso Time</h2>
                        <p>
                        Para nós inovação é aliar a criatividade com foco em resultados!
                        </p>
                    </div>

                    <TeamCarousel />

                    <div className="bottomContentMOT">
                        <p>
                            Uma equipe apaixonada por tecnologia e inovação.
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
                <span className="divider-technologies"></span>
                <div className="">
                    <Videoslider/>
                </div>
                <section id='technologies' className="technologies">
                    <span className="divider-technologies"></span>
                    <div className="technologies-introduction">
                        <h2>Veja as Tecnologias Utilizadas</h2>
                        <div className="pre-info-technologies">
                            <p>Para desenvolver este projeto de inteligência artificial generativa,
                                utilizamos uma variedade de tecnologias e ferramentas que aprendemos ao longo do curso.
                                Essas tecnologias foram selecionadas cuidadosamente para garantir que nossa solução seja robusta,
                                eficiente. Abaixo, apresentamos as principais tecnologias que contribuíram para a construção do projeto,
                                refletindo o conhecimento adquirido até a FASE 5.</p>
                                <Draw />
                        </div>
                    </div>
                    <div className="info-technologies">
                            {technologies.map((item) => (
                                <div key={item.title} className="box-technologies">
                                    <h3>{item.title}</h3>
                                    <div className="containerImg">
                                    {item.icon}
                                    </div>
                                </div>
                            ))}</div>
                </section>
            </article>
        </>
    );
}

export default About;
