import React from 'react'
import { Container, Navbar, Nav, Row, Col, Carousel, Form, Button } from 'react-bootstrap'
import { Checkbox } from 'antd'
import logo from '../images/rivita-logo.png';
import vision from '../images/vision.png';
import mission from '../images/004-mission.png'
import purpose from '../images/006-purpose.png'
import '../styles/Home.css'

// ABOUT SECTION STYLES
const aboutTitleStyle = {
    fontSize: '2.142em',
    fontFamily: 'Poppins, sans-serif',
    letterSpacing: '1px',
    color: '#333',
    fontWeight: '500',
    lineHeight: '1.5',
    textRendering: 'optimizeLegibility'
}

const aboutTextStyle = {
    fontSize: '16px',
    fontFamily: 'Open Sans, sans-serif',
    color: '#777777'
}

const aboutParagraphsTitlesStyles = {
    fontSize: '16px',
    fontWeight: '540',
    fontFamily: 'Open Sans, sans-serif',
    color: '#333'
}
const aboutParagraphsTextStyles = {
    fontSize: '14px',
    fontFamily: 'Open Sans, sans-serif',
    color: '#777777'
}
//ICONS

const aboutIconsStyling = {
    width: '60px',
    color: 'black',
    padding: '8px',
    backgroundColor: 'white',
    borderRadius: '90px',
    border: 'solid',
    borderWidth: '2px'
}


// SERVICES STYLING
const serviceContainerStyle = {
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
                            <h2 style={{ ...aboutTitleStyle }}>Apie mus</h2>
                            <div>
                                <div><p style={{ ...aboutTextStyle }}>UAB “Rivita ir Ko” vykdo krovinių ekspedijavimo veiklą ir teikia kitas papildomas paslaugas šioje srityje nuo 1996 metų. Ilgametė patirtis ir per du dešimtmečius užtarnautas patikimumas, leidžia bendrovei palaikyti tvarius santykius su vežėjais ir įmonėmis, teikiančiomis paslaugas, susijusias su krovinių vežimo procesu.</p>
                                </div>
                            </div>
                        </div>

                        {/* misija, vizija, tikslai */}
                        {/* wprt-icon-box style-5 clearfix icon-left w50 accent-outline outline-type align-left rounded-100 has-width */}
                        <div className='container pt-4'>
                            <div className='container'>
                                <div className="row">
                                    <div className="col-sm-2 col-md-2 col-lg-3 col-xl-2">
                                        <img src={mission} alt='Vision' style={{ ...aboutIconsStyling }} />
                                    </div>
                                    <div className="col-sm-12 col-md-10 col-lg-9 col-xl-10 pt-3">
                                        <h3 style={{ ...aboutParagraphsTitlesStyles }}>MISIJA:</h3>
                                        <div><p style={{ ...aboutParagraphsTextStyles }}>Kasdienėje veikloje, naudojantis ilgamete ekspedijavimo patirtimi į ir iš NVS, Baltijos ir Europos šalis, skirti išskirtinį dėmesį klientams ir atsižvelgiant į jų individualius poreikius kompetetingai formuoti bei įgyvendinti optimaliausius ekspedijavimo sprendimus.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='container'>
                                <div className="row">
                                    <div className="col-sm-2 col-md-2 col-lg-3 col-xl-2">
                                        {/* <i className="fas fa-train" style={{ ...aboutIconsStyling }}></i> */}
                                        <img src={vision} alt='Vision' style={{ ...aboutIconsStyling }} />
                                    </div>
                                    <div className="col-sm-12 col-md-10 col-lg-9 col-xl-10 pt-3">
                                        <h3 style={{ ...aboutParagraphsTitlesStyles }}>VIZIJA:</h3>
                                        <div><p style={{ ...aboutParagraphsTextStyles }}>Siekiame tapti lyderiaujančia įmone ekspedijuojančia krovinius į ir iš NVS, Baltijos bei Europos šalis.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='container'>
                                <div className="row">
                                    <div className="col-sm-2 col-md-2 col-lg-3 col-xl-2">
                                        <img src={purpose} alt='Vision' style={{ ...aboutIconsStyling }} />
                                    </div>
                                    <div className="col-sm-12 col-md-10 col-lg-9 col-xl-10 pt-3">
                                        <h3 style={{ ...aboutParagraphsTitlesStyles }}>TIKSLAI:</h3>
                                        <div><p style={{ ...aboutParagraphsTextStyles }}>Sėkmingai užmegzti ir puoselėti verslo santykius vadovaujantis įmonės vertybėmis:
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
                        <div className='container mt-3' >
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
                                <div className='container text-center shadow-sm' style={{ ...serviceContainerStyle }}>
                                    <i className="fas fa-train" style={{ ...serviceIconsStyle }}></i>
                                </div>
                                <p style={{ ...serviceText }}>Krovinių ekspedijavimas geležinkelių transportu
                                    Krovinio judėjimo </p>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3 pb-5'>
                            <div className='container text-center'>
                                <div className='container text-center shadow-sm' style={{ ...serviceContainerStyle }}>
                                    <i className="fas fa-globe-europe" style={{ ...serviceIconsStyle }}></i>
                                </div>
                                <p style={{ ...serviceText }}>Krovinio judėjimo kontrolė</p>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                            <div className='container text-center'>
                                <div className='container text-center shadow-sm' style={{ ...serviceContainerStyle }}>
                                    <i className="fas fa-file-contract" style={{ ...serviceIconsStyle }}></i>
                                </div>
                                <p style={{ ...serviceText }}>Pasienio ir transporto veterinarinės priežiūros tarnybų teikiamų paslaugų organizavimas</p>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                            <div className='container text-center'>
                                <div className='container text-center shadow-sm' style={{ ...serviceContainerStyle }}>
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