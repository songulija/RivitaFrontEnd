import React from 'react';
import { connect } from 'react-redux';
import { getTransportations, createTransportation, updateTransportation } from '../redux/actions/transportationsActions.js';
import { buttonStyle } from '../styles/customStyles';
import { getWagons } from '../redux/actions/wagonsActions';
import { Col, Table, Row, Space, Typography, Button } from 'antd';
// import { Button } from 'react-bootstrap'
import { PlusOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import AddTransportationComponent from '../Component/transportations_components/AddTransportationComponent';
import moment from 'moment'
import UpdateTransportationComponent from '../Component/transportations_components/UpdateTransportationComponent.js';
import HeaderMain from '../Component/HeaderMain.js';


const aboutTitleTextStyle = {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    marginBottom: '16px',
}

const textStyle = {
    fontSize: '14px',
    color: '#8C8C8C',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '22px',
    marginRight: '40px',
}


class AdminTransportationScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transportations: [],
            originalTransportations: [],
            addPanelVisibility: false,
            updateTransportation: {
                visibility: false,
                record: null
            }
        }
    }

    showTransportationAddPanel = () => {
        this.setState({
            addPanelVisibility: true
        });
    }

    //FOR AddTransportationComponent
    unshowTransportationAddPanel = () => {
        this.setState({
            addPanelVisibility: false
        });
    }

    wagonsAddScreen = (id) => {
        this.props.history.push(`/wagons/${id}`)
    }

    addTransportation = (postObj) => {
        //dispatching addTransporation action action
        this.props.createTransportation(postObj, () => {
            this.transportationsDataSet(this.props.transportationsReducer.transportations);
        });
    }

    // FOR UpdateTransportationComponent
    showUpdateTransportationModal = (record) => {
        const obj = {
            visibility: true,
            record: record
        }
        this.setState({
            updateTransportation: obj
        });
    }
    unshowUpdateTransportationModal = () => {
        const obj = {
            visibility: false,
            record: null
        }
        this.setState({
            updateTransportation: obj
        })
    }
    saveUpdateTransportation = (postObj, reducerObj) => {
        this.props.updateTransportation(postObj, reducerObj, () => {
            //get clone of changed transportations redux state
            const transportationsClone = JSON.parse(JSON.stringify(this.props.transportationsReducer.transportations));
            this.transportationsDataSet(transportationsClone);
            this.unshowUpdateTransportationModal();
        });
    }



    transportationsDataSet = (transportationsArray) => {
        const transportationsClone = JSON.parse(JSON.stringify(transportationsArray));
        //removing time from data that we get
        transportationsClone.map((element) => {
            //for each element in array change dates
            let date1 = moment(element.cargoAcceptanceDate).format("YYYY/MM/DD");
            let date2 = moment(element.movementStartDateInBelarus).format("YYYY/MM/DD");
            let date3 = moment(element.movementEndDateInBelarus).format("YYYY/MM/DD");
            element.cargoAcceptanceDate = date1;
            element.movementStartDateInBelarus = date2;
            element.movementEndDateInBelarus = date3;
        });
        this.setState({
            transportations: transportationsClone,
            originalTransportations: transportationsClone
        });
    }
    componentDidMount() {
        if (this.props.usersReducer.currentUser !== null && this.props.userInfoReducer.role === 'Administrator') {
            this.props.getTransportations(() => {
                this.transportationsDataSet(this.props.transportationsReducer.transportations);
            });
        } else {
            this.props.history.push('/');
        }
    }


    render() {
        const columns = [
            {
                title: 'Atnaujinimas',
                width: '5%',
                render: (value, record, index) => (
                    <Button onClick={(e) => this.showUpdateTransportationModal(record)}>Atnaujinti</Button>
                )
            },
            {
                title: 'Pridėti vagonų',
                width: '3%',
                render: (text, record, index) => (
                    <Button onClick={(e) => this.wagonsAddScreen(record.id)}>Pridėti</Button>
                )
            },
            {
                title: 'Transportavimo numeris',
                dataIndex: 'transportationNumber',
                width: '5%'
            },
            {
                title: 'Svoris',
                dataIndex: 'weight',
                width: '5%'
            },
            {
                title: 'Vagonų skaičius',
                dataIndex: 'wagonsCount',
                width: '5%'
            },
            {
                title: 'Statusas',
                dataIndex: 'transportationStatus',
                width: '5%'
            },
            {
                title: 'Transportavimo tipas',
                dataIndex: 'transportationType',
                width: '5%'
            },
            {
                title: 'Subkodas',
                dataIndex: 'transportationSubCode',
                width: '5%'
            },
            {
                title: 'Krovinio priėmimo data',
                dataIndex: 'cargoAcceptanceDate',
                width: '30%',
                sorter: (a, b) => {
                    if (moment(a.Created).isBefore(moment(b.Created))) {
                        return -1;
                    }
                    return 1;
                }
            },
            {
                title: 'Judėjimo pradžios data Baltarusijoje',
                dataIndex: 'movementStartDateInBelarus',
                width: '5%',
                sorter: (a, b) => {
                    if (moment(a.Created).isBefore(moment(b.Created))) {
                        return -1;
                    }
                    return 1;
                }
            },
            {
                title: 'Judėjimo pabaigos data Baltarusijoje',
                dataIndex: 'movementEndDateInBelarus',
                width: '5%',
                sorter: (a, b) => {
                    if (moment(a.Created).isBefore(moment(b.Created))) {
                        return -1;
                    }
                    return 1;
                }
            },
            {
                title: 'ETSNG krovinio kodas',
                dataIndex: 'etsngCargoCode',
                width: '5%'
            },
            {
                title: 'ETSNG krovinio pavadinimas',
                dataIndex: 'etsngCargoTitle',
                width: '5%'
            },
            {
                title: 'GNG krovinio kodas',
                dataIndex: 'gngCargoCode',
                width: '5%'
            },
            {
                title: 'GNG krovinio pavadinimas',
                dataIndex: 'gngCargoTitle',
                width: '5%'
            },
            {
                title: 'Išvykimo stoties kodas',
                dataIndex: 'departureStationCode',
                width: '5%'
            },
            {
                title: 'Išvykimo stoties pavadinimas',
                dataIndex: 'departureStationTitle',
                width: '5%'
            },
            {
                title: 'Išvykimo šalies kodas',
                dataIndex: 'departureCountryCode',
                width: '5%'
            },
            {
                title: 'Išvykimo šalies pavadinimas',
                dataIndex: 'departureCountryTitle',
                width: '5%'
            },
            {
                title: 'Paskirties stoties kodas',
                dataIndex: 'destinationStationCode',
                width: '5%'
            },
            {
                title: 'Paskirties stoties pavadinimas',
                dataIndex: 'destinationStationTitle',
                width: '5%'
            },
            {
                title: 'Paskirties šalies kodas',
                dataIndex: 'destinationCountryCode',
                width: '5%'
            },
            {
                title: 'Paskirties šalies pavadinimas',
                dataIndex: 'destinationCountryTitle',
                width: '5%'
            },
            {
                title: 'Judėjimo pradžios stoties kodas (Baltarusijoje)',
                dataIndex: 'stationMovementBeginingBelarusCode',
                width: '5%'
            },
            {
                title: 'Judėjimo pradžios stoties pavadinimas (Baltarusijoje)',
                dataIndex: 'stationMovementBeginingBelarusTitle',
                width: '5%'
            },
            {
                title: 'Judėjimo pabaigos stoties kodas (Baltarusijoje)',
                dataIndex: 'stationMovementEndBelarusCode',
                width: '5%'
            },
            {
                title: 'Judėjimo pabaigos stoties pavadinimas (Baltarusijoje)',
                dataIndex: 'stationMovementEndBelarusTitle',
                width: '5%'
            },
        ]
        return (
            <>
                <HeaderMain />
                {/* column has 100 percent if span 24 */}
                <div style={{ marginTop: 45, marginBottom: 45 }}>
                    <Col span={24} offset={1}>
                        <Row gutter={16}>
                            <Col span={18}>
                                <div style={{ marginRight: '40px', marginBottom: 25 }}>
                                    <Typography.Title style={{ ...aboutTitleTextStyle }}>Transportavimas</Typography.Title>
                                    <Typography.Text style={{ ...textStyle }}>
                                        Pridėkite naujus transportavimus ir priskirti prie kiekvieno transportavimo vagonus.
                                        Taip pat galite atnaujinti kiekvienos transportavimo duomenis kai reikia.
                                    </Typography.Text>
                                </div>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={23}>

                                <Table
                                    rowKey="id"
                                    columns={columns}
                                    dataSource={this.state.transportations}
                                    pagination={{ pageSize: 15 }}
                                    bordered
                                    scroll={{ x: 'calc(700px + 50%)' }}
                                // footer={() => (<Space style={{ display: 'flex', justifyContent: 'space-between' }}><Button size="large" style={{ ...buttonStyle }} onClick={this.onOpenAddCompany()}><PlusOutlined />Pridėti kompaniją</Button></Space>)}
                                />
                                <Space style={{ display: 'flex', justifyContent: 'space-between' }}><Button size="large" style={{ ...buttonStyle }} onClick={this.showTransportationAddPanel}><PlusOutlined />Pridėti transportaciją</Button></Space>

                            </Col>
                        </Row>
                    </Col>
                    {this.state.addPanelVisibility !== false ?
                        <AddTransportationComponent visible={this.state.addPanelVisibility} onClose={this.unshowTransportationAddPanel}
                            save={this.addTransportation} />
                        : null}
                    {this.state.updateTransportation.visibility !== false ?
                        <UpdateTransportationComponent visible={this.state.updateTransportation.visibility} save={this.saveUpdateTransportation}
                            onClose={this.unshowUpdateTransportationModal} record={this.state.updateTransportation.record} />
                        : null}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        usersReducer: state.usersReducer,
        userInfoReducer: state.userInfoReducer,
        transportationsReducer: state.transportationsReducer,
        wagonsReducer: state.wagonsReducer
    }
}

export default connect(mapStateToProps, { getTransportations, getWagons, createTransportation, updateTransportation })(withRouter(AdminTransportationScreen))