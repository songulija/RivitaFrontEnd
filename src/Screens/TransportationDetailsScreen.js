import React from 'react';
import { connect } from 'react-redux'
import HeaderMain from '../Component/HeaderMain';
import SystemFooter from '../Component/SystemFooter'
import { getTransportationDetails } from '../redux/actions/transportationsActions';
import { getWagonsByTransportation } from '../redux/actions/wagonsActions'
import { Table, Row, Col, Container,Button } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import moment from 'moment';
import { Typography, Table as TableAnt } from 'antd';

const { Text } = Typography;
class TransportationDetailsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Transportation: {},
            wagons: []
        }
    }
    componentDidMount() {
        if (this.props.usersReducer.currentUser !== null) {//if user info exist than means we already are logged in
            this.props.getTransportationDetails(this.props.match.params.id, () => {
                this.setState({
                    Transportation: this.props.transportationDeatailsReducer
                })
                this.props.getWagonsByTransportation(this.props.match.params.id, () => {
                    this.setState({
                        wagons: this.props.wagonsReducer
                    })
                });
            })
        } else {
            this.props.history.push('/login')
        }
    }

    render() {
        const columns = [
            {
                title: 'Transportavimo numeris',
                dataIndex: 'transportationId',
                width: '10%',
                render: (text, record, index) => (
                    <Text>{record.transportation.transportationNumber}</Text>
                )
            },
            {
                title: 'Vagono numeris',
                dataIndex: 'numberOfWagon',
                width: '20%'
            },
            {
                title: 'Vagono tipas',
                dataIndex: 'typeOfWagon',
                width: '20%'
            },
            {
                title: 'Svoris(tonomis)',
                dataIndex: 'weight',
                width: '20%'
            },
        ]
        return (
            <>
                <HeaderMain />
                <Container>
                    <h1>Transportavimas </h1>
                    <Link className='btn btn-dark mb-3' to={'/search'}>Grįžti atgal </Link>

                    {/* <p>{JSON.stringify(transportationDeatails)} labas</p> */}

                    <Row>
                        <Col md={4}>
                            <h3>Bendra informacija</h3>
                            <Table striped bordered hover size="sm">

                                <tbody>

                                    <tr>
                                        <td>Transportavimo numeris</td>
                                        <td>{this.state.Transportation.transportationNumber}</td>
                                    </tr>

                                    <tr>
                                        <td>Svoris</td>
                                        <td>{this.state.Transportation.weight}</td>
                                    </tr>
                                    <tr>
                                        <td>Vagonų skaičius</td>
                                        <td>{this.state.Transportation.wagonsCount}</td>
                                    </tr>
                                    <tr>
                                        <td>Transportavimo tipas</td>
                                        <td>{this.state.Transportation.transportationType}</td>
                                    </tr>

                                </tbody>
                            </Table>
                        </Col>
                        <Col md={4}>
                            <h3>Informacija apie datas</h3>
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>

                                        <td>Krovinio priėmimo data</td>
                                        <td>{moment(this.state.Transportation.cargoAcceptanceDate).format("YYYY/MM/DD")}</td>

                                    </tr>
                                    <tr>

                                        <td>Judėjimo pradžios data Baltarusijoje</td>
                                        <td>{moment(this.state.Transportation.movementStartDateInBelarus).format("YYYY/MM/DD")}</td>

                                    </tr>
                                    <tr>
                                        <td>Judėjimo pabaigos data Baltarusijoje</td>
                                        <td>{moment(this.state.Transportation.movementEndDateInBelarus).format("YYYY/MM/DD")}</td>


                                    </tr>
                                </tbody>
                            </Table>
                        </Col>

                        <Col md={4}>
                            <h3>Informacija apie krovinį</h3>
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>

                                        <td>ETSNG krovinio kodas</td>
                                        <td>{this.state.Transportation.etsngCargoCode}</td>

                                    </tr>
                                    <tr>
                                        <td>GNG krovinio kodas</td>
                                        <td>{this.state.Transportation.gngCargoCode}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col md={6}>
                            <h3>Informacija apie stotis</h3>
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>

                                        <td>Išvykimo stoties pavadinimas</td>
                                        <td>{this.state.Transportation.departureStationTitle}</td>

                                    </tr>
                                    <tr>
                                        <td>Išvykimo šalies pavadinimas</td>
                                        <td>{this.state.Transportation.departureCountryTitle}</td>
                                    </tr>
                                    <tr>
                                        <td>Paskirties stoties pavadinimas</td>
                                        <td>{this.state.Transportation.destinationStationTitle}</td>
                                    </tr>
                                    <tr>
                                        <td>Paskirties šalies pavadinimas</td>
                                        <td>{this.state.Transportation.destinationCountryTitle}</td>
                                    </tr>
                                    <tr>
                                        <td>Judėjimo pradžios stoties pavadinimas (Baltarusijoje)</td>
                                        <td>{this.state.Transportation.stationMovementBeginingBelarusTitle}</td>
                                    </tr>
                                    <tr>
                                        <td>Judėjimo pabaigos stoties pavadinimas (Baltarusijoje)</td>
                                        <td>{this.state.Transportation.stationMovementEndBelarusTitle}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <h3>Vagonai</h3>
                        <Col md={12}>
                            <TableAnt
                                rowKey="id"
                                columns={columns}
                                dataSource={this.state.wagons}
                                pagination={{ pageSize: 15 }}
                                bordered
                                scroll={{ x: 'calc(700px + 50%)' }}
                            />
                        </Col>
                    </Row>
                </Container>
                <SystemFooter />

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        usersReducer: state.usersReducer,
        transportationDeatailsReducer: state.transportationDeatailsReducer.transportation,
        wagonsReducer: state.wagonsReducer.wagons
    }
}

export default connect(mapStateToProps, { getTransportationDetails, getWagonsByTransportation })(withRouter(TransportationDetailsScreen));