import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import { getUserData } from '../redux/actions/userActions';
import { getTransportations } from '../redux/actions/transportationsActions.js';
import { tableCardStyle, tableCardBodyStyle, buttonStyle } from '../styles/customStyles';
import { Col, Table, Row, Space, Typography, Input } from 'antd';
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { PlusOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router';

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


class AdminTransportationScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            transportations: [],
            visibleHeader: 'hidden'
        }
    }
    discardChanges = () => {
        console.log('Discard changes')
    }

    saveChanges = () => {
        console.log('Save')
    }

    userDataSet = () => {
        this.props.getUserData(1, () => {
            const userClone = JSON.stringify(this.props.userInfoReducer);
            this.setState({
                user: userClone
            });
        })
    }

    // transportationsDataSet = () => {
    //     this.props.getTransportations(1, () => {
    //         const transportationsClone = JSON.parse(JSON.stringify(this.props.transportationsReducer.transportationsReducer));
    //         this.setState({
    //             transportations: transportationsClone
    //         }, () => console.log('Transportations are equal to:' + JSON.stringify(this.state.transportations)))
    //     });
    // }

    componentDidMount() {
        if (this.props.usersReducer.currentUser !== null) {
            this.props.getUserData(1, () => {
                this.userDataSet();
                this.props.getTransportations(1, () => {
                    // console.log('Component Did mount Transportations data:'+JSON.stringify(this.props.transportationsReducer.transportations))
                    const transportationsClone = JSON.parse(JSON.stringify(this.props.transportationsReducer.transportations));
                    this.setState({
                        transportations: transportationsClone
                    }, () => console.log('Transportations are equal to:' + JSON.stringify(this.state.transportations)))

                });
            });
        }
    }
    render() {
        const columns = [
            {
                title: 'Transportacijos numeris',
                dataIndex: 'transportationNumber',
                width: '3%',
                render: (text, record, index) => (
                    <Input
                        type={'text'}
                        defaultValue={text}
                    />
                )
            },
            {
                title: 'Svoris',
                dataIndex: 'weight',
                width: '3%',
                render: (text, record, index) => (
                    <Input
                        type={"text"}
                        defaultValue={text}
                    />
                )
            },
            {
                title: 'Vagonų skaičius',
                dataIndex: 'wagonsCount',
                width: '3%',
                render: (text, record, index) => (
                    <Input
                        type={"text"}
                        defaultValue={text}
                    />
                )
            },
            {
                title: 'Statusas',
                dataIndex: 'transportationStatus',
                width: '5%',
                render: (text, record, index) => (
                    <Input
                        type={"text"}
                        defaultValue={text}
                    />
                )
            },
            {
                title: 'Tipas',
                dataIndex: 'transportationType',
                width: '5%',
                render: (text, record, index) => (
                    <Input
                        type={"text"}
                        defaultValue={text}
                    />
                )
            },
            {
                title: 'Subkodas',
                dataIndex: 'transportationSubCode',
                width: '5%',
                render: (text, record, index) => (
                    <Input
                        type={"text"}
                        defaultValue={text}
                    />
                )
            },
            {
                title: 'Krovinio priėmimo vežti data',
                dataIndex: 'cargoAcceptanceDate',
                width: '5%',
                render: (text, record, index) => (
                    <Input
                        type={"text"}
                        defaultValue={text}
                    />
                )
            },
            {
                title: 'Judėjimo pradžios data per belarus',
                dataIndex: 'movementStartDateInBelarus',
                width: '5%',
                render: (text, record, index) => (
                    <Input
                        type={"text"}
                        defaultValue={text}
                    />
                )
            },
            {
                title: 'Judėjimo pabaigos data per belarus',
                dataIndex: 'movementEndDateInBelarus',
                width: '5%',
                render: (text, record, index) => (
                    <Input
                        type={"text"}
                        defaultValue={text}
                    />
                )
            },
            {
                title: 'ETSNG krovinio kodas',
                dataIndex: 'etsngCargoCode',
                width: '5%',
                render: (text, record, index) => (
                    <Input
                        type={"text"}
                        defaultValue={text}
                    />
                )
            },
            {
                title: 'ETSNG krovinio pavadinimas',
                dataIndex: 'etsngCargoTitle',
                width: '5%',
                render: (text, record, index) => (
                    <Input
                        type={"text"}
                        defaultValue={text}
                    />
                )
            },
            {
                title: 'GNG krovinio kodas',
                dataIndex: 'gngCargoCode',
                width: '5%',
                render: (text, record, index) => (
                    <Input
                        type={"text"}
                        defaultValue={text}
                    />
                )
            },
            {
                title: 'GNG krovinio pavadinimas',
                dataIndex: 'gngCargoTitle',
                width: '5%',
                render: (text, record, index) => (
                    <Input
                        type={"text"}
                        defaultValue={text}
                    />
                )
            },
            {
                title: 'Išvykimo stoties kodas',
                dataIndex: 'departureStationCode',
                width: '5%',
                render: (text, record, index) => (
                    <Input
                        type={"text"}
                        defaultValue={text}
                    />
                )
            },
            {
                title: 'Išvykimo stoties pavadinimas',
                dataIndex: 'departureStationTitle',
                width: '5%',
                render: (text, record, index) => (
                    <Input
                        type={"text"}
                        defaultValue={text}
                    />
                )
            },
            {
                title: 'Išvykimo šalies kodas',
                dataIndex: 'departureCountryCode',
                width: '5%',
                render: (text, record, index) => (
                    <Input
                        type={"text"}
                        defaultValue={text}
                    />
                )
            },
            {
                title: 'Išvykimo šalies pavadinimas',
                dataIndex: 'departureCountryTitle',
                width: '5%',
                render: (text, record, index) => (
                    <Input
                        type={"text"}
                        defaultValue={text}
                    />
                )
            },
            {
                title: 'Atvykimo stoties kodas',
                dataIndex: 'destinationStationCode',
                width: '5%',
                render: (text, record, index) => (
                    <Input
                        type={"text"}
                        defaultValue={text}
                    />
                )
            },
            {
                title: 'Atvykimo stoties pavadinimas',
                dataIndex: 'destinationStationTitle',
                width: '5%',
                render: (text, record, index) => (
                    <Input
                        type={"text"}
                        defaultValue={text}
                    />
                )
            },
            {
                title: 'Atvykimo šalies kodas',
                dataIndex: 'destinationCountryCode',
                width: '5%',
                render: (text, record, index) => (
                    <Input
                        type={"text"}
                        defaultValue={text}
                    />
                )
            },
            {
                title: 'Atvykimo šalies pavadinimas',
                dataIndex: 'destinationCountryTitle',
                width: '5%',
                render: (text, record, index) => (
                    <Input
                        type={"text"}
                        defaultValue={text}
                    />
                )
            },
            {
                title: 'Baltarusijos judėjimo pradžios stoties kodas',
                dataIndex: 'stationMovementBeginingBelarusCode',
                width: '5%',
                render: (text, record, index) => (
                    <Input
                        type={"text"}
                        defaultValue={text}
                    />
                )
            },
            {
                title: 'Baltarusijos judėjimo pradžios stoties pavadinimas',
                dataIndex: 'stationMovementBeginingBelarusTitle',
                width: '5%',
                render: (text, record, index) => (
                    <Input
                        type={"text"}
                        defaultValue={text}
                    />
                )
            },
            {
                title: 'Baltarusijos judėjimo pabaigos stoties kodas',
                dataIndex: 'stationMovementBeginingBelarusCode',
                width: '5%',
                render: (text, record, index) => (
                    <Input
                        type={"text"}
                        defaultValue={text}
                    />
                )
            },
            {
                title: 'Baltarusijos judėjimo pabaigos stoties pavadinimas',
                dataIndex: 'stationMovementBeginingBelarusTitle',
                width: '5%',
                render: (text, record, index) => (
                    <Input
                        type={"text"}
                        defaultValue={text}
                    />
                )
            },
        ]
        return (
            <>
                {/* column has 100 percent if span 24 */}
                <div style={{ marginTop: 45, marginBottom: 45 }}>

                    <Col span={24} offset={1}>
                        <Row>
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
                            <Col span={24}>

                                <Table
                                    rowKey="id"
                                    columns={columns}
                                    dataSource={this.state.transportations}
                                    pagination={true}
                                // footer={() => (<Space style={{ display: 'flex', justifyContent: 'space-between' }}><Button size="large" style={{ ...buttonStyle }} onClick={this.onOpenAddCompany()}><PlusOutlined />Pridėti kompaniją</Button></Space>)}
                                />
                                <Space style={{ display: 'flex', justifyContent: 'space-between' }}><Button size="large" style={{ ...buttonStyle }} onClick={this.showAddCompanyModel}><PlusOutlined />Pridėti transportaciją</Button></Space>

                            </Col>
                        </Row>
                    </Col>
                    {/* <Col span={5}>
                                
                            </Col> */}
                    {/* returns second column with table */}
                    {/* <FixedCostTable data={obj.types} countryVats={this.props.countryVats} category_title={obj.category_title} category_id={obj.category_id} /> */}

                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        usersReducer: state.usersReducer,
        userInfoReducer: state.userInfoReducer,
        transportationsReducer: state.transportationsReducer
    }
}

export default connect(mapStateToProps, { getUserData, getTransportations })(withRouter(AdminTransportationScreen))