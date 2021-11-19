import React from 'react'
import { Container, Navbar, Nav, Row, Col, Carousel, Form, Button } from 'react-bootstrap'
import { Checkbox } from 'antd'
import logo from '../images/rivita-logo.png'
import '../styles/Home.css'


const containerStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '90px',
    backgroundColor: 'white',
    color: '#5F1508',
}

const serviceIconsStyle = {
    fontSize: '70px',
    marginTop: '40px'
}

const serviceText = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '18px'
}

const serviceButton = {
    width: '100%',
    paddingTop: '3px',
    paddingBottom: '4px',
    backgroundColor: '#85979B',
    fontSize: '18px',
    padding: '5px',
    color: 'white',
    border: 'none'
}

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

            <section className='container-fluid pt-5 pb-5' style={{ width: '90%' }}>

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
                        <div className='container pt-4'>
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

                    </div>

                    <div className='col-sm-12 col-lg-6'>
                        <div className='container' >
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
                                    <Form.Control as="textarea" rows={3} style={{ height: '250px' }} placeholder="Įveskite žinutę" />
                                </Form.Group>
                                <Checkbox>Sutinku su šios svetainės privatumo politika.</Checkbox>
                                <br />
                                <Button style={{ marginTop: '10px' }}>Siųsti</Button>
                            </Form>


                        </div>
                    </div>
                </div>
            </section>
            <section className='container-fluid pt-5 pb-5' style={{ width: '100%', backgroundColor: '#F7F7F7' }}>
                <div className='container' style={{ width: '90%' }}>
                    <div className='row pb-5'>
                    <h1>Paslaugos</h1>
                        <div className='container pt-2'>
                            
                            <button style={{ ...serviceButton }}>KROVINIŲ GABENIMAS</button>
                        </div>

                    </div>

                    <div className='row'>
                        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3 pb-5'>
                            <div className='container text-center'>
                                <div className='container text-center shadow-sm' style={{ ...containerStyle }}>
                                    <i className="fas fa-train" style={{ ...serviceIconsStyle }}></i>
                                </div>
                                <p style={{ ...serviceText }}>Krovinių ekspedijavimas geležinkelių transportu
                                    Krovinio judėjimo </p>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3 pb-5'>
                            <div className='container text-center'>
                                <div className='container text-center shadow-sm' style={{ ...containerStyle }}>
                                    <i className="fas fa-globe-europe" style={{ ...serviceIconsStyle }}></i>
                                </div>
                                <p style={{ ...serviceText }}>Krovinio judėjimo kontrolė</p>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                            <div className='container text-center'>
                                <div className='container text-center shadow-sm' style={{ ...containerStyle }}>
                                    <i className="fas fa-file-contract" style={{ ...serviceIconsStyle }}></i>
                                </div>
                                <p style={{ ...serviceText }}>Pasienio ir transporto veterinarinės priežiūros tarnybų teikiamų paslaugų organizavimas</p>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                            <div className='container text-center'>
                                <div className='container text-center shadow-sm' style={{ ...containerStyle }}>
                                    <i className="fas fa-phone" style={{ ...serviceIconsStyle }}></i>
                                </div>
                                <p style={{ ...serviceText }}>Konsultacijos krovinių vežimo klausimais</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


        </>

    )
}

export default HomeScreen;