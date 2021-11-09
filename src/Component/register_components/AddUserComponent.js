import React, { useState } from 'react';
import { Table, Space, Select, Card, Typography, Col, Row, Input, Modal } from 'antd'
import {Form} from 'react-bootstrap'
import { PlusOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import Button from "react-bootstrap/Button";
import {tableCardStyle, tableCardBodyStyle, buttonStyle} from '../../styles/customStyles.js'

const {Option} = Select;

function AddUserComponent(props) {
    const [user, setUser] = useState({
        phoneNumber: '',
        companyId: '',
        email: '',
        password: ''
    });

    const onCancel = () =>{
        props.onClose();
    }
    const saveChanges = () => {
        const userClone = JSON.parse(JSON.stringify(user));
        const postObj = {
            "email": userClone.email,
            "password": userClone.password,
            "phoneNumber": userClone.phoneNumber,
            "companyId": userClone.companyId,
            "roles": [
                "USER"
            ]
        }
        props.save(postObj);
    }

    const onDataChange = (value, inputName) => {
        const userClone = JSON.parse(JSON.stringify(user));
        if (inputName === "phoneNumber") {
            userClone.phoneNumber = value;
        } else if (inputName === "companyId") {
            userClone.companyId = value;
        } else if (inputName === "email") {
            userClone.email = value;
        } else if (inputName === "password") {
            userClone.password = value;
        }

        setUser(userClone);
    }
    return (
        <Modal
            onCancel={onCancel}
            saveChanges={saveChanges}
            okButtonProps={{ disabled: false }}
            cancelButtonProps={{ disabled: false }}
            title={<Space><ArrowLeftOutlined onClick={onCancel} />Pridėti naują kompaniją</Space>}
            visible={props.visible}
            footer={
                <div>
                    <Button key="customCancel" onClick={onCancel}>Cancel</Button>
                    <Button key="customSubmit" form="myForm" onClick={saveChanges} htmlType="submit" type={'primary'}>Add</Button>
                </div>
            }
        >
            <Form onSubmit={saveChanges}>
                <h1 className="h3 mb-3 fw-normal">Naudotojų registracija</h1>
                <Form.Group controlId='text'>
                    <Form.Label>Telefono numeris</Form.Label>
                    <Form.Control
                        type='phone'
                        placeholder='Įveskite telefono numerį'
                        value={user.phoneNumber}
                        onChange={(e) => onDataChange(e.target.value, "phoneNumber")}
                    >

                    </Form.Control>
                </Form.Group>
                <p style={{ marginBottom: '5px' }}>Kompanija</p>
                <Select
                    showSearch
                    style={{ width: '320px' }}
                    placeholder="Priskirkite kompaniją"
                    optionFilterProp="children"
                    onChange={(e) => onDataChange(e, "companyId")}
                >
                    {props.companies.map((element, index) => {
                        return (<Option key={element.id} value={element.id}>{element.name}</Option>)
                    })}
                </Select>

                <Form.Group controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Įveskite el. paštą'
                        value={user.email}
                        onChange={(e) => onDataChange(e.target.value, "email")}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Įveskite slaptažodį'
                        value={user.password}
                        onChange={(e) => onDataChange(e.target.value, "password")}
                    >
                    </Form.Control>
                </Form.Group>
            </Form>
        </Modal>
    )
}

export default AddUserComponent
