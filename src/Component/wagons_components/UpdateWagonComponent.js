import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Modal, Space, InputNumber, Select } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons';
const {Option} = Select;
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

function UpdateWagonComponent(props) {
    const [wagon, setWagon] = useState({});
    const onBack = () => {
        props.onClose();
    }
    const onCancel = () => {
        props.onClose();
    }
    const onDataChange = (value, inputName) => {
        // setWagon to what was previously in state, change only specified value
        if (inputName === 'numberOfWagon') {
            setWagon(prevState => ({
                ...prevState,
                [inputName]: Number(value)
            }));
        } else if (inputName === 'typeOfWagon') {
            setWagon(prevState => ({
                ...prevState,
                [inputName]: value
            }));
        } else if (inputName === 'weight') {
            setWagon(prevState => ({
                ...prevState,
                [inputName]: Number(value)
            }))
        }
    }
    const saveChanges = () => {
        //clone wagon state
        const wagonClone = JSON.parse(JSON.stringify(wagon));
        const postObj = {
            "transportationId": wagonClone.transportationId,
            "numberOfWagon": wagonClone.numberOfWagon,
            "typeOfWagon": wagonClone.typeOfWagon,
            "weight": wagonClone.weight
        }
        const reducerObj = {
            "id": wagonClone.id,
            "transportationId": wagonClone.transportationId,
            "numberOfWagon": wagonClone.numberOfWagon,
            "typeOfWagon": wagonClone.typeOfWagon,
            "weight": wagonClone.weight
        }
        props.save(postObj,reducerObj);
    }
    useEffect(() => {
        setWagon(props.record);
    }, [props.record])
    return (
        <>
            <Modal
                onCancel={onCancel}
                saveChanges={saveChanges}
                okButtonProps={{ disabled: false }}
                cancelButtonProps={{ disabled: false }}
                title={<Space><ArrowLeftOutlined onClick={onBack} />Prid??ti nauj?? vagon??</Space>}
                visible={props.visible}
                footer={
                    <div>
                        <Button key="customCancel" onClick={onCancel}>At??aukti</Button>
                        <Button key="customSubmit" form="myForm" onClick={saveChanges} htmlType="submit" type={'primary'}>Prid??ti</Button>
                    </div>
                }
            >
                <Form layout="vertical" id="myForm" name="myForm">
                    <p style={{ ...textStyle }}>Vagono numeris</p>
                    <InputNumber style={{ width: '100%' }} placeholder="??ra??ykite vagono numer??" defaultValue={wagon.numberOfWagon} value={wagon.numberOfWagon} onChange={(e) => onDataChange(e, "numberOfWagon")} />
                    <p style={{ ...textStyle }}>Vagono tipas</p>
                    <Select
                        style={{ width: '100%' }}
                        placeholder="Pasirinkite tip??"
                        defaultValue={wagon.typeOfWagon}
                        value={wagon.typeOfWagon}
                        style={{ width: '100%' }} onChange={(e) => onDataChange(e, "typeOfWagon")}>
                        <Option value="Cisterna">Cisterna</Option>
                        <Option value="Gr??dove??is">Gr??dove??is</Option>
                    </Select>
                    <p style={{ ...textStyle }}>Svoris (tn.)</p>
                    <InputNumber style={{ width: '100%' }} placeholder="??ra??ykite vagono svor??" defaultValue={wagon.weight} value={wagon.weight} onChange={(e) => onDataChange(e, "weight")} />
                </Form>
            </Modal>
        </>
    )
}

export default UpdateWagonComponent;