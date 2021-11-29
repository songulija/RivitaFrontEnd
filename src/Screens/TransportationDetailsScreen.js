import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import HeaderMain from '../Component/HeaderMain';
import { getTransportationDetails } from '../redux/actions/transportationsActions';
import { Table, Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import moment from 'moment';

function TransportationDetailsScreen(props) {
    const [transportation, setTransportation] = useState({})
    const dispatch = useDispatch();
    const transportationDeatails = useSelector(state => state.transportationDeatailsReducer.transportation)
    const id = props.match.params.id;
    useEffect(() => {
        dispatch(getTransportationDetails(id, () => {
            setTransportation(transportationDeatails)
        }))

    }, [dispatch, id, transportation])


    return (
        <>
            <HeaderMain />
            <Container>
                <h1>Transportavimas</h1>
                <Link className='btn btn-dark mb-3' to={'/'}>grizti atgal </Link>

                {/* <p>{JSON.stringify(transportationDeatails)} labas</p> */}

                <Row>
                    <Col md={4}>
                        <Table striped bordered hover size="sm">

                            <tbody>

                                <tr>
                                    <td>Transporto numeris</td>
                                    <td>{transportation.transportationNumber}</td>
                                </tr>

                                <tr>
                                    <td>Svorio</td>
                                    <td>{transportation.weight}</td>
                                </tr>
                                <tr>
                                    <td>Vagonų skaičius</td>
                                    <td>{transportation.wagonsCount}</td>
                                </tr>
                                <tr>
                                    <td>Transportavimo būsena</td>
                                    <td>{transportation.transportationStatus}</td>
                                </tr>
                                <tr>
                                    <td>Transportavimo tipas</td>
                                    <td>{transportation.transportationType}</td>
                                </tr>
                                <tr>
                                    <td>Transporto subkodas</td>
                                    <td>{transportation.transportationSubCode}</td>
                                </tr>

                            </tbody>
                        </Table>
                    </Col>
                    <Col md={4}>
                        <Table striped bordered hover>
                            <tbody>
                                <tr>

                                    <td>krovinio priėmimo data</td>
                                    <td>{moment(transportation.cargoAcceptanceDate).format("YYYY/MM/DD")}</td>

                                </tr>
                                <tr>

                                    <td>Judėjimo pradžios data Baltarusijoje</td>
                                    <td>{moment(transportation.movementStartDateInBelarus).format("YYYY/MM/DD")}</td>

                                </tr>
                                <tr>
                                    <td>Judėjimas Pabaigos data Baltarusijoje</td>
                                    <td>{moment(transportation.movementEndDateInBelarus).format("YYYY/MM/DD")}</td>


                                </tr>
                            </tbody>
                        </Table>
                    </Col>

                    <Col md={4}>
                        <Table striped bordered hover>
                            <tbody>
                                <tr>

                                    <td>Etang krovinio kodas</td>
                                    <td>{transportation.etsngCargoCode}</td>

                                </tr>
                                <tr>

                                    <td>Etang krovinio titulas</td>
                                    <td>{transportation.etsngCargoTitle}</td>

                                </tr>
                                <tr>
                                    <td>Gng krovinio kodas</td>
                                    <td>{transportation.gngCargoCode}</td>
                                </tr>
                                <tr>
                                    <td>Gng krovinio titulas</td>
                                    <td>{transportation.gngCargoTitle}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col md={6}>
                        <Table striped bordered hover>
                            <tbody>
                                <tr>

                                    <td>Išvykimo stoties kodas</td>
                                    <td>{transportation.departureStationCode}</td>

                                </tr>
                                <tr>

                                    <td>išvykimo Stoties pavadinimas</td>
                                    <td>{transportation.departureStationTitle}</td>

                                </tr>
                                <tr>
                                    <td>išvykimo šalies kodas</td>
                                    <td>{transportation.departureCountryCode}</td>
                                </tr>
                                <tr>
                                    <td>išvykimo šalies pavadinimas</td>
                                    <td>{transportation.departureCountryTitle}</td>
                                </tr>
                                <tr>
                                    <td>paskirties stoties kodas</td>
                                    <td>{transportation.destinationStationCode}</td>
                                </tr>
                                <tr>
                                    <td>paskirties Stoties pavadinimas</td>
                                    <td>{transportation.destinationStationTitle}</td>
                                </tr>
                                <tr>
                                    <td>paskirties šalies kodas</td>
                                    <td>{transportation.destinationCountryCode}</td>
                                </tr>
                                <tr>
                                    <td>paskirties šalies pavadinimas</td>
                                    <td>{transportation.destinationCountryTitle}</td>
                                </tr>
                                <tr>
                                    <td>stoties judėjimo pradžios Baltarusijos kodeksas</td>
                                    <td>{transportation.stationMovementBeginingBelarusCode}</td>
                                </tr>
                                <tr>
                                    <td>stoties Judėjimo pradžia Baltarusija Pavadinimas</td>
                                    <td>{transportation.stationMovementBeginingBelarusTitle}</td>
                                </tr>
                                <tr>
                                    <td>stotis Judėjimo pabaiga Baltarusijos kodas</td>
                                    <td>{transportation.stationMovementEndBelarusCode}</td>
                                </tr>
                                <tr>
                                    <td>Stotis Judėjimas Pabaiga Baltarusija Pavadinimas</td>
                                    <td>{transportation.stationMovementEndBelarusTitle}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default TransportationDetailsScreen;