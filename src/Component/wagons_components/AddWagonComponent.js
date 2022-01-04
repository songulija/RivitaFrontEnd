import React, { useState } from 'react';
import { Button, Form, Input, Modal, Space, InputNumber, Select } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
const {Option} = Select;
function AddWagonComponent(props) {
    const [wagon, setWagon] = useState({
        "transportationId": props.transportationId,
        "numberOfWagon": 0,
        "typeOfWagon": "Cisterna",
        "weight": 0
    });
    const onBack = () => {
        // props.onClose();\
        props.onClose();
    }
    const onCancel = () => {
        props.onClose();
    }
    const onDataChange = (value, inputName) => {
        const wagonClone = JSON.parse(JSON.stringify(wagon))
        if (inputName === "numberOfWagon") {
            wagonClone.numberOfWagon = Number(value);
        } else if (inputName === "typeOfWagon") {
            wagonClone.typeOfWagon = value;
        } else if (inputName === "weight") {
            wagonClone.weight = Number(value);
        }
        setWagon(wagonClone);
    }
    const saveChanges = () => {
        const postObj = JSON.parse(JSON.stringify(wagon))
        props.save(postObj)
    }
    return (
        <>
            <Modal
                onCancel={onCancel}
                saveChanges={saveChanges}
                okButtonProps={{ disabled: false }}
                cancelButtonProps={{ disabled: false }}
                title={<Space><ArrowLeftOutlined onClick={onBack} />Pridėti naują vagoną</Space>}
                visible={props.visible}
                footer={
                    <div>
                        <Button key="customCancel" onClick={onCancel}>Atšaukti</Button>
                        <Button key="customSubmit" form="myForm" onClick={saveChanges} htmlType="submit" type={'primary'}>Pridėti</Button>
                    </div>
                }
            >
                <Form layout="vertical" id="myForm" name="myForm">
                    <Form.Item key="name" name="name" label="Vagono numeris">
                        <InputNumber style={{ width: '100%' }} placeholder="Įrašykite vagono numerį" defaultValue={wagon.numberOfWagon} value={wagon.numberOfWagon} onChange={(e) => onDataChange(e, "numberOfWagon")} />
                    </Form.Item>
                    <p>Vagono tipas</p>
                    <Select
                        style={{ width: '100%' }}
                        placeholder="Pasirinkite tipą"
                        defaultValue={wagon.typeOfWagon}
                        value={wagon.typeOfWagon}
                        style={{ width: '100%' }} onChange={(e) => onDataChange(e, "typeOfWagon")}>
                        <Option value="Cisterna">Cisterna</Option>
                        <Option value="Grūdovežis">Grūdovežis</Option>
                    </Select>
                    <Form.Item key="name3" name="name3" label="Svoris (tn.)">
                        <InputNumber style={{ width: '100%' }} placeholder="Įrašykite vagono svorį" defaultValue={wagon.weight} value={wagon.weight} onChange={(e) => onDataChange(e, "weight")} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default AddWagonComponent;