import React from 'react'
import { Container, Navbar, Nav, Row, Col, Form, Button, Carousel, Image } from 'react-bootstrap';
import { Checkbox } from 'antd'
import logo from '../images/rivita-logo.png';
import vision from '../images/vision.png';
import mission from '../images/004-mission.png'
import purpose from '../images/006-purpose.png'
import '../styles/Home.css'

// ABOUT SECTION STYLES

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

//about Button
const aboutFormButton = {
    padding: '10px 40px',
    color: 'white',
    backgroundColor: '#5F1508',
    fontSize: '18px',
    marginTop: '10px',
    border: 'none',
    borderRadius: '8px',
    '&hover': {
        backgroundColor: 'white'
    }
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

// STYLING FOR ALL SECTION TITLES
const sectionTitleStyle = {
    fontFamily: 'Poppins, sans-serif',
    color: '#333',
    fontSize: '30xpx',
    fontWeight: '700'
}

// CARGO SECTION STYLE
const cargosTextStyle = {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '18px',
    color: '#777777',
    fontWeight: '500'
}


// CONTACT WITH IMAGE SECTION
const cargoPhotoTitle = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '45px',
    color: 'white'
}

const cargoPhotoText = {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '15px',
    fontWeight: '600',
    color: 'white'
}

const partnersTitlesStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '20px',
    color: '#333',
    fontWeight: '600',
    marginTop: '25px'
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

            <section className='container-fluid pt-5 pb-5' style={{ width: '80%' }}>

                <div className='row'>

                    <div className='col-sm-12  col-lg-6'>
                        <div className='container'>
                            <h2 style={{ ...sectionTitleStyle }}>Apie mus</h2>
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
                                <button style={{ ...aboutFormButton }}>Siųsti</button>
                            </Form>


                        </div>
                    </div>
                </div>
            </section>
            <section className='container-fluid pt-5 pb-5' style={{ width: '100%', backgroundColor: '#F7F7F7' }}>
                <div className='container' style={{ width: '80%' }}>
                    <div className='row pb-5'>
                        <h2 style={{ ...sectionTitleStyle }}>Paslaugos</h2>
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

            <section className='container-fluid pt-5 pb-5' style={{ width: '80%' }}>
                <div className='row pb-5'>
                    <h2 style={{ ...sectionTitleStyle }}>Kroviniai</h2>
                </div>
                <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-12 col-xl-6'>
                        <div className='container' style={{ width: '100%', paddingRight: '0', paddingLeft: '0px', paddingBottom: '20px' }}>
                            <Carousel>
                                <Carousel.Item interval={3000}>
                                    <img
                                        className="d-block w-100"
                                        src="http://www.rivita.lt/wp-content/uploads/2019/03/600-tie-down-load-out12.jpg"
                                        alt="First slide"
                                        style={{ height: '340px' }}
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                    <img
                                        className="d-block w-100"
                                        src="http://www.rivita.lt/wp-content/uploads/2019/03/jailcellload.jpg"
                                        alt="Second slide"
                                        style={{ height: '340px' }}
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-12 col-xl-6'>
                        <div className='container py-4 shadow'>
                            <div className='container'>
                                <h3 style={{ ...cargosTextStyle }}>
                                    <span>Skysti kroviniai cisterniniuose vagonuose;</span>
                                </h3>
                            </div>
                            <div className='container'>
                                <h3 style={{ ...cargosTextStyle }}>
                                    <span>Birūs  ir masiniai kroviniai universaliuose ir specializuotuosiuose vagonuose;</span>
                                </h3>
                            </div>
                            <div className='container'>
                                <h3 style={{ ...cargosTextStyle }}>
                                    <span>Kroviniai konteineriuose.</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container-fluid text-center' style={{ width: '100%', height: '410px', paddingLeft: '0', paddingRight: '0', backgroundImage: `url("http://www.rivita.lt/wp-content/uploads/2019/02/cta.png?id=843")`, backgroundSize: 'cover', overflow: 'hidden' }}>
                {/* <Image src='' style={{ ...contactImageStyle }}> */}
                <div className='row' style={{ height: '100%', position: 'relative' }}>
                    <div className='container' style={{
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                        <h3 style={{ ...cargoPhotoTitle }}><strong>REIKA PERVEŽTI KROVINĮ?</strong></h3>
                        <p style={{ ...cargoPhotoText }}>SUSISIEKITE SU MUMIS</p>
                        <Button variant="outline-light">UŽPILDYKITE UŽKLAUSOS FORMĄ</Button>
                    </div>
                </div>

            </section>

            <section className='container-fluid' style={{ width: '80%', height: '500px' }}>
                <div className='row pb-5 pt-5'>
                    <h2 style={{ ...sectionTitleStyle }}>Partneriai</h2>
                </div>
                <div className='container'>
                    <div className='row text-center'>
                        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                            <div className="container shadow">
                                <div className='container ' style={{ height: '195px', marginTop: '20px', width: '204px', padding: '0' }}>
                                    <Image style={{ width: '100%', height: '100%' }} src={'http://www.rivita.lt/wp-content/uploads/2019/02/gelezinkeliai.png'} alt="Lietuvos geležinkeliai" />
                                </div>

                            </div>
                            <h3 style={{ ...partnersTitlesStyle }}>AB „Lietuvos geležinkeliai“</h3>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                            <div className="container shadow">
                                <div className='container' style={{ height: '195px', width: '204px', marginTop: '20px', paddingTop: '40px', paddingBottom: '40px' }}>
                                    <Image style={{ width: '100%', height: '100%' }} src={'http://www.rivita.lt/wp-content/uploads/2019/02/ldzcargo1.png'} alt="LDZ CARGO" />
                                </div>
                            </div>
                            <h3 style={{ ...partnersTitlesStyle }}>SIA „LDZ CARGO“</h3>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                            <div className="container shadow">
                                <div className='container' style={{ height: '195px', width: '204px', marginTop: '20px', padding: '0',  paddingTop: '20px', paddingBottom: '20px' }}>
                                    <Image style={{ width: '100%', height: '100%' }} src={'http://www.rivita.lt/wp-content/uploads/2019/02/logo_bzhd.png'} alt="Baltarusijos geležinkeliai" />
                                </div>
                            </div>
                            <h3 style={{ ...partnersTitlesStyle }}>VĮ „Baltarusijos geležinkeliai“</h3>
                        </div>

                        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>

                            <div className="container shadow">
                                <div className='container' style={{ height: '195px', marginTop: '20px', width: '204px', padding: '10px' }}>
                                    <Image style={{ width: '100%', height: '100%' }} src={'http://www.rivita.lt/wp-content/uploads/2019/02/simvolika-1.jpg'} alt="Baltarusijos pasienio ir transporto Valstybinės veterinarinės priežiūros valdyba" />
                                </div>
                            </div>
                            <h3 style={{ ...partnersTitlesStyle }}>VĮ „Baltarusijos pasienio ir transporto Valstybinės veterinarinės priežiūros valdyba“</h3>
                        </div>

                    </div>
                </div>
            </section>
            <section className='container-fluid' style={{width: '80%', height: '450px', paddingTop: '50px'}}>
                    <div className='container'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.9415054990154!2d25.264413215888933!3d54.675457880279055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd946df73d5a7f%3A0xbd6c8ddff23db111!2s%C5%A0vitrigailos%20g.%2011%2C%20Vilnius%2003223!5e0!3m2!1slt!2slt!4v1637341318123!5m2!1slt!2slt" width="100%" height="400px" allowfullscreen="" loading="lazy"></iframe>
                    </div>
            </section>


        </>

    )
}

export default HomeScreen;