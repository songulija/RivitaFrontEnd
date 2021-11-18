import React from 'react'
import { Container, Navbar, Nav, Row, Col, Carousel, Form } from 'react-bootstrap'
import logo from '../images/rivita-logo.png'
import '../styles/Home.css'

const HomeScreen = () => {
    return (

        <>
            <div style={{ background: '#82979c', color: 'white' }}>
                <Container>
                    <Row>
                        <Col lg={3}><i class="fas fa-map-marker"></i> <span>Švitrigailos g.11A, LT-03228 Vilnius</span></Col>
                        <Col lg={2}><i class="fas fa-phone"></i><span>+3702650264</span></Col>
                        <Col lg={3}><i class="far fa-clock"></i><span> Pirmdienis-Penktadienis, 8:00-17:30</span></Col>
                    </Row>

                    {/* <span style={{ color: '#fff' }} class="content"><i class="fa rt-icon-placeholder2"></i> Švitrigailos g.11A, LT-03228 Vilnius</span>
                    <span style={{ color: '#fff' }} class="content"><i class="fa rt-icon-telephone"></i> <span style={{ color: '#fff' }}>+3702650264</span></span>
                    <span style={{ color: '#fff' }} class="content"><i class="fa rt-icon-3-time"></i> Pirmdienis-Penktadienis, 8:00-17:30</span> */}

                </Container>
            </div>
            <div className='header-img' style={{ height: '70vh' }} >
                <div className='main' >
                    <div className='header-content '>
                        <h3>KROVINIŲ EKSPEDIJAVIMAS GELEŽINKELIO TRANSPORTU.</h3>
                        <h1 style={{ fontWeight: 'bold', color: '#516C71' }}>20 METŲ PATIRTIS.</h1>
                    </div>
                </div>
            </div>

            <section className='container-fluid pt-5 pb-5'>
            
                <div className='row'>
                
                    <div className='col-sm-12  col-lg-6'>
                        <div className='container'>
                        <h2>Apie mus</h2>
                            <div>
                                <div><p>UAB “Rivita ir Ko” vykdo krovinių ekspedijavimo veiklą ir teikia kitas papildomas paslaugas šioje srityje nuo 1996 metų. Ilgametė patirtis ir per du dešimtmečius užtarnautas patikimumas, leidžia bendrovei palaikyti tvarius santykius su vežėjais ir įmonėmis, teikiančiomis paslaugas, susijusias su krovinių vežimo procesu.</p>
                                </div>
                            </div>
                        </div>

                        {/* misija, vizija, tikslai */}
                        {/* wprt-icon-box style-5 clearfix icon-left w50 accent-outline outline-type align-left rounded-100 has-width */}
                        <div className='container'>
                            <div className="row">
                                <div className="col-sm-2">
                                    <i className="fas fa-train" style={{ fontSize: '50px', marginTop: '6px' }}></i>
                                </div>
                                <div className="col-sm-10">
                                    <h3>MISIJA:</h3>
                                    <div><p>Kasdienėje veikloje, naudojantis ilgamete ekspedijavimo patirtimi į ir iš NVS, Baltijos ir Europos šalis, skirti išskirtinį dėmesį klientams ir atsižvelgiant į jų individualius poreikius kompetetingai formuoti bei įgyvendinti optimaliausius ekspedijavimo sprendimus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div className="row">
                                <div className="col-sm-2">
                                    <i className="fas fa-train" style={{ fontSize: '50px', marginTop: '6px' }}></i>
                                </div>
                                <div className="col-sm-10">
                                    <h3>VIZIJA:</h3>
                                    <div><p>Siekiame tapti lyderiaujančia įmone ekspedijuojančia krovinius į ir iš NVS, Baltijos bei Europos šalis.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div className="row">
                                <div className="col-sm-2">
                                    <i className="fas fa-train" style={{ fontSize: '50px', marginTop: '6px' }}></i>
                                </div>
                                <div className="col-sm-10">
                                    <h3>TIKSLAI:</h3>
                                    <div><p>Sėkmingai užmegzti ir puoselėti verslo santykius vadovaujantis įmonės vertybėmis:
                                        • Sąžiningumas ir atvirumas – rūpintis visais savo klientais, suteikti informaciją apie vežimo kainodarą ir pateikti optimaliausius krovinių gabenimo maršrutus
                                        • Bendradarbiavimo įgūdžiai – nuolat komunikuoti ir suprasti kliento poreikius, gebėti pasiūlyti alternatyvius ir lanksčius sprendimus
                                        • Atsakingumas – laiku įvykdyti patikėtus darbus, prisiimti atsakomybę už patikėtus krovinius ir jų sklandų pervežimą</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='col-sm-12  col-lg-6'>
                        <div className='container'>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Vardas</Form.Label>
                                <Form.Control type="text" placeholder="Įveskite vardą" />
                                <Form.Label>E-paštas</Form.Label>
                                <Form.Control type="text" placeholder="Įveskite paštą" />
                                <Form.Label>Tema</Form.Label>
                                <Form.Control type="email" placeholder="Įveskite tema" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Žinutė</Form.Label>
                                <Form.Control as="textarea" rows={3} style={{height: '250px'}} placeholder="Įveskite žinutę"/>
                            </Form.Group>
                        </Form>
                        </div>
                    </div>
                </div>
            </section>


        </>

    )
}

export default HomeScreen;