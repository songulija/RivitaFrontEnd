import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { createTransportation } from '../../redux/actions/transportationsActions.js';
import {Form, Button, Input, Modal,Space} from 'antd';
import {ArrowLeftOutlined} from '@ant-design/icons'
import moment from 'moment';

class AddTransportationComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transportation: {
                "transportationNumber": 10,
                "weight": 10,
                "wagonsCount": 10,
                "transportationType": "string",
                "cargoAcceptanceDate": moment().format("YYYY/MM/DD"),
                "movementStartDateInBelarus": moment().format("YYYY/MM/DD"),
                "movementEndDateInBelarus": moment().format("YYYY/MM/DD"),
                "etsngCargoCode": 10,
                "gngCargoCode": 10,
                "departureStationTitle": "string",
                "departureCountryTitle": "string",
                "destinationStationTitle": "string",
                "destinationCountryTitle": "string",
                "stationMovementBeginingBelarusTitle": "string",
                "stationMovementEndBelarusTitle": "string"
            }
        }
    }

    onCancel = () =>{
        this.props.onClose();
    }

    saveChanges = () =>{
        const postObj = JSON.parse(JSON.stringify(this.state.transportation));
        this.props.save(postObj);
        this.props.onClose();
    }

    onDataChange = (value,inputName) => {
        const transportationClone = JSON.parse(JSON.stringify(this.state.transportation));
        if (inputName === "transportationNumber") {
            transportationClone.transportationNumber = Number(value);
        } else if (inputName === "weight") {
            transportationClone.weight = Number(value)
        } else if (inputName === "wagonsCount") {
            transportationClone.wagonsCount = Number(value)
        } else if (inputName === "transportationType") {
            transportationClone.transportationType = value;
        } else if (inputName === "cargoAcceptanceDate") {
            transportationClone.cargoAcceptanceDate = value;
        } else if (inputName === "movementStartDateInBelarus") {
            transportationClone.movementStartDateInBelarus = value;
        } else if (inputName === "movementEndDateInBelarus") {
            transportationClone.movementEndDateInBelarus = value;
        } else if (inputName === "etsngCargoCode") {
            transportationClone.etsngCargoCode = Number(value)
        } else if (inputName === "gngCargoCode") {
            transportationClone.gngCargoCode = Number(value)
        } else if (inputName === "departureStationTitle") {
            transportationClone.departureStationTitle = value;
        } else if (inputName === "departureCountryTitle") {
            transportationClone.departureCountryTitle = value;
        } else if (inputName === "destinationStationTitle") {
            transportationClone.destinationStationTitle = value;
        } else if (inputName === "destinationCountryTitle") {
            transportationClone.destinationCountryTitle = value;
        } else if (inputName === "stationMovementBeginingBelarusTitle") {
            transportationClone.stationMovementBeginingBelarusTitle = value;
        } else if (inputName === "stationMovementEndBelarusTitle") {
            transportationClone.stationMovementEndBelarusTitle = value;
        }

        //setting transportation object state to changed clone
        this.setState({
            transportation: transportationClone
        });
    }
    render() {
        return (
            <>
            <Modal
                    onCancel={this.onCancel}
                    saveChanges={this.saveChanges}
                    okButtonProps={{ disabled: false }}
                    cancelButtonProps={{ disabled: false }}
                    title={<Space><ArrowLeftOutlined onClick={this.onBack} />Pridėti naują transportaciją</Space>}
                    visible={this.props.visible}
                    footer={
                        <div>
                            <Button key="customCancel" onClick={this.onCancel}>Atšaukti</Button>
                            <Button key="customSubmit" form="myForm" onClick={this.saveChanges} htmlType="submit" type={'primary'}>Pridėti</Button>
                        </div>
                    }
                >
                    <Form layout="vertical" id="myForm" name="myForm">
                        <Form.Item key="name" name="name" label="Transportavimo numeris">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite numerį" defaultValue={this.state.transportation.transportationNumber} value={this.state.transportation.transportationNumber} onChange={(e) => this.onDataChange(e.target.value, "transportationNumber")} />
                        </Form.Item>
                        <Form.Item key="name1" name="name1" label="Svoris">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite svorį" defaultValue={this.state.transportation.weight} value={this.state.transportation.weight} onChange={(e) => this.onDataChange(e.target.value, "weight")} />
                        </Form.Item>
                        <Form.Item key="name2" name="name2" label="Vagonų skaičius">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite skaičių" defaultValue={this.state.transportation.wagonsCount} value={this.state.transportation.wagonsCount} onChange={(e) => this.onDataChange(e.target.value, "wagonsCount")} />
                        </Form.Item>
                        <Form.Item key="name4" name="name4" label="Transportavimo tipas">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite tipą" defaultValue={this.state.transportation.transportationType} value={this.state.transportation.transportationType} onChange={(e) => this.onDataChange(e.target.value, "transportationType")} />
                        </Form.Item>
                        <Form.Item key="name6" name="name6" label="Krovinio priėmimo data">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite datą" defaultValue={this.state.transportation.cargoAcceptanceDate} value={this.state.transportation.cargoAcceptanceDate} onChange={(e) => this.onDataChange(e.target.value, "cargoAcceptanceDate")} />
                        </Form.Item>
                        <Form.Item key="name7" name="name7" label="Judėjimo pradžios data Baltarusijoje">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite datą" defaultValue={this.state.transportation.movementStartDateInBelarus} value={this.state.transportation.movementStartDateInBelarus} onChange={(e) => this.onDataChange(e.target.value, "movementStartDateInBelarus")} />
                        </Form.Item>
                        <Form.Item key="name8" name="name8" label="Judėjimo pabaigos data Baltarusijoje">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite datą" defaultValue={this.state.transportation.movementEndDateInBelarus} value={this.state.transportation.movementEndDateInBelarus} onChange={(e) => this.onDataChange(e.target.value, "movementEndDateInBelarus")} />
                        </Form.Item>


                        <Form.Item key="name9" name="name9" label="ETSNG krovinio kodas">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite kodą" defaultValue={this.state.transportation.etsngCargoCode} value={this.state.transportation.etsngCargoCode} onChange={(e) => this.onDataChange(e.target.value, "etsngCargoCode")} />
                        </Form.Item>
                        <Form.Item key="name11" name="name11" label="GNG krovinio kodas">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite kodą" defaultValue={this.state.transportation.gngCargoCode} value={this.state.transportation.gngCargoCode} onChange={(e) => this.onDataChange(e.target.value, "gngCargoCode")} />
                        </Form.Item>
                        <Form.Item key="name14" name="name14" label="Išvykimo stoties pavadinimas">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite pavadinimą" defaultValue={this.state.transportation.departureStationTitle} value={this.state.transportation.departureStationTitle} onChange={(e) => this.onDataChange(e.target.value, "departureStationTitle")} />
                        </Form.Item>
                        <Form.Item key="name16" name="name16" label="Išvykimo šalies pavadinimas">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite pavadinimą" defaultValue={this.state.transportation.departureCountryTitle} value={this.state.transportation.departureCountryTitle} onChange={(e) => this.onDataChange(e.target.value, "departureCountryTitle")} />
                        </Form.Item>
                        <Form.Item key="name18" name="name18" label="Paskirties stoties pavadinimas">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite pavadinimą" defaultValue={this.state.transportation.destinationStationTitle} value={this.state.transportation.destinationStationTitle} onChange={(e) => this.onDataChange(e.target.value, "destinationStationTitle")} />
                        </Form.Item>
                        <Form.Item key="name20" name="name20" label="Paskirties šalies pavadinimas">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite pavadinimą" defaultValue={this.state.transportation.destinationCountryTitle} value={this.state.transportation.destinationCountryTitle} onChange={(e) => this.onDataChange(e.target.value, "destinationCountryTitle")} />
                        </Form.Item>
                        <Form.Item key="name22" name="name22" label="Judėjimo pradžios stoties pavadinimas (Baltarusijoje)">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite pavadinimą" defaultValue={this.state.transportation.stationMovementBeginingBelarusTitle} value={this.state.transportation.stationMovementBeginingBelarusTitle} onChange={(e) => this.onDataChange(e.target.value, "stationMovementBeginingBelarusTitle")} />
                        </Form.Item>
                        <Form.Item key="name24" name="name24" label="Judėjimo pabaigos stoties pavadinimas (Baltarusijoje)">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite pavadinimą" defaultValue={this.state.transportation.stationMovementEndBelarusTitle} value={this.state.transportation.stationMovementEndBelarusTitle} onChange={(e) => this.onDataChange(e.target.value, "stationMovementEndBelarusTitle")} />
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        )
    }
}

//getting needed states from redux
const mapStateToProps = (state) => {
    return {
        usersReducer: state.usersReducer
    }
}

export default connect(mapStateToProps, { createTransportation })(withRouter(AddTransportationComponent))