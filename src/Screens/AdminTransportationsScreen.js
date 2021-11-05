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
import UnsavedChangesHeader from '../Component/UnsavedChangesHeader';

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

    transportationsDataSet = () => {
        this.props.getTransportations(1, () => {
            // console.log('Component Did mount Transportations data:'+JSON.stringify(this.props.transportationsReducer.transportations))
            const transportationsClone = JSON.parse(JSON.stringify(this.props.transportationsReducer.transportations));
            this.setState({
                transportations: transportationsClone
            });

        });
    }

    arrayEqual = (array1, array2) => {
        let a = JSON.parse(JSON.stringify(array1));
        let b = JSON.parse(JSON.stringify(array2));

        let original = array1;
        let modified = array2;

        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length !== b.length) return false;

        a = a.sort();
        b = b.sort();

        for (var i = 0; i < original.length; i++) {
            if (original[i].transportationNumber !== modified[i].transportationNumber ||
                original[i].weight !== modified[i].weight ||
                original[i].wagonsCount !== modified[i].wagonsCount ||
                original[i].transportationStatus !== modified[i].transportationStatus ||
                original[i].transportationType !== modified[i].transportationType ||
                original[i].transportationSubCode !== modified[i].transportationSubCode ||
                original[i].cargoAcceptanceDate !== modified[i].cargoAcceptanceDate ||
                original[i].movementStartDateInBelarus !== modified[i].movementStartDateInBelarus ||
                original[i].movementEndDateInBelarus !== modified[i].movementEndDateInBelarus ||
                original[i].etsngCargoCode !== modified[i].etsngCargoCode ||
                original[i].etsngCargoTitle !== modified[i].etsngCargoTitle ||
                original[i].gngCargoCode !== modified[i].gngCargoCode ||
                original[i].gngCargoTitle !== modified[i].gngCargoTitle ||
                original[i].departureStationCode !== modified[i].departureStationCode ||
                original[i].departureStationTitle !== modified[i].departureStationTitle ||
                original[i].departureCountryCode !== modified[i].departureCountryCode ||
                original[i].departureCountryTitle !== modified[i].departureCountryTitle ||
                original[i].destinationStationCode !== modified[i].destinationStationCode ||
                original[i].destinationStationTitle !== modified[i].destinationStationTitle ||
                original[i].destinationCountryCode !== modified[i].destinationCountryCode ||
                original[i].destinationCountryTitle !== modified[i].destinationCountryTitle ||
                original[i].stationMovementBeginingBelarusCode !== modified[i].stationMovementBeginingBelarusCode ||
                original[i].stationMovementBeginingBelarusTitle !== modified[i].stationMovementBeginingBelarusTitle ||
                original[i].stationMovementEndBelarusCode !== modified[i].stationMovementEndBelarusCode ||
                original[i].stationMovementEndBelarusTitle !== modified[i].stationMovementEndBelarusTitle
            ) {
                console.log('They are not equal!!!')
                return false;
            }
        }
        return true;
    }


    //check if original companies state and modified are equal or not
    getUpdateWindowState = () => {
        // make clones first. i dont want to make any action to them directly
        const originalTransportations = JSON.parse(JSON.stringify(this.props.transportationsReducer.transportations));
        const modifiedTransportations = JSON.parse(JSON.stringify(this.state.transportations));

        if (originalTransportations === null) {
            return 'hidden';
        }
        if (modifiedTransportations === null) {
            return 'hidden';
        }
        if (this.arrayEqual(originalTransportations, modifiedTransportations) === false) {
            return 'visible';
        }
        return 'hidden'

    }

    onDataChange = (value, record, inputName) => {
        const transportationsClone = JSON.parse(JSON.stringify(this.state.transportations));
        transportationsClone.map((element, index) => {
            if (element.id === record.id) {
                // if(inputName = "")
                if (inputName === "transportationNumber") {
                    element.transportationNumber = Number(value);
                } else if (inputName === "weight") {
                    element.weight = Number(value)
                } else if (inputName === "wagonsCount") {
                    element.wagonsCount = Number(value)
                } else if (inputName === "transportationStatus") {
                    element.transportationStatus = value;
                } else if (inputName === "transportationType") {
                    element.transportationType = value;
                } else if (inputName === "transportationSubCode") {
                    element.transportationSubCode = Number(value)
                } else if (inputName === "cargoAcceptanceDate") {
                    element.cargoAcceptanceDate = value;
                } else if (inputName === "movementStartDateInBelarus") {
                    element.movementStartDateInBelarus = value;
                } else if (inputName === "movementEndDateInBelarus") {
                    element.movementEndDateInBelarus = value;
                } else if (inputName === "etsngCargoCode") {
                    element.etsngCargoCode = Number(value)
                } else if (inputName === "etsngCargoTitle") {
                    element.etsngCargoTitle = value;
                } else if (inputName === "gngCargoCode") {
                    element.gngCargoCode = Number(value)
                } else if (inputName === "gngCargoTitle") {
                    element.gngCargoTitle = value;
                } else if (inputName === "departureStationCode") {
                    element.departureStationCode = Number(value)
                } else if (inputName === "departureStationTitle") {
                    element.departureStationTitle = value;
                } else if (inputName === "departureCountryCode") {
                    element.departureCountryCode = Number(value)
                } else if (inputName === "departureCountryTitle") {
                    element.departureCountryTitle = value;
                } else if (inputName === "destinationStationCode") {
                    element.destinationStationCode = Number(value)
                } else if (inputName === "destinationStationTitle") {
                    element.destinationStationTitle = value;
                } else if (inputName === "destinationCountryCode") {
                    element.destinationCountryCode = Number(value)
                } else if (inputName === "destinationCountryTitle") {
                    element.destinationCountryTitle = value;
                } else if (inputName === "stationMovementBeginingBelarusCode") {
                    element.stationMovementBeginingBelarusCode = Number(value)
                } else if (inputName === "stationMovementBeginingBelarusTitle") {
                    element.stationMovementBeginingBelarusTitle = value;
                } else if (inputName === "stationMovementEndBelarusCode") {
                    element.stationMovementEndBelarusCode = Number(value)
                } else if (inputName === "stationMovementEndBelarusTitle") {
                    element.stationMovementEndBelarusTitle = value;
                }
            }
        });

        this.setState({
            transportations: transportationsClone
        }, () => {
            //in callback when transportations state is set we can then compare original and modified transportations
            console.log('Original array is:' + JSON.stringify(this.props.transportationsReducer.transportations));
            console.log('Modified array is:' + JSON.stringify(this.state.transportations));
            const visibilityString = this.getUpdateWindowState();
            this.setState({
                visibleHeader: visibilityString
            });
        });

    }
    componentDidMount() {
        if (this.props.usersReducer.currentUser !== null) {
            this.props.getUserData(1, () => {
                this.userDataSet();
                this.transportationsDataSet();
            });
        }
    }
    render() {
        const columns = [
            {
                title: 'Transportacijos numeris',
                dataIndex: 'transportationNumber',
                width: '5%',
                render: (text, record, index) => (
                    <Input
                        type={'text'}
                        defaultValue={text}
                        value={text}
                        onChange={(e) => this.onDataChange(e.target.value, record, "transportationNumber")}
                    />
                )
            },
            {
                title: 'Svoris',
                dataIndex: 'weight',
                width: '5%',
                render: (text, record, index) => (
                    <Input
                        type={"text"}
                        defaultValue={text}
                        value={text}
                        onChange={(e) => this.onDataChange(e.target.value, record, "weight")}
                    />
                )
            },
            {
                title: 'Vagonų skaičius',
                dataIndex: 'wagonsCount',
                width: '5%',
                render: (text, record, index) => (
                    <Input
                        type={"text"}
                        defaultValue={text}
                        value={text}
                        onChange={(e) => this.onDataChange(e.target.value, record, "wagonsCount")}
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
                        value={text}
                        onChange={(e) => this.onDataChange(e.target.value, record, "transportationStatus")}
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
                        value={text}
                        onChange={(e) => this.onDataChange(e.target.value, record, "transportationType")}
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
                        value={text}
                        onChange={(e) => this.onDataChange(e.target.value, record, "transportationSubCode")}
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
                        value={text}
                        onChange={(e) => this.onDataChange(e.target.value, record, "cargoAcceptanceDate")}
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
                        value={text}
                        onChange={(e) => this.onDataChange(e.target.value, record, "movementStartDateInBelarus")}
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
                        value={text}
                        onChange={(e) => this.onDataChange(e.target.value, record, "movementEndDateInBelarus")}
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
                        value={text}
                        onChange={(e) => this.onDataChange(e.target.value, record, "etsngCargoCode")}
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
                        value={text}
                        onChange={(e) => this.onDataChange(e.target.value, record, "etsngCargoTitle")}
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
                        value={text}
                        onChange={(e) => this.onDataChange(e.target.value, record, "gngCargoCode")}
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
                        value={text}
                        onChange={(e) => this.onDataChange(e.target.value, record, "gngCargoTitle")}
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
                        value={text}
                        onChange={(e) => this.onDataChange(e.target.value, record, "departureStationCode")}
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
                        value={text}
                        onChange={(e) => this.onDataChange(e.target.value, record, "departureStationTitle")}
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
                        value={text}
                        onChange={(e) => this.onDataChange(e.target.value, record, "departureCountryCode")}
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
                        value={text}
                        onChange={(e) => this.onDataChange(e.target.value, record, "departureCountryTitle")}
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
                        value={text}
                        onChange={(e) => this.onDataChange(e.target.value, record, "destinationStationCode")}
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
                        value={text}
                        onChange={(e) => this.onDataChange(e.target.value, record, "destinationStationTitle")}
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
                        value={text}
                        onChange={(e) => this.onDataChange(e.target.value, record, "destinationCountryCode")}
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
                        value={text}
                        onChange={(e) => this.onDataChange(e.target.value, record, "destinationCountryTitle")}
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
                        value={text}
                        onChange={(e) => this.onDataChange(e.target.value, record, "stationMovementBeginingBelarusCode")}
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
                        value={text}
                        onChange={(e) => this.onDataChange(e.target.value, record, "stationMovementBeginingBelarusTitle")}
                    />
                )
            },
            {
                title: 'Baltarusijos judėjimo pabaigos stoties kodas',
                dataIndex: 'stationMovementEndBelarusCode',
                width: '5%',
                render: (text, record, index) => (
                    <Input
                        type={"text"}
                        defaultValue={text}
                        value={text}
                        onChange={(e) => this.onDataChange(e.target.value, record, "stationMovementEndBelarusCode")}
                    />
                )
            },
            {
                title: 'Baltarusijos judėjimo pabaigos stoties pavadinimas',
                dataIndex: 'stationMovementEndBelarusTitle',
                width: '5%',
                render: (text, record, index) => (
                    <Input
                        type={"text"}
                        defaultValue={text}
                        value={text}
                        onChange={(e) => this.onDataChange(e.target.value, record, "stationMovementEndBelarusTitle")}
                    />
                )
            },
        ]
        return (
            <>
                <UnsavedChangesHeader
                    visibility={this.state.visibleHeader}
                    discardChanges={this.discardChanges}
                    saveChanges={this.saveChanges}
                />
                {/* column has 100 percent if span 24 */}
                <div style={{ marginTop: 45, marginBottom: 45 }}>
                    <Col span={24} offset={2}>
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
                            <Col span={20}>

                                <Table
                                    rowKey="id"
                                    columns={columns}
                                    dataSource={this.state.transportations}
                                    pagination={true}
                                    bordered
                                    scroll={{ x: 'calc(700px + 50%)' }}
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