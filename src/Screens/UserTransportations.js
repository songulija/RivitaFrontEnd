import React from 'react'
import { connect } from 'react-redux'
import { getTransportations, getTransportationsByParams } from '../redux/actions/transportationsActions'
import { withRouter } from 'react-router-dom';
import { Col, Table, Row, Typography, Button } from 'antd';
import moment from 'moment'
import HeaderMain from '../Component/HeaderMain';


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


class UserTransportations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            originalTransportations: [],
            transportations: [],
            queryString: ""
        }
    }

    transportationsDataSet = (transportationsArray) => {
        const transportationsClone = JSON.parse(JSON.stringify(transportationsArray));
        //removing time from data that we get
        transportationsClone.map((element, index) => {
            //for each element in array change dates
            let date1 = moment(element.cargoAcceptanceDate).format("YYYY/MM/DD");
            let date2 = moment(element.movementStartDateInBelarus).format("YYYY/MM/DD");
            let date3 = "";
            if(element.movementEndDateInBelarus !== null &&  element.movementEndDateInBelarus !== undefined){
                date3 =  moment(element.movementEndDateInBelarus).format("YYYY/MM/DD");
            }
            element.cargoAcceptanceDate = date1;
            element.movementStartDateInBelarus = date2;
            element.movementEndDateInBelarus = date3;
        });
        this.setState({
            transportations: transportationsClone,
            originalTransportations: transportationsClone
        })
    }

    componentDidMount() {
        if (this.props.usersReducer.currentUser !== null) {
            if (this.props.location.state.query !== null && this.props.location.state.query !== undefined) {
                this.props.getTransportationsByParams(this.props.location.state.query, () => {
                    this.transportationsDataSet(this.props.transportationsReducer.transportations);
                })
            } else {
                this.props.getTransportations(() => {
                    this.transportationsDataSet(this.props.transportationsReducer.transportations);
                })
            }
        } else {
            this.props.history.push('/login')
        }
    }

    showDetailsScreen = (id) => {
        this.props.history.push(`/transportation/${id}`)
    }

    render() {
        const columns = [
            {
                title: 'Pridėti vagonų',
                width: '3%',
                dataIndex: 'id',
                render: (text, record, index) => (
                    <Button onClick={(e) => this.showDetailsScreen(text)}>Plačiau</Button>
                )
            },
            {
                title: 'Siuntos numeris',
                dataIndex: 'transportationNumber',
                width: '5%'
            },
            {
                title: 'Kompanija',
                dataIndex: 'companyName',
                width: '5%'
            },
            {
                title: 'Svoris (kg)',
                dataIndex: 'weight',
                width: '5%'
            },
            {
                title: 'Vagonų skaičius',
                dataIndex: 'wagonsCount',
                width: '5%'
            },
            {
                title: 'Transportavimo tipas',
                dataIndex: 'transportationType',
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
            },
            {
                title: 'ETSNG krovinio kodas',
                dataIndex: 'etsngCargoCode',
                width: '5%'
            },
            {
                title: 'BKN krovinio kodas',
                dataIndex: 'gngCargoCode',
                width: '5%'
            },
            {
                title: 'Pradinė stotis',
                dataIndex: 'departureStationTitle',
                width: '5%'
            },
            {
                title: 'Pradinė šalis',
                dataIndex: 'departureCountryTitle',
                width: '5%'
            },
            {
                title: 'Galinė stotis',
                dataIndex: 'destinationStationTitle',
                width: '5%'
            },
            {
                title: 'Galinė šalis',
                dataIndex: 'destinationCountryTitle',
                width: '5%'
            },
            {
                title: 'Judėjimo pradžios stoties pavadinimas (Baltarusijoje)',
                dataIndex: 'stationMovementBeginingBelarusTitle',
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
                <div style={{ marginTop: 45, marginBottom: 45 }}>
                    <Col span={24} offset={1}>
                        <Row gutter={16}>
                            <Col span={18}>
                                <div style={{ marginRight: '40px', marginBottom: 25 }}>
                                    <Typography.Title style={{ ...aboutTitleTextStyle }}>Transportavimai</Typography.Title>
                                    <Typography.Text style={{ ...textStyle }}>
                                        Pasirinkite jums norimus transportavimus. Galite paspausti plačiau jei norite, kad
                                        informacija būtų išdėstyta tvarkingiau.
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


export default connect(mapStateToProps, { getTransportationsByParams, getTransportations })(withRouter(UserTransportations))
