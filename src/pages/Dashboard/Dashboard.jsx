import "../../style/Dashboard/Dashboard.css"
import Chat from  '../../assets/icons/chat-dash.svg?react'
import Grid from  '../../assets/icons/grid.svg?react'
import Person from  '../../assets/icons/person.svg?react'
import Home from  '../../assets/icons/home.svg?react'
import Sobre from  '../../assets/icons/sobre.svg?react'
import Visao from  '../../assets/icons/visao.svg?react'
import { Link } from "react-router-dom";





function Dashboard(){
 return( 
        <>
            <main className="containerGeral">
                <section className="containerLeft">
                    <Link to='/'>
                    <div  className="logo">
                        <img src="../../../public/images/fiap_logo.png" alt="" />
                    </div>
                    </Link>
                    <div className="ContainerListaPages">
                        <ul className="listaPages">
                            <li>
                                <div>
                                    <Chat />
                                    <Link to='/'>
                                    <p>chat</p></Link>
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
                                    <Link to='/account'>
                                    <p>profile</p></Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Home />
                                    <Link to='/'>
                                    <p>home</p></Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    
                                    <Sobre /><Link to='/sobre'>
                                    <p>about us</p></Link>
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
                                <div className="containerDados">
                                    <h4 className="titleDados" style={{color: 'white'}}>Chamados Concluídos</h4>
                                    <div className="numerosDados">
                                        <p>57</p>
                                        <span className="spanConcluido">+14,7%</span>
                                    </div>
                                </div>
                                <div className="containerDados">
                                <h4 className="titleDados" style={{color: 'white'}}>Chamados Para N3</h4>
                                <div className="numerosDados"><p>06</p><span className="spanN3">-4,2%</span></div>
                                </div>
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
                                            <div style={{display: 'flex', gap: '5px'}}><Person/> <p style={{maxWidth: '11ch',overflow:'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>José Othon</p></div>
                                            <p>Oct 25, 2024</p>
                                            <p style={{maxWidth: '24ch',overflow:'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>Como arrumar uma impressora que precisa</p>
                                            <div className="InProcess">In Process</div>
                                            <button>See Details</button>
                                        </div>
                                        <div className="lineContent">
                                            <div style={{display: 'flex', gap: '5px'}}><Person/> <p style={{maxWidth: '11ch',overflow:'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>José Othon</p></div>
                                            <p>Oct 25, 2024</p>
                                            <p style={{maxWidth: '24ch',overflow:'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>Como arrumar uma impressora que precisa</p>
                                            <div className="Done">Done</div>
                                            <button>See Details</button>
                                        </div>
                                        <div className="lineContent">
                                            <div style={{display: 'flex', gap: '5px'}}><Person/> <p style={{maxWidth: '11ch',overflow:'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>José Othon</p></div>
                                            <p>Oct 25, 2024</p>
                                            <p style={{maxWidth: '24ch',overflow:'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>Como arrumar uma impressora que precisa</p>
                                            <div className="Canceled">Canceled</div>
                                            <button>See Details</button>
                                        </div>
                                        <div className="lineContent">
                                            <div style={{display: 'flex', gap: '5px'}}><Person/> <p style={{maxWidth: '11ch',overflow:'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>José Othon</p></div>
                                            <p>Oct 25, 2024</p>
                                            <p style={{maxWidth: '24ch',overflow:'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>Como arrumar uma impressora que precisa</p>
                                            <div className="N3">N3</div>
                                            <button>See Details</button>
                                        </div>
                                        <div className="lineContent">
                                            <div style={{display: 'flex', gap: '5px'}}><Person/> <p style={{maxWidth: '11ch',overflow:'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>José Othon</p></div>
                                            <p>Oct 25, 2024</p>
                                            <p style={{maxWidth: '24ch',overflow:'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>Como arrumar uma impressora que precisa</p>
                                            <div className="Done">Done</div>
                                            <button>See Details</button>
                                        </div>
                                        <div className="lineContent">
                                            <div style={{display: 'flex', gap: '5px'}}><Person/> <p style={{maxWidth: '11ch',overflow:'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>José Othon</p></div>
                                            <p>Oct 25, 2024</p>
                                            <p style={{maxWidth: '24ch',overflow:'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>Como arrumar uma impressora que precisa</p>
                                            <div className="Canceled">Canceled</div>
                                            <button>See Details</button>
                                        </div>
                                        <div className="lineContent">
                                            <div style={{display: 'flex', gap: '5px'}}><Person/> <p style={{maxWidth: '11ch',overflow:'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>José Othon</p></div>
                                            <p>Oct 25, 2024</p>
                                            <p style={{maxWidth: '24ch',overflow:'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>Como arrumar uma impressora que precisa</p>
                                            <div className="N3">N3</div>
                                            <button>See Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='graphicPerformance'>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
)}

export default Dashboard