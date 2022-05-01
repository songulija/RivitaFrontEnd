import React from 'react'
import { footerStyle, footerTitle, footerListElementsStyle } from '../styles/footerStyles.js'
import { titleLineStyle } from '../styles/homeScreenStyles.js'
import { useTranslation } from "react-i18next";

function Footer(props) {
    const { t } = useTranslation();
    return (
        <>
            <section className='container-fluid' style={{ ...footerStyle }}>
                <div className='container text-sm-left' style={{ width: '80%', padding: '30px' }}>
                    <div className='row' >
                        <div className='col-sm-12 col-md-6 pb-2'>
                            <h5 className="font-weight-bold text-uppercase mb-4" style={{ ...footerTitle }}> {t("footer_first_title")}</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <p>
                                        <i className="fas fa-map-pin"></i>  {t("contacts_adress_text")}</p>
                                </li>
                                <li>
                                    <p>
                                        <i className="fas fa-envelope-open-text"></i>  {t("contacts_email_text")}</p>
                                </li>
                                <li>
                                    <p>
                                        <i className="fas fa-phone"></i> {t("contacts_phone_text")}</p>
                                </li>
                                <li>
                                    <p>
                                        <i className="fas fa-phone"></i> {t("footer_second_phone")}</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-sm-12 col-md-6 pb-2'>
                            <h3 style={{ ...footerTitle }}>{t("footer_second_title")}</h3>
                            <hr style={{ ...titleLineStyle }}></hr>
                            <ul className="list-unstyled" >
                                {/* <li style={{ ...footerListElementsStyle }}>Krovinių ekspedijavimas geležinkelių transportu</li>
                                    <li style={{ ...footerListElementsStyle }}>Krovinio judėjimo kontrolė</li>
                                    <li style={{ ...footerListElementsStyle }}>Pasienio ir transporto veterinarinės priežiūros tarnybų teikiamų paslaugų organizavimas</li>
                                    <li style={{ ...footerListElementsStyle }}>Konsultacijos krovinių vežimo klausimais</li> */}
                                <li style={{ ...footerListElementsStyle }}>
                                    <a style={{ color: 'white' }} href="#!">{t("footer_second_about")}</a>
                                </li>
                                <li style={{ ...footerListElementsStyle }}>
                                    <a style={{ color: 'white' }} href="#!">{t("footer_second_services")}</a>
                                </li>
                                <li style={{ ...footerListElementsStyle }}>
                                    <a style={{ color: 'white' }} href="#!">{t("footer_second_cargos")}</a>
                                </li>
                                <li style={{ ...footerListElementsStyle }}>
                                    <a style={{ color: 'white' }} href="#!">{t("footer_second_partners")}</a>
                                </li>
                                <li style={{ ...footerListElementsStyle }}>
                                    <a style={{ color: 'white' }} href="#!">{t("footer_second_contacts")}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr style={{ color: '#D1DBDD', opacity: '0.2' }}></hr>
                    <div className='row'>
                        <div className='col-sm-12 col-md-6'>
                            <p className="copyright">{t("footer_last_title")}</p>
                        </div>
                        <div className='col-sm-12 col-md-6'>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;