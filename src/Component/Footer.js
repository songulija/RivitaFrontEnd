import React from 'react'
import { footerStyle, footerTitle, footerListElementsStyle } from '../styles/footerStyles.js'
import { titleLineStyle } from '../styles/homeScreenStyles.js'
function Footer(props) {

    return (
        <>
            <section className='container-fluid' style={{ ...footerStyle }}>
                <div className='container text-sm-left' style={{ width: '80%', padding: '30px' }}>
                    <div className='row' >
                        <div className='col-sm-12 col-md-6 pb-2'>
                            <h5 className="font-weight-bold text-uppercase mb-4" style={{ ...footerTitle }}>Kontaktai</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <p>
                                        <i className="fas fa-map-pin"></i> Švitrigailos g.11A, LT-03228 Vilnius</p>
                                </li>
                                <li>
                                    <p>
                                        <i className="fas fa-envelope-open-text"></i> info@rivita.lt</p>
                                </li>
                                <li>
                                    <p>
                                        <i className="fas fa-phone"></i> +370 265 0264</p>
                                </li>
                                <li>
                                    <p>
                                        <i className="fas fa-phone"></i> +370 618 16214</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-sm-12 col-md-6 pb-2'>
                            <h3 style={{ ...footerTitle }}>PUSLAPIAI</h3>
                            <hr style={{ ...titleLineStyle }}></hr>
                            <ul className="list-unstyled" >
                                {/* <li style={{ ...footerListElementsStyle }}>Krovinių ekspedijavimas geležinkelių transportu</li>
                                    <li style={{ ...footerListElementsStyle }}>Krovinio judėjimo kontrolė</li>
                                    <li style={{ ...footerListElementsStyle }}>Pasienio ir transporto veterinarinės priežiūros tarnybų teikiamų paslaugų organizavimas</li>
                                    <li style={{ ...footerListElementsStyle }}>Konsultacijos krovinių vežimo klausimais</li> */}
                                <li style={{ ...footerListElementsStyle }}>
                                    <a style={{ color: 'white' }} href="#!">APIE MUS</a>
                                </li>
                                <li style={{ ...footerListElementsStyle }}>
                                    <a style={{ color: 'white' }} href="#!">PASLAUGOS</a>
                                </li>
                                <li style={{ ...footerListElementsStyle }}>
                                    <a style={{ color: 'white' }} href="#!">KROVINIAI</a>
                                </li>
                                <li style={{ ...footerListElementsStyle }}>
                                    <a style={{ color: 'white' }} href="#!">PARTNERIAI</a>
                                </li>
                                <li style={{ ...footerListElementsStyle }}>
                                    <a style={{ color: 'white' }} href="#!">KONTAKTINĖ INFORMACIJA</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr style={{ color: '#D1DBDD', opacity: '0.2' }}></hr>
                    <div className='row'>
                        <div className='col-sm-12 col-md-6'>
                            <p className="copyright">UAB "Rivita ir Ko" © 2021 Lukas Songulija & Abdelrahman Ahmed Ali Mohamed Elsayed</p>
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