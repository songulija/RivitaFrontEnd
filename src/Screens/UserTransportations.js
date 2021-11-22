import React from 'react'
import { connect } from 'react-redux'
import { getTransportations } from '../redux/actions/transportationsActions'
import { withRouter } from 'react-router-dom';
import { tableCardStyle, tableCardBodyStyle, buttonStyle } from '../styles/customStyles';
import { Col, Table, Row, Space, Typography, Input, Button } from 'antd';
import moment from 'moment'


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

const { Text } = Typography;


class UserTransportations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            originalTransportations: [],
            transportations: [],
            search: {
                "transportationNumber": this.props.location.transportationNumber,
                "cargoAcceptanceDate": moment().format("DD/MM/YYYY"),
                "movementStartDateInBelarusFrom": moment(this.props.location.movementStartDateInBelarusFrom).format("YYYY/MM/DD"),
                "movementStartDateInBelarusTo": moment(this.props.location.movementStartDateInBelarusTo).format("YYYY/MM/DD"),
                "movementEndDateInBelarusFrom": moment(this.props.location.movementEndDateInBelarusFrom).format("YYYY/MM/DD"),
                "movementEndDateInBelarusTo": moment(this.props.location.movementEndDateInBelarusTo).format("YYYY/MM/DD"),
                "etsngCargoCode": this.props.location.etsngCargoCode,
                "gngCargoCode": this.props.location.gngCargoCode,
                "departureStationCode": this.props.location.departureStationCode,
                "departureCountryCode": this.props.location.departureCountryCode,
                "destinationStationCode": this.props.location.destinationStationCode,
                "destinationCountryCode": this.props.location.destinationCountryCode,
                "stationMovementBeginingBelarusCode": this.props.location.stationMovementBeginingBelarusCode,
                "stationMovementEndBelarusCode": this.props.location.stationMovementEndBelarusCode
            }
        }
    }

    transportationsDataSet = (transportationsArray) => {
        // console.log('Component Did mount Transportations data:' + JSON.stringify(this.props.transportationsReducer.transportations))
        const transportationsClone = JSON.parse(JSON.stringify(transportationsArray));
        //removing time from data that we get
        transportationsClone.map((element, index) => {
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
        }, () => {
            console.log('Transportations array is equal to:' + JSON.stringify(this.state.transportations))
        })
    }

    // setParameters = () => {
    //     // gettig passed object from HomeScreen. Object with all params
    //     // console.log(this.props.location.params)
    // }

    componentDidMount() {
        if (this.props.usersReducer.currentUser !== null && this.props.userInfoReducer.role === "Administrator") {
            console.log('Param: ' + JSON.stringify(this.state.search.gngCargoCode))
            this.props.getTransportations(1, () => {
                this.transportationsDataSet(this.props.transportationsReducer.transportations);
            });
        } else {
            this.props.history.push('/login')
        }
    }

    render() {
        const columns = [
            {
                title: 'Pridėti vagonų',
                width: '3%',
                render: (value, record, index) => (
                    <Button>Plačiau</Button>
                )
            },
            {
                title: 'Transportacijos numeris',
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
                title: 'Transportacijos tipas',
                dataIndex: 'transportationType',
                width: '5%'
            },
            {
                title: 'Subkodas',
                dataIndex: 'transportationSubCode',
                width: '5%',
            },
            {
                title: 'Krovinio priėmimo vežti data',
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
                title: 'Judėjimo pradžios data per baltarusija',
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
                title: 'Judėjimo pabaigos data per baltarusija',
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
                title: 'Atvykimo stoties kodas',
                dataIndex: 'destinationStationCode',
                width: '5%'
            },
            {
                title: 'Atvykimo stoties pavadinimas',
                dataIndex: 'destinationStationTitle',
                width: '5%'
            },
            {
                title: 'Atvykimo šalies kodas',
                dataIndex: 'destinationCountryCode',
                width: '5%'
            },
            {
                title: 'Atvykimo šalies pavadinimas',
                dataIndex: 'destinationCountryTitle',
                width: '5%'
            },
            {
                title: 'Baltarusijos judėjimo pradžios stoties kodas',
                dataIndex: 'stationMovementBeginingBelarusCode',
                width: '5%'
            },
            {
                title: 'Baltarusijos judėjimo pradžios stoties pavadinimas',
                dataIndex: 'stationMovementBeginingBelarusTitle',
                width: '5%'
            },
            {
                title: 'Baltarusijos judėjimo pabaigos stoties kodas',
                dataIndex: 'stationMovementEndBelarusCode',
                width: '5%'
            },
            {
                title: 'Baltarusijos judėjimo pabaigos stoties pavadinimas',
                dataIndex: 'stationMovementEndBelarusTitle',
                width: '5%'
            },
        ]
        return (
            <>
                <div style={{ marginTop: 45, marginBottom: 45 }}>
                    <Col span={24} offset={1}>
                        <Row gutter={16}>
                            <Col span={18}>
                                <div style={{ marginRight: '40px', marginBottom: 25 }}>
                                    <Typography.Title style={{ ...aboutTitleTextStyle }}>Transportacijos</Typography.Title>
                                    <Typography.Text style={{ ...textStyle }}>
                                        Pridėkite naujas transportacijas ir priskirti prie kiekvienos transportacijos vagonus.
                                        Taip pat galite atnaujinti kiekvienos transportacijos duomenis kai reikia.
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
                            </Col>
                        </Row>
                    </Col>
                </div>
            </>
        )
    }
}

//get redux states. map them to props
const mapStateToProps = (state) => {
    return {
        usersReducer: state.usersReducer,
        userInfoReducer: state.userInfoReducer,
        transportationsReducer: state.transportationsReducer
    }
}


export default connect(mapStateToProps, { getTransportations })(withRouter(UserTransportations))
