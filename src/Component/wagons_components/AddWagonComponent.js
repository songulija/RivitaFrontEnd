import React, { useState } from 'react';
import {Button,Form,Input,Modal,Space,InputNumber} from 'antd'
import {ArrowLeftOutlined} from '@ant-design/icons'

function AddWagonComponent(props) {
    const [wagon, setWagon] = useState({
        "transportationId": props.transportationId,
        "numberOfWagon": 0,
        "typeOfWagon": "string",
        "weight": 0
    });
    const onBack = () => {
        // props.onClose();\
        props.onClose();
    }
    const onCancel = () => {
        props.onClose();
    }
    const onDataChange = (value,inputName) => {
        const wagonClone = JSON.parse(JSON.stringify(wagon))
        if(inputName === "numberOfWagon"){
            wagonClone.numberOfWagon = Number(value);
        }else if(inputName === "typeOfWagon"){
            wagonClone.typeOfWagon = value;
        }else if(inputName === "weight"){
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
                    <Form.Item key="name1" name="name1" label="Vagono tipas">
                        <Input style={{ width: '100%' }} placeholder="Įrašykite vagono tipą" defaultValue={wagon.typeOfWagon} value={wagon.typeOfWagon} onChange={(e) => onDataChange(e.target.value, "typeOfWagon")} />
                    </Form.Item>
                    <Form.Item key="name3" name="name3" label="Svoris">
                        <InputNumber style={{ width: '100%' }} placeholder="Įrašykite vagono svorį" defaultValue={wagon.weight} value={wagon.weight} onChange={(e) => onDataChange(e, "weight")} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default AddWagonComponent;