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





const technologies =[{
    icon: <Html/>,
    title: 'HTML',
    text: 'HTML é a base de qualquer página web e desempenha um papel fundamental na estruturação do conteúdo de nosso projeto de inteligência artificial generativa. Usamos HTML para criar a estrutura básica das páginas do site, definindo seções como cabeçalhos, parágrafos, listas, imagens, e outros elementos essenciais. Com o HTML, conseguimos organizar as informações de maneira clara e acessível, facilitando a navegação e a interação do usuário com a interface do projeto.'
},
{
    icon: <Css />,
    title: 'Css',
    text:'CSS é a linguagem de estilo utilizada para definir a aparência e o design das páginas web do nosso projeto de inteligência artificial generativa. Com o CSS, conseguimos estilizar e personalizar elementos HTML, aplicando cores, fontes, espaçamentos, layout e responsividade, garantindo que o site seja visualmente atraente e consistente em diferentes dispositivos. O uso de CSS permite criar uma experiência de usuário envolvente e intuitiva, essencial para a apresentação profissional e funcional do projeto.'
},
{
    icon: <ReactJs />,
    title: 'React',
    text:'React é uma biblioteca JavaScript poderosa e flexível utilizada para construir interfaces de usuário dinâmicas e interativas. No nosso projeto de inteligência artificial generativa, React foi empregado para criar componentes reutilizáveis, que facilitam o desenvolvimento e a manutenção do código. Com React, conseguimos atualizar e renderizar partes específicas da interface de forma eficiente, sem a necessidade de recarregar a página inteira, proporcionando uma experiência de usuário mais fluida e responsiva. Além disso, a utilização de React possibilitou a integração eficiente com outras tecnologias e APIs, ampliando as capacidades do nosso sistema.'
},
{
    icon: <Js />,
    title: 'JavaScript',
    text:'JavaScript é uma linguagem de programação essencial para o desenvolvimento web, e em nosso projeto de inteligência artificial generativa, ele desempenha um papel crucial na criação de funcionalidades interativas e dinâmicas. Utilizamos JavaScript para manipular o DOM, validar entradas de usuário, realizar chamadas assíncronas a APIs e gerenciar o estado da aplicação. Com JavaScript, conseguimos trazer vida às páginas, respondendo a ações dos usuários em tempo real e implementando a lógica que conecta o frontend com o backend, garantindo uma experiência de usuário rica e interativa.'
},
{
    icon: <Git />,
    title: 'Git',
    text:'Git é um sistema de controle de versão distribuído que utilizamos para gerenciar o código-fonte do nosso projeto de inteligência artificial generativa. Com Git, podemos rastrear todas as alterações feitas no código, colaborando de forma eficiente entre os membros da equipe. Ele nos permite criar diferentes branches para testar novas funcionalidades ou corrigir bugs, sem afetar a versão principal do projeto. Além disso, Git facilita a fusão de alterações e a resolução de conflitos, garantindo que todos estejam trabalhando na versão mais atualizada do código e contribuindo para a organização e segurança do desenvolvimento do projeto.'
},
{
    icon: <GitHub />,
    title: 'GitHub',
    text:'GitHub é uma plataforma de hospedagem de código que usamos para armazenar, compartilhar e colaborar no desenvolvimento do nosso projeto de inteligência artificial generativa. Com GitHub, podemos aproveitar os recursos do Git, como controle de versão e branches, em um ambiente online acessível para toda a equipe. A plataforma permite que nossos desenvolvedores colaborem de maneira eficiente, revisando e comentando o código uns dos outros, além de facilitar a integração contínua e a implementação de novas funcionalidades. Utilizando GitHub, conseguimos manter nosso projeto organizado, seguro e acessível de qualquer lugar, promovendo uma colaboração eficaz e uma gestão de projeto mais estruturada.'
},
{
    icon: <Npm />,
    title: 'Npm',
    text:'O npm é o gerenciador de pacotes padrão para o ambiente Node.js e desempenha um papel fundamental no nosso projeto de inteligência artificial generativa. Utilizamos o npm para gerenciar as dependências do projeto, permitindo a instalação, atualização e remoção de bibliotecas e ferramentas necessárias para o desenvolvimento. Com o npm, conseguimos facilmente integrar e utilizar pacotes externos que expandem as funcionalidades do nosso projeto, como bibliotecas de UI, ferramentas de build, e frameworks adicionais. Isso não apenas acelera o desenvolvimento, mas também garante que utilizamos versões estáveis e seguras de cada dependência, mantendo o projeto eficiente e confiável.'
},
{
    icon: <Swiper />,
    title: 'Swiper',
    text: 'Swiper é uma poderosa biblioteca JavaScript para criar efeitos de carrossel e slides responsivos e modernos, que utilizamos para enriquecer a experiência de usuário em nosso projeto de inteligência artificial generativa. Integrado ao React, o Swiper nos permite criar galerias de imagens e conteúdos interativos de maneira intuitiva e envolvente. A biblioteca oferece uma ampla gama de funcionalidades, como navegação por toque, transições suaves e layouts customizáveis, proporcionando uma navegação fluida e atrativa, tanto em dispositivos móveis quanto em desktops. O uso do Swiper nos ajudou a destacar conteúdos importantes de forma dinâmica e visualmente impactante, tornando a interface do nosso projeto mais interativa e atrativa.'
},
{
    icon: <Vite />,
    title: 'Vite',
    text:'Vite é uma ferramenta moderna de build e desenvolvimento que utilizamos para otimizar o workflow do nosso projeto de inteligência artificial generativa. Com Vite, conseguimos um ambiente de desenvolvimento rápido e eficiente, graças ao seu servidor de desenvolvimento de alta velocidade e ao hot module replacement (HMR), que permite atualizações instantâneas durante o desenvolvimento. Além disso, Vite oferece uma configuração mínima e é altamente compatível com diversas bibliotecas e frameworks, incluindo React, que utilizamos amplamente em nosso projeto. O uso do Vite nos ajuda a reduzir o tempo de build e a melhorar a produtividade, permitindo que foquemos mais na criação e menos na configuração.'
},
{
    icon: <VsCode />,
    title: 'Visual Studio Code',
    text: 'Visual Studio Code (VS Code) é um editor de código-fonte altamente versátil e popular que utilizamos para desenvolver nosso projeto de inteligência artificial generativa. Com sua interface intuitiva e rica em funcionalidades, o VS Code oferece uma experiência de desenvolvimento eficiente e produtiva. Através de suas extensões e integração com sistemas de controle de versão como Git, conseguimos personalizar nosso ambiente de trabalho de acordo com nossas necessidades específicas. Além disso, recursos como IntelliSense, depuração integrada e terminal embutido facilitam a escrita, o teste e a manutenção do código, contribuindo para um fluxo de trabalho ágil e organizado ao longo do desenvolvimento do projeto.'
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
                                    <p>{item.text}</p>
                                    <div>
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
