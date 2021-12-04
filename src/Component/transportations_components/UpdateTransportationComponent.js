import React, { useState, useEffect } from 'react';
import { Form, Button, Input, Modal, Space,Col,Row } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons'
import moment from 'moment';

const textStyle = {
    fontSize: '18px',
    color: '#8C8C8C',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '22px',
    marginRight: '40px',
    marginBottom: '4px',
    marginTop: '10px',
    paddingBottom: '5px'
}

function UpdateTransportationComponent(props) {
    const [transportation, setTransportation] = useState({});
    const onBack = () => {
        props.onClose();
    }
    const onCancel = () => {
        props.onClose();
    }
    const onDataChange = (value, inputName) => {
        const transportationClone = JSON.parse(JSON.stringify(transportation));
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
        setTransportation(transportationClone)
    }
    const saveChanges = () => {
        const transportationClone = JSON.parse(JSON.stringify(transportation));
        const reducerObj = transportationClone;
        const postObj = {
            "userId": transportationClone.userId,
            "transportationNumber": transportationClone.transportationNumber,
            "weight": transportationClone.weight,
            "wagonsCount": transportationClone.wagonsCount,
            "transportationType": transportationClone.transportationType,
            "cargoAcceptanceDate": moment().format(transportationClone.cargoAcceptanceDate),
            "movementStartDateInBelarus": moment().format(transportationClone.movementStartDateInBelarus),
            "movementEndDateInBelarus": moment().format(transportationClone.movementEndDateInBelarus),
            "etsngCargoCode": transportationClone.etsngCargoCode,
            "gngCargoCode": transportationClone.gngCargoCode,
            "departureStationTitle": transportationClone.departureStationTitle,
            "departureCountryTitle": transportationClone.departureCountryTitle,
            "destinationStationTitle": transportationClone.destinationStationTitle,
            "destinationCountryTitle": transportationClone.destinationCountryTitle,
            "stationMovementBeginingBelarusTitle": transportationClone.stationMovementBeginingBelarusTitle,
            "stationMovementEndBelarusTitle": transportationClone.stationMovementEndBelarusCode
        }
        props.save(postObj, reducerObj);
    }
    useEffect(() => {
        setTransportation(props.record);
    }, [props.record])

    return (
        <>
            <Modal
                onCancel={onCancel}
                saveChanges={saveChanges}
                okButtonProps={{ disabled: false }}
                cancelButtonProps={{ disabled: false }}
                title={<Space><ArrowLeftOutlined onClick={onBack} />Atnaujinti transportaciją</Space>}
                visible={props.visible}
                width={1000}
                footer={
                    <div>
                        <Button key="customCancel" onClick={onCancel}>Atšaukti</Button>
                        <Button key="customSubmit" form="myForm" onClick={saveChanges} htmlType="submit" type={'primary'}>Atnaujinti</Button>
                    </div>
                }
            >
                <Form layout="vertical" id="myForm" name="myForm">
                    <Row>
                        <Col span={12} style={{ paddingLeft: '7px', paddingRight: '7px' }}>
                            <p style={{ ...textStyle }}>Transportacijos numeris</p>
                            <Input style={{ width: '100%' }} placeholder="Įrašykite transportacijos numerį" defaultValue={transportation.transportationNumber} value={transportation.transportationNumber} onChange={(e) => onDataChange(e.target.value, "transportationNumber")} />
                            <p style={{ ...textStyle }}>Transportacijos svoris</p>
                            <Input style={{ width: '100%' }} placeholder="Įrašykite transportacijos svorį" defaultValue={transportation.weight} value={transportation.weight} onChange={(e) => onDataChange(e.target.value, "weight")} />
                            <p style={{ ...textStyle }}>Vagonų skaičius</p>
                            <Input style={{ width: '100%' }} placeholder="Įrašykite vagonų skaičių" defaultValue={transportation.wagonsCount} value={transportation.wagonsCount} onChange={(e) => onDataChange(e.target.value, "wagonsCount")} />
                            <p style={{ ...textStyle }}>Transportacijos tipas</p>
                            <Input style={{ width: '100%' }} placeholder="Įrašykite transportacijos tipą" defaultValue={transportation.transportationType} value={transportation.transportationType} onChange={(e) => onDataChange(e.target.value, "transportationType")} />
                            <p style={{ ...textStyle }}>Krovinio priėmimo vežti data</p>
                            <Input style={{ width: '100%' }} placeholder="Įrašykite krovinio priėmimo vežti data" defaultValue={transportation.cargoAcceptanceDate} value={transportation.cargoAcceptanceDate} onChange={(e) => onDataChange(e.target.value, "cargoAcceptanceDate")} />
                            <p style={{ ...textStyle }}>Judėjimo pradžios data per baltarusiją</p>
                            <Input style={{ width: '100%' }} placeholder="Įrašykite judėjimo pradžios data per baltarusiją" defaultValue={transportation.movementStartDateInBelarus} value={transportation.movementStartDateInBelarus} onChange={(e) => onDataChange(e.target.value, "movementStartDateInBelarus")} />
                            <p style={{ ...textStyle }}>Judėjimo pabaigos data per baltarusiją</p>
                            <Input style={{ width: '100%' }} placeholder="Įrašykite judėjimo pabaigos datą per baltarusiją" defaultValue={transportation.movementEndDateInBelarus} value={transportation.movementEndDateInBelarus} onChange={(e) => onDataChange(e.target.value, "movementEndDateInBelarus")} />
                            <p style={{ ...textStyle }}>ETSNG krovinio kodas</p>
                            <Input style={{ width: '100%' }} placeholder="Įrašykite ETSNG krovinio kodą" defaultValue={transportation.etsngCargoCode} value={transportation.etsngCargoCode} onChange={(e) => onDataChange(e.target.value, "etsngCargoCode")} />
                            <p style={{ ...textStyle }}>GNG krovinio kodas</p>
                            <Input style={{ width: '100%' }} placeholder="Įrašykite GNG krovinio kodą" defaultValue={transportation.gngCargoCode} value={transportation.gngCargoCode} onChange={(e) => onDataChange(e.target.value, "gngCargoCode")} />
                        </Col>
                        <Col span={12} style={{ paddingLeft: '7px', paddingRight: '7px' }}>
                            <p style={{ ...textStyle }}>Išvykimo stoties pavadinimas</p>
                            <Input style={{ width: '100%' }} placeholder="Įrašykite išvykimo stoties pavadinimą" defaultValue={transportation.departureStationTitle} value={transportation.departureStationTitle} onChange={(e) => onDataChange(e.target.value, "departureStationTitle")} />
                            <p style={{ ...textStyle }}>Išvykimo šailes pavadinimas</p>
                            <Input style={{ width: '100%' }} placeholder="Įrašykite išvykimo šalies pavadinimą" defaultValue={transportation.departureCountryTitle} value={transportation.departureCountryTitle} onChange={(e) => onDataChange(e.target.value, "departureCountryTitle")} />
                            <p style={{ ...textStyle }}>Atvykimo stoties pavadinimas</p>
                            <Input style={{ width: '100%' }} placeholder="Įrašykite atvykimo stoties pavadinimą" defaultValue={transportation.destinationStationTitle} value={transportation.destinationStationTitle} onChange={(e) => onDataChange(e.target.value, "destinationStationTitle")} />
                            <p style={{ ...textStyle }}>Atvykimo šalies pavadinimas</p>
                            <Input style={{ width: '100%' }} placeholder="Įrašykite atvykimo šalies pavadinimą" defaultValue={transportation.destinationCountryTitle} value={transportation.destinationCountryTitle} onChange={(e) => onDataChange(e.target.value, "destinationCountryTitle")} />
                            <p style={{ ...textStyle }}>Judėjimo pradžios per baltarusija stoties pavadinimas</p>
                            <Input style={{ width: '100%' }} placeholder="Įrašykite baltarusijos judėjimo pradžios stoties pavadinimą" defaultValue={transportation.stationMovementBeginingBelarusTitle} value={transportation.stationMovementBeginingBelarusTitle} onChange={(e) => onDataChange(e.target.value, "stationMovementBeginingBelarusTitle")} />
                            <p style={{ ...textStyle }}>Judėjimo pabaigos per baltarusija stoties pavadinimas</p>
                            <Input style={{ width: '100%' }} placeholder="Įrašykite baltarusijos judėjio pabaigos stoties pavadinimą" defaultValue={transportation.stationMovementEndBelarusTitle} value={transportation.stationMovementEndBelarusTitle} onChange={(e) => onDataChange(e.target.value, "stationMovementEndBelarusTitle")} />
                        </Col>
                    </Row>



                </Form>
            </Modal>
        </>
    )
}

export default UpdateTransportationComponent;