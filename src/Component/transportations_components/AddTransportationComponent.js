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
                "transportationStatus": "string",
                "transportationType": "string",
                "transportationSubCode": 10,
                "cargoAcceptanceDate": moment().format("YYYY/MM/DD"),
                "movementStartDateInBelarus": moment().format("YYYY/MM/DD"),
                "movementEndDateInBelarus": moment().format("YYYY/MM/DD"),
                "etsngCargoCode": 10,
                "etsngCargoTitle": "string",
                "gngCargoCode": 10,
                "gngCargoTitle": "string",
                "departureStationCode": 10,
                "departureStationTitle": "string",
                "departureCountryCode": 10,
                "departureCountryTitle": "string",
                "destinationStationCode": 10,
                "destinationStationTitle": "string",
                "destinationCountryCode": 10,
                "destinationCountryTitle": "string",
                "stationMovementBeginingBelarusCode": 10,
                "stationMovementBeginingBelarusTitle": "string",
                "stationMovementEndBelarusCode": 10,
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
        } else if (inputName === "transportationStatus") {
            transportationClone.transportationStatus = value;
        } else if (inputName === "transportationType") {
            transportationClone.transportationType = value;
        } else if (inputName === "transportationSubCode") {
            transportationClone.transportationSubCode = Number(value)
        } else if (inputName === "cargoAcceptanceDate") {
            transportationClone.cargoAcceptanceDate = value;
        } else if (inputName === "movementStartDateInBelarus") {
            transportationClone.movementStartDateInBelarus = value;
        } else if (inputName === "movementEndDateInBelarus") {
            transportationClone.movementEndDateInBelarus = value;
        } else if (inputName === "etsngCargoCode") {
            transportationClone.etsngCargoCode = Number(value)
        } else if (inputName === "etsngCargoTitle") {
            transportationClone.etsngCargoTitle = value;
        } else if (inputName === "gngCargoCode") {
            transportationClone.gngCargoCode = Number(value)
        } else if (inputName === "gngCargoTitle") {
            transportationClone.gngCargoTitle = value;
        } else if (inputName === "departureStationCode") {
            transportationClone.departureStationCode = Number(value)
        } else if (inputName === "departureStationTitle") {
            transportationClone.departureStationTitle = value;
        } else if (inputName === "departureCountryCode") {
            transportationClone.departureCountryCode = Number(value)
        } else if (inputName === "departureCountryTitle") {
            transportationClone.departureCountryTitle = value;
        } else if (inputName === "destinationStationCode") {
            transportationClone.destinationStationCode = Number(value)
        } else if (inputName === "destinationStationTitle") {
            transportationClone.destinationStationTitle = value;
        } else if (inputName === "destinationCountryCode") {
            transportationClone.destinationCountryCode = Number(value)
        } else if (inputName === "destinationCountryTitle") {
            transportationClone.destinationCountryTitle = value;
        } else if (inputName === "stationMovementBeginingBelarusCode") {
            transportationClone.stationMovementBeginingBelarusCode = Number(value)
        } else if (inputName === "stationMovementBeginingBelarusTitle") {
            transportationClone.stationMovementBeginingBelarusTitle = value;
        } else if (inputName === "stationMovementEndBelarusCode") {
            transportationClone.stationMovementEndBelarusCode = Number(value)
        } else if (inputName === "stationMovementEndBelarusTitle") {
            transportationClone.stationMovementEndBelarusTitle = value;
        }

        //setting transportation object state to changed clone
        this.setState({
            transportation: transportationClone
        },() => {
            console.log('Transportation is equal to:'+JSON.stringify(this.state.transportation))
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
                        <Form.Item key="name" name="name" label="Transportacijos numeris">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite transportacijos numerį" defaultValue={this.state.transportation.transportationNumber} value={this.state.transportation.transportationNumber} onChange={(e) => this.onDataChange(e.target.value, "transportationNumber")} />
                        </Form.Item>
                        <Form.Item key="name1" name="name1" label="Svoris">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite transportacijos svorį" defaultValue={this.state.transportation.weight} value={this.state.transportation.weight} onChange={(e) => this.onDataChange(e.target.value, "weight")} />
                        </Form.Item>
                        <Form.Item key="name2" name="name2" label="Vagonų skaičius">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite vagonų skaičių" defaultValue={this.state.transportation.wagonsCount} value={this.state.transportation.wagonsCount} onChange={(e) => this.onDataChange(e.target.value, "wagonsCount")} />
                        </Form.Item>
                        <Form.Item key="name3" name="name3" label="Statusas">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite transportacijos statusą numerį" defaultValue={this.state.transportation.transportationStatus} value={this.state.transportation.transportationStatus} onChange={(e) => this.onDataChange(e.target.value, "transportationStatus")} />
                        </Form.Item>
                        <Form.Item key="name4" name="name4" label="Transportacijos tipas">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite transportacijos tipą" defaultValue={this.state.transportation.transportationType} value={this.state.transportation.transportationType} onChange={(e) => this.onDataChange(e.target.value, "transportationType")} />
                        </Form.Item>
                        <Form.Item key="name5" name="name5" label="Transportacijos subkodas">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite transportacijos subkodą" defaultValue={this.state.transportation.transportationSubCode} value={this.state.transportation.transportationSubCode} onChange={(e) => this.onDataChange(e.target.value, "transportationSubCode")} />
                        </Form.Item>

                        <Form.Item key="name6" name="name6" label="Krovinio priėmimo vežti data">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite krovinio priėmimo vežti data" defaultValue={this.state.transportation.cargoAcceptanceDate} value={this.state.transportation.cargoAcceptanceDate} onChange={(e) => this.onDataChange(e.target.value, "cargoAcceptanceDate")} />
                        </Form.Item>
                        <Form.Item key="name7" name="name7" label="Judėjimo pradžios data per baltarusiją">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite judėjimo pradžios data per baltarusiją" defaultValue={this.state.transportation.movementStartDateInBelarus} value={this.state.transportation.movementStartDateInBelarus} onChange={(e) => this.onDataChange(e.target.value, "movementStartDateInBelarus")} />
                        </Form.Item>
                        <Form.Item key="name8" name="name8" label="Judėjimo pabaigos data per baltarusiją">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite judėjimo pabaigos datą per baltarusiją" defaultValue={this.state.transportation.movementEndDateInBelarus} value={this.state.transportation.movementEndDateInBelarus} onChange={(e) => this.onDataChange(e.target.value, "movementEndDateInBelarus")} />
                        </Form.Item>


                        <Form.Item key="name9" name="name9" label="ETSNG krovinio kodas">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite ETSNG krovinio kodą" defaultValue={this.state.transportation.etsngCargoCode} value={this.state.transportation.etsngCargoCode} onChange={(e) => this.onDataChange(e.target.value, "etsngCargoCode")} />
                        </Form.Item>

                        <Form.Item key="name10" name="name10" label="ETSNG krovinio pavadinimas">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite ETSNG krovinio pavadinimą" defaultValue={this.state.transportation.etsngCargoTitle} value={this.state.transportation.etsngCargoTitle} onChange={(e) => this.onDataChange(e.target.value, "etsngCargoTitle")} />
                        </Form.Item>

                        <Form.Item key="name11" name="name11" label="GNG krovinio kodas">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite GNG krovinio kodą" defaultValue={this.state.transportation.gngCargoCode} value={this.state.transportation.gngCargoCode} onChange={(e) => this.onDataChange(e.target.value, "gngCargoCode")} />
                        </Form.Item>
                        <Form.Item key="name12" name="name12" label="GNG krovinio pavadinimas">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite GNG krovinio pavadinimą" defaultValue={this.state.transportation.gngCargoTitle} value={this.state.transportation.gngCargoTitle} onChange={(e) => this.onDataChange(e.target.value, "gngCargoTitle")} />
                        </Form.Item>
                        <Form.Item key="name13" name="name13" label="Išvykimo stoties kodas">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite išvykimo stoties kodą" defaultValue={this.state.transportation.departureStationCode} value={this.state.transportation.departureStationCode} onChange={(e) => this.onDataChange(e.target.value, "departureStationCode")} />
                        </Form.Item>
                        <Form.Item key="name14" name="name14" label="Išvykimo stoties pavadinimas">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite išvykimo stoties pavadinimą" defaultValue={this.state.transportation.departureStationTitle} value={this.state.transportation.departureStationTitle} onChange={(e) => this.onDataChange(e.target.value, "departureStationTitle")} />
                        </Form.Item>

                        <Form.Item key="name15" name="name15" label="Išvykimo šalies kodas">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite išvykimo šalies kodą" defaultValue={this.state.transportation.departureCountryCode} value={this.state.transportation.departureCountryCode} onChange={(e) => this.onDataChange(e.target.value, "departureCountryCode")} />
                        </Form.Item>
                        <Form.Item key="name16" name="name16" label="Išvykimo šalies pavadinimas">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite išvykimo šalies pavadinimą" defaultValue={this.state.transportation.departureCountryTitle} value={this.state.transportation.departureCountryTitle} onChange={(e) => this.onDataChange(e.target.value, "departureCountryTitle")} />
                        </Form.Item>
                        <Form.Item key="name17" name="name17" label="Atvykimo stoties kodas">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite atvykiom stoties kodą" defaultValue={this.state.transportation.destinationStationCode} value={this.state.transportation.destinationStationCode} onChange={(e) => this.onDataChange(e.target.value, "destinationStationCode")} />
                        </Form.Item>
                        <Form.Item key="name18" name="name18" label="Atvykimo stoties pavadinimas">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite atvykimo stoties pavadinimą" defaultValue={this.state.transportation.destinationStationTitle} value={this.state.transportation.destinationStationTitle} onChange={(e) => this.onDataChange(e.target.value, "destinationStationTitle")} />
                        </Form.Item>
                        <Form.Item key="name19" name="name19" label="Atvykimo šalies kodą">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite atvykimo šalies kodą" defaultValue={this.state.transportation.destinationCountryCode} value={this.state.transportation.destinationCountryCode} onChange={(e) => this.onDataChange(e.target.value, "destinationCountryCode")} />
                        </Form.Item>
                        <Form.Item key="name20" name="name20" label="Atvykimo šalies pavadinimas">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite atvykimo šalies pavadinimą" defaultValue={this.state.transportation.destinationCountryTitle} value={this.state.transportation.destinationCountryTitle} onChange={(e) => this.onDataChange(e.target.value, "destinationCountryTitle")} />
                        </Form.Item>
                        <Form.Item key="name21" name="name21" label="Baltarusijos judėjimo pradžios stoties kodas">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite baltarusijos judėjimo pradžios stoties kodą" defaultValue={this.state.transportation.stationMovementBeginingBelarusCode} value={this.state.transportation.stationMovementBeginingBelarusCode} onChange={(e) => this.onDataChange(e.target.value, "stationMovementBeginingBelarusCode")} />
                        </Form.Item>
                        <Form.Item key="name22" name="name22" label="Baltarusijos judėjimo pradžios stoties pavadinimas">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite baltarusijos judėjimo pradžios stoties pavadinimą" defaultValue={this.state.transportation.stationMovementBeginingBelarusTitle} value={this.state.transportation.stationMovementBeginingBelarusTitle} onChange={(e) => this.onDataChange(e.target.value, "stationMovementBeginingBelarusTitle")} />
                        </Form.Item>
                        <Form.Item key="name23" name="name23" label="Baltarusijos judėjimo pabaigos stoties kodas">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite baltarusijos judėjio pabaigos stoties kodą" defaultValue={this.state.transportation.stationMovementEndBelarusCode} value={this.state.transportation.stationMovementEndBelarusCode} onChange={(e) => this.onDataChange(e.target.value, "stationMovementEndBelarusCode")} />
                        </Form.Item>
                        <Form.Item key="name24" name="name24" label="Baltarusijos judėjimo pabaigos stoties pavadinimas">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite transportacijos numerį" defaultValue={this.state.transportation.stationMovementEndBelarusTitle} value={this.state.transportation.stationMovementEndBelarusTitle} onChange={(e) => this.onDataChange(e.target.value, "stationMovementEndBelarusTitle")} />
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