import React from 'react'
import { Form, Button, Carousel, Image } from 'react-bootstrap';
import { Checkbox } from 'antd'

import vision from '../images/009-vision.png';
import mission from '../images/004-mission.png'
import purpose from '../images/006-purpose.png'
import wagon1 from '../images/wagons-1.jpg'
import wagon2 from '../images/wagons-4.jpg'
import wagon3 from '../images/wagons-3.png'
import gelezinkeliai from '../images/lietuvos_gelezinkeliai.jpg';
import ldzcargo from '../images/ldzcargo1.png';
import logo_bzhd from '../images/logo_bzhd.png';
import simvolika from '../images/simvolika-1.jpg';
import '../styles/Home.css'
import {
    aboutTextStyle, aboutParagraphsTitlesStyles, aboutParagraphsTextStyles, serviceSectionStyle,
    serviceText, serviceTitleStyle, sectionTitleStyle, cargosTextStyle, cargoPhotoTitle, cargoPhotoText, partnersTitlesStyle,
    contactsInfoTitle, contactsInfoText, titleLineStyle
} from '../styles/homeScreenStyles'
import Footer from '../Component/Footer';
import HeaderHome from '../Component/HeaderHome';
import { useTranslation } from "react-i18next";

const HomeScreen = () => {
    const { t } = useTranslation();
    return (
        <>

            <div className='header-img' >
                {/* <Image src={mainPhoto} /> */}
                <HeaderHome />
                <div className='main2'>
                    <div className='header-content' style={{ height: '100%', width: '100%' }}>
                        <h3>{t("main_title")}</h3>
                        <h1 style={{ fontWeight: 'bold', color: '#516C71' }}>{t("main_subtitle")}</h1>
                    </div>
                </div>
            </div>
            <section className='container-fluid pt-5 pb-5' style={{ width: '80%' }}>
                <div className='row' name="about">
                    <div className='col-sm-12  col-lg-6'>
                        <div className='container'>
                            <h2 style={{ ...sectionTitleStyle }}>{t("about_title")}</h2>
                            <hr style={{ ...titleLineStyle }}></hr>
                            <div>
                                <div><p style={{ ...aboutTextStyle }}>{t("about_main_text")}</p>
                                </div>
                            </div>
                        </div>

                        {/* misija, vizija, tikslai */}
                        <div className='container pt-4' style={{ paddingLeft: 0 }}>
                            <div className='container'>
                                <div className="row">
                                    <div className="col-sm-2 col-md-2 col-lg-3 col-xl-2 about-us-hover">
                                        <img src={mission} alt='Vision' />
                                    </div>
                                    <div className="col-sm-12 col-md-10 col-lg-9 col-xl-10 pt-3">
                                        <h3 style={{ ...aboutParagraphsTitlesStyles }}>{t("about_mission_title")}</h3>
                                        <div><p style={{ ...aboutParagraphsTextStyles }}>{t("about_mission_text")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='container'>
                                <div className="row">
                                    <div className="col-sm-2 col-md-2 col-lg-3 col-xl-2 about-us-hover">
                                        <img src={vision} alt='Vision' />
                                    </div>
                                    <div className="col-sm-12 col-md-10 col-lg-9 col-xl-10 pt-3">
                                        <h3 style={{ ...aboutParagraphsTitlesStyles }}>{t("about_vission_title")}:</h3>
                                        <div><p style={{ ...aboutParagraphsTextStyles }}>{t("about_vission_text")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='container'>
                                <div className="row">
                                    <div className="col-sm-2 col-md-2 col-lg-3 col-xl-2 about-us-hover">
                                        <img src={purpose} alt='Vision' />
                                    </div>
                                    <div className="col-sm-12 col-md-10 col-lg-9 col-xl-10 pt-3">
                                        <h3 style={{ ...aboutParagraphsTitlesStyles }}>{t("about_goals_title")}</h3>
                                        <div><p style={{ ...aboutParagraphsTextStyles }}>{t("about_goals_text")}</p>
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
                                    <Form.Label>{t("form_name")}</Form.Label>
                                    <Form.Control type="text" placeholder={t("form_name_placeholder")} />
                                    <Form.Label>{t("form_mail")}</Form.Label>
                                    <Form.Control type="text" placeholder={t("form_mail_placeholder")} />
                                    <Form.Label>{t("form_topic")}</Form.Label>
                                    <Form.Control type="text" placeholder={t("form_topic_placeholder")} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>{t("form_message")}</Form.Label>
                                    <Form.Control as="textarea" rows={3} style={{ height: '250px' }} placeholder={t("form_message_placeholder")} />
                                </Form.Group>
                                <Checkbox>{t("form_politics")}</Checkbox>
                                <br />
                                <button className='about-us-button'>{t("form_submit")}</button>
                            </Form>


                        </div>
                    </div>
                </div>
            </section>
            <section className='container-fluid pt-5 pb-5' style={{ ...serviceSectionStyle }} name='paslaugos'>
                <div className='container' style={{ width: '80%' }}>
                    <div className='row pb-5'>
                        <h2 style={{ ...serviceTitleStyle }}>{t("services_title")}</h2>
                        <hr style={{ ...titleLineStyle }}></hr>
                    </div>

                    <div className='row'>
                        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3 pb-5'>
                            <div className='container text-center '>
                                <div className='container text-center service-container-style' >
                                    <i className="fas fa-train service-icons-style" ></i>
                                </div>
                                <p style={{ ...serviceText }}>{t("services_first")}</p>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3 pb-5'>
                            <div className='container text-center'>
                                <div className='container text-center  center service-container-style'>
                                    <i className="fas fa-globe-europe service-icons-style"></i>
                                </div>
                                <p style={{ ...serviceText }}>{t("services_second")}</p>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                            <div className='container text-center'>
                                <div className='container text-center  center service-container-style'>
                                    <i className="fas fa-file-contract service-icons-style"></i>
                                </div>
                                <p style={{ ...serviceText }}>{t("services_third")}</p>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                            <div className='container text-center'>
                                <div className='container text-center center service-container-style'>
                                    <i className="fas fa-phone service-icons-style"></i>
                                </div>
                                <p style={{ ...serviceText }}>{t("services_fourth")}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className='container-fluid pt-5 pb-5' style={{ width: '80%' }} name='kroviniai'>
                <div className='row pb-5'>
                    <h2 style={{ ...sectionTitleStyle }}>{t("cargos_title")}</h2>
                    <hr style={{ ...titleLineStyle }}></hr>
                </div>
                <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-12 col-xl-6'>
                        <div className='container' style={{ width: '100%', paddingRight: '0', paddingLeft: '0px', paddingBottom: '20px' }}>
                            <Carousel>
                                <Carousel.Item interval={3000}>
                                    <img
                                        className="d-block w-100"
                                        src={wagon1}
                                        alt="First slide"
                                        style={{ height: '360px' }}
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                    <img
                                        className="d-block w-100"
                                        src={wagon3}
                                        alt="Second slide"
                                        style={{ height: '360px' }}
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                    <img
                                        className="d-block w-100"
                                        src={wagon2}
                                        alt="Second slide"
                                        style={{ height: '360px' }}
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-12 col-xl-6'>
                        <div className='container py-4 shadow'>
                            <div className='container'>
                                <h3 style={{ ...cargosTextStyle }}>
                                    <span>{t("cargos_text_first")}</span>
                                </h3>
                            </div>
                            <div className='container'>
                                <h3 style={{ ...cargosTextStyle }}>
                                    <span>{t("cargos_text_second")}</span>
                                </h3>
                            </div>
                            <div className='container'>
                                <h3 style={{ ...cargosTextStyle }}>
                                    <span>{t("cargos_text_third")}</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container-fluid text-center kroviniai'>
                <div className='row' style={{ height: '410px', position: 'relative' }}>
                    <div className='container' style={{
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                        <h3 style={{ ...cargoPhotoTitle }}><strong>{t("reikia_title")}</strong></h3>
                        <p style={{ ...cargoPhotoText }}>{t("reikia_second")}</p>
                        <Button variant="outline-light">{t("reikia_third")}</Button>
                    </div>
                </div>

            </section>

            <section className='container-fluid' style={{ width: '80%' }}>
                <div className='row pb-5 pt-5'>
                    <h2 style={{ ...sectionTitleStyle }}>{t("partners_title")}</h2>
                    <hr style={{ ...titleLineStyle }}></hr>
                </div>
                <div className='container'>
                    <div className='row text-center'>
                        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                            <div className="container  partners-hover">
                                <div className='container ' style={{ height: '195px', width: '204px', marginTop: '20px', paddingTop: '75px', paddingBottom: '75px' }} >
                                    <Image style={{ width: '100%', height: '100%' }} src={gelezinkeliai} alt="Lietuvos geležinkeliai" />
                                </div>

                            </div>
                            <h3 style={{ ...partnersTitlesStyle }}>{t("partners_gelez")}</h3>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                            <div className="container partners-hover">
                                <div className='container' style={{ height: '195px', width: '204px', marginTop: '20px', paddingTop: '60px', paddingBottom: '60px' }}>
                                    <Image style={{ width: '100%', height: '100%' }} src={ldzcargo} alt="LDZ CARGO" />
                                </div>
                            </div>
                            <h3 style={{ ...partnersTitlesStyle }}>{t("partners_ldz")}</h3>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                            <div className="container partners-hover">
                                <div className='container' style={{ height: '195px', width: '204px', marginTop: '20px', padding: '0', paddingTop: '40px', paddingBottom: '40px' }}>
                                    <Image style={{ width: '100%', height: '100%' }} src={logo_bzhd} alt="Baltarusijos geležinkeliai" />
                                </div>
                            </div>
                            <h3 style={{ ...partnersTitlesStyle }}>{t("partners_bel_gel")}</h3>
                        </div>

                        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>

                            <div className="container partners-hover">
                                <div className='container' style={{ height: '195px', marginTop: '20px', width: '204px', padding: '40px' }}>
                                    <Image style={{ width: '100%', height: '100%' }} src={simvolika} alt="Baltarusijos pasienio ir transporto Valstybinės veterinarinės priežiūros valdyba" />
                                </div>
                            </div>
                            <h3 style={{ ...partnersTitlesStyle }}>{t("partners_balt")}</h3>
                        </div>

                    </div>
                </div>
            </section>
            <section className='container-fluid' style={{ width: '80%', paddingTop: '20px' }} name='kontaktai'>
                <div className='row pb-5 pt-5'>
                    <h2 style={{ ...sectionTitleStyle }}>{t("contact_title")}</h2>
                    <hr style={{ ...titleLineStyle }}></hr>
                </div>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 py-4'>
                        <div className='container contacts-hover'>
                            <div className='row'>
                                <div className='col-sm-12 col-md-2 '>
                                    <i className="fas fa-map-pin contacts-info-icons-style"></i>
                                </div>
                                <div className='col-sm-12 col-md-10'>
                                    <h3 style={{ ...contactsInfoTitle }}>{t("contacts_adress_title")}</h3>
                                    <p style={{ ...contactsInfoText }}>{t("contacts_adress_text")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 py-4'>
                        <div className='container contacts-hover'>
                            <div className='row'>
                                <div className='col-sm-12 col-md-3 col-lg-2'>
                                    <i className="fas fa-phone contacts-info-icons-style"></i>
                                </div>
                                <div className='col-sm-12 col-md-9 col-lg-10'>
                                    <h3 style={{ ...contactsInfoTitle }}>{t("contacts_phone_title")}</h3>
                                    <p style={{ ...contactsInfoText }}>{t("contacts_phone_text")}</p>
                                    <p style={{ ...contactsInfoText }}>{t("footer_second_phone")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 py-4'>
                        <div className='container contacts-hover'>
                            <div className='row'>
                                <div className='col-sm-12 col-md-2'>
                                    <i className="fas fa-info contacts-info-icons-style"></i>
                                </div>
                                <div className='col-sm-12 col-md-10'>
                                    <h3 style={{ ...contactsInfoTitle }}>{t("contacts_info_title")}:</h3>
                                    <p style={{ ...contactsInfoText }}>{t("contacts_info_code")}</p>
                                    <p style={{ ...contactsInfoText }}>{t("contacts_info_pvm")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 py-4'>
                        <div className='container contacts-hover'>
                            <div className='row'>
                                <div className='col-sm-12 col-md-3 col-lg-2'>
                                    <i className="fas fa-envelope-open-text contacts-info-icons-style"></i>
                                </div>
                                <div className='col-sm-12 col-md-9 col-lg-10'>
                                    <h3 style={{ ...contactsInfoTitle }}>{t("contacts_email_title")}</h3>
                                    <p style={{ ...contactsInfoText }}>{t("contacts_email_text")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className='container-fluid' style={{ width: '95%', paddingTop: '20px', paddingBottom: '40px' }}>
                <div className='container'>
                    <iframe title="Rivita lokacija" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.9415054990154!2d25.264413215888933!3d54.675457880279055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd946df73d5a7f%3A0xbd6c8ddff23db111!2s%C5%A0vitrigailos%20g.%2011%2C%20Vilnius%2003223!5e0!3m2!1slt!2slt!4v1637341318123!5m2!1slt!2slt" width="100%" height="400px" allowFullScreen="" loading="lazy"></iframe>
                </div>
            </section>

            <Footer />

        </>

    )
}

export default HomeScreen;