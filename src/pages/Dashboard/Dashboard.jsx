import React from "react";
import "../../style/Dashboard/Dashboard.css"
import Chat from  '../../assets/icons/chat-dash.svg?react'
import Grid from  '../../assets/icons/grid.svg?react'
import Person from  '../../assets/icons/person.svg?react'
import Home from  '../../assets/icons/home.svg?react'
import Sobre from  '../../assets/icons/sobre.svg?react'
import Visao from  '../../assets/icons/visao.svg?react'





function Dashboard(){
 return( 
        <>
            <main className="containerGeral">
                <section className="containerLeft">
                    <div  className="logo">
                        <img src="../../../public/images/fiap_logo.png" alt="" />
                    </div>
                    <div className="ContainerListaPages">
                        <ul className="listaPages">
                            <li>
                                <div>
                                    <Chat />
                                    <p>chat</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Grid />
                                    <p>dashboard</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Person />
                                    <p>profile</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Home />
                                    <p>home</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Sobre />
                                    <p>about us</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="containerPerfil">
                        <div className="infoPerfil">
                            <div className="fotoPerfil"></div>
                            <p>lorenzo@gmail.com</p>
                        </div>
                    </div>
                </section>
                <section className="containerRight">
                    <h2 className="title">Manage your projects</h2>
                    <div className="containerRightLow">
                        <div className="insetContainerLeft">
                            <div className="graphicSuport"></div>
                            <div className="dadosLow">
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className="insetContainerRight">
                            <div className="tableChamados">
                                <h3 className="titleTable">Atividade de Chamados</h3>
                                <div className="tabela">
                                    <div className="headerTable">
                                        <p>Assigned to</p>
                                        <p>Deadline</p>
                                        <p>Task</p>
                                        <p>Status</p>
                                        <div className="svgVisao">
                                        <Visao />
                                        </div>
                                    </div>
                                    <div className="contentTable">
                                        <div className="lineContent">
                                            <div style={{display: 'flex', gap: '5px'}}><Person/> <p>José Othon.</p></div>
                                            <p>Oct 25, 2024</p>
                                            <p>Como arrumar uma impresso...</p>
                                            <div className="InProcess">In Process</div>
                                            <button>See Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='graphicPerfomance'>
                                
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
)}

export default Dashboard