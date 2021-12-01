import React from 'react';
import { connect } from 'react-redux'
import HeaderMain from '../Component/HeaderMain';
import SystemFooter from '../Component/SystemFooter'
import { getTransportationDetails } from '../redux/actions/transportationsActions';
import { getWagonsByTransportation } from '../redux/actions/wagonsActions'
import { Table, Row, Col, Container } from 'react-bootstrap'
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

                console.log(this.props.match.params.id)
                console.log(this.props.transportationDeatailsReducer)

            })
            console.log(JSON.stringify(this.state.Transportation));
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
                title: 'Keliamoji galia(tonomis)',
                dataIndex: 'liftingCapacityTons',
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
                    <Link className='btn btn-dark mb-3' to={'/'}>grizti atgal </Link>

                    {/* <p>{JSON.stringify(transportationDeatails)} labas</p> */}

                    <Row>
                        <Col md={4}>
                            <Table striped bordered hover size="sm">

                                <tbody>

                                    <tr>
                                        <td>Transporto numeris</td>
                                        <td>{this.state.Transportation.transportationNumber}</td>
                                    </tr>

                                    <tr>
                                        <td>Svorio</td>
                                        <td>{this.state.Transportation.weight}</td>
                                    </tr>
                                    <tr>
                                        <td>Vagonų skaičius</td>
                                        <td>{this.state.Transportation.wagonsCount}</td>
                                    </tr>
                                    <tr>
                                        <td>Transportavimo būsena</td>
                                        <td>{this.state.Transportation.transportationStatus}</td>
                                    </tr>
                                    <tr>
                                        <td>Transportavimo tipas</td>
                                        <td>{this.state.Transportation.transportationType}</td>
                                    </tr>
                                    <tr>
                                        <td>Transporto subkodas</td>
                                        <td>{this.state.Transportation.transportationSubCode}</td>
                                    </tr>

                                </tbody>
                            </Table>
                        </Col>
                        <Col md={4}>
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>

                                        <td>krovinio priėmimo data</td>
                                        <td>{moment(this.state.Transportation.cargoAcceptanceDate).format("YYYY/MM/DD")}</td>

                                    </tr>
                                    <tr>

                                        <td>Judėjimo pradžios data Baltarusijoje</td>
                                        <td>{moment(this.state.Transportation.movementStartDateInBelarus).format("YYYY/MM/DD")}</td>

                                    </tr>
                                    <tr>
                                        <td>Judėjimas Pabaigos data Baltarusijoje</td>
                                        <td>{moment(this.state.Transportation.movementEndDateInBelarus).format("YYYY/MM/DD")}</td>


                                    </tr>
                                </tbody>
                            </Table>
                        </Col>

                        <Col md={4}>
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>

                                        <td>Etang krovinio kodas</td>
                                        <td>{this.state.Transportation.etsngCargoCode}</td>

                                    </tr>
                                    <tr>

                                        <td>Etang krovinio titulas</td>
                                        <td>{this.state.Transportation.etsngCargoTitle}</td>

                                    </tr>
                                    <tr>
                                        <td>Gng krovinio kodas</td>
                                        <td>{this.state.Transportation.gngCargoCode}</td>
                                    </tr>
                                    <tr>
                                        <td>Gng krovinio titulas</td>
                                        <td>{this.state.Transportation.gngCargoTitle}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col md={6}>
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>

                                        <td>Išvykimo stoties kodas</td>
                                        <td>{this.state.Transportation.departureStationCode}</td>

                                    </tr>
                                    <tr>

                                        <td>išvykimo Stoties pavadinimas</td>
                                        <td>{this.state.Transportation.departureStationTitle}</td>

                                    </tr>
                                    <tr>
                                        <td>išvykimo šalies kodas</td>
                                        <td>{this.state.Transportation.departureCountryCode}</td>
                                    </tr>
                                    <tr>
                                        <td>išvykimo šalies pavadinimas</td>
                                        <td>{this.state.Transportation.departureCountryTitle}</td>
                                    </tr>
                                    <tr>
                                        <td>paskirties stoties kodas</td>
                                        <td>{this.state.Transportation.destinationStationCode}</td>
                                    </tr>
                                    <tr>
                                        <td>paskirties Stoties pavadinimas</td>
                                        <td>{this.state.Transportation.destinationStationTitle}</td>
                                    </tr>
                                    <tr>
                                        <td>paskirties šalies kodas</td>
                                        <td>{this.state.Transportation.destinationCountryCode}</td>
                                    </tr>
                                    <tr>
                                        <td>paskirties šalies pavadinimas</td>
                                        <td>{this.state.Transportation.destinationCountryTitle}</td>
                                    </tr>
                                    <tr>
                                        <td>stoties judėjimo pradžios Baltarusijos kodeksas</td>
                                        <td>{this.state.Transportation.stationMovementBeginingBelarusCode}</td>
                                    </tr>
                                    <tr>
                                        <td>stoties Judėjimo pradžia Baltarusija Pavadinimas</td>
                                        <td>{this.state.Transportation.stationMovementBeginingBelarusTitle}</td>
                                    </tr>
                                    <tr>
                                        <td>stotis Judėjimo pabaiga Baltarusijos kodas</td>
                                        <td>{this.state.Transportation.stationMovementEndBelarusCode}</td>
                                    </tr>
                                    <tr>
                                        <td>Stotis Judėjimas Pabaiga Baltarusija Pavadinimas</td>
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