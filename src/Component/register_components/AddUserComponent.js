import React, { useState, useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getUserTypes} from '../../redux/actions/userActions';
import { Space, Select,Modal } from 'antd';
import {Form} from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import {ArrowLeftOutlined} from '@ant-design/icons'


const {Option} = Select;

function AddUserComponent(props) {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        phoneNumber: '',
        companyId: '',
        username: '',
        password: '',
        typeId: 0
    });
    const userTypesReducer = useSelector((state) => state.userTypesReducer);

    const onCancel = () =>{
        props.onClose();
    }
    const saveChanges = () => {
        const userClone = JSON.parse(JSON.stringify(user));
        const postObj = {
            "username": userClone.username,
            "password": userClone.password,
            "phoneNumber": userClone.phoneNumber,
            "companyId": userClone.companyId,
            "typeId": userClone.typeId
        }
        props.save(postObj);
        console.log('post:'+JSON.stringify(postObj))
    }

    const onDataChange = (value, inputName) => {
        const userClone = JSON.parse(JSON.stringify(user));
        if (inputName === "phoneNumber") {
            userClone.phoneNumber = value;
        } else if (inputName === "companyId") {
            userClone.companyId = value;
        } else if (inputName === "username") {
            userClone.username = value;
        } else if (inputName === "password") {
            userClone.password = value;
        }else if (inputName === "typeId") {
            userClone.typeId = value;
        }

        setUser(userClone);
    }
    useEffect(() => {
        dispatch(getUserTypes(() =>{

        }))
    },[])
    return (
        <Modal
            onCancel={onCancel}
            saveChanges={saveChanges}
            okButtonProps={{ disabled: false }}
            cancelButtonProps={{ disabled: false }}
            title={<Space><ArrowLeftOutlined onClick={onCancel} />Prid??ti nauj?? kompanij??</Space>}
            visible={props.visible}
            footer={
                <div>
                    <Button key="customCancel" onClick={onCancel}>Cancel</Button>
                    <Button key="customSubmit" form="myForm" onClick={saveChanges} htmlType="submit" type={'primary'}>Add</Button>
                </div>
            }
        >
            <Form onSubmit={saveChanges}>
                <h1 className="h3 mb-3 fw-normal">Naudotoj?? registracija</h1>
                <Form.Group controlId='text'>
                    <Form.Label>Telefono numeris</Form.Label>
                    <Form.Control
                        type='phone'
                        placeholder='??veskite telefono numer??'
                        value={user.phoneNumber}
                        onChange={(e) => onDataChange(e.target.value, "phoneNumber")}
                    >

                    </Form.Control>
                </Form.Group>

                <p style={{ marginBottom: '5px' }}>Kompanija</p>
                <Select
                    showSearch
                    style={{ width: '320px' }}
                    placeholder="Priskirkite kompanij??"
                    optionFilterProp="children"
                    onChange={(e) => onDataChange(e, "companyId")}
                >
                    {props.companies.map((element, index) => {
                        return (<Option key={element.id} value={element.id}>{element.name}</Option>)
                    })}
                </Select>
                <p style={{ marginBottom: '5px' }}>Vartotojo tipas</p>
                <Select
                    showSearch
                    style={{ width: '320px' }}
                    placeholder="Priskirkite tip??"
                    optionFilterProp="children"
                    onChange={(e) => onDataChange(e, "typeId")}
                >
                    {userTypesReducer.userTypes.map((element, index) => {
                        return (<Option key={element.id} value={element.id}>{element.title}</Option>)
                    })}
                </Select>

                <Form.Group controlId='username'>
                    <Form.Label>Vartotojo vardas</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='??veskite vartotojo vard??'
                        value={user.username}
                        onChange={(e) => onDataChange(e.target.value, "username")}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='??veskite slapta??od??'
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
