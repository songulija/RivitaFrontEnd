import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Space, Select, Input } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const { Option } = Select;
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


function UpdateCompanyComponent(props) {
    const [company, setCompany] = useState('');

    const onBack = () => {
        props.onClose();
    }
    const onCancel = () => {
        props.onClose();
    }
    const onDataChange = (value) => {
        setCompany(value);
    }
    const saveChanges = () => {
        const postObj = {
            "name": company
        }
        const reducerObj = {
            "id":props.record.id,
            "name":company
        }
        props.save(postObj,reducerObj);
    }

    useEffect(() => {
        setCompany(props.record.name);
    }, []);
    return (
        <>
            <Modal
                onCancel={onCancel}
                saveChanges={saveChanges}
                okButtonProps={{ disabled: false }}
                cancelButtonProps={{ disabled: false }}
                title={<Space><ArrowLeftOutlined onClick={onBack} />Atnaujinti kompaniją</Space>}
                visible={props.visible}
                footer={
                    <div>
                        <Button key="customCancel" onClick={onCancel}>Cancel</Button>
                        <Button key="customSubmit" form="myForm" onClick={saveChanges} htmlType="submit" type={'primary'}>Add</Button>
                    </div>
                }
            >
                <Form layout="vertical" id="myForm" name="myForm">
                    <p style={{...textStyle}}>Kompanijos pavadinimas</p>
                    <Input style={{ width: '100%' }} placeholder="Įrašykite pavadinimą" value={company} onChange={(e) => onDataChange(e.target.value)} />
                </Form>
            </Modal>
        </>
    )
}

export default UpdateCompanyComponent;