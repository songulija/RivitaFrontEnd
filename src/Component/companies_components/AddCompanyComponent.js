import React from 'react'
import {connect} from 'react-redux'
import { Modal, Button, Form, Space, Select, Input } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import {createCompany} from '../../redux/actions/companiesActions'
import { withRouter } from 'react-router';

class AddCompanyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }
    onBack = () => {
        // props.onClose();\
        this.props.onClose();
    }
    onCancel = () => {
        this.props.onClose();
    }
    onDataChange = (value) => {
        this.setState({
            name: value
        });
    }
    saveChanges = () => {
        const name = this.state.name;
        const postObj = {
            'name': name
        }
        this.props.save(postObj);
        this.props.onClose();
    }

    render() {
        return (
            <>
                <Modal
                    onCancel={this.onCancel}
                    saveChanges={this.saveChanges}
                    okButtonProps={{ disabled: false }}
                    cancelButtonProps={{ disabled: false }}
                    title={<Space><ArrowLeftOutlined onClick={this.onBack} />Pridėti naują kompaniją</Space>}
                    visible={this.props.visible}
                    footer={
                        <div>
                            <Button key="customCancel" onClick={this.onCancel}>Cancel</Button>
                            <Button key="customSubmit" form="myForm" onClick={this.saveChanges} htmlType="submit" type={'primary'}>Add</Button>
                        </div>
                    }
                >
                    <Form layout="vertical" id="myForm" name="myForm">
                        <Form.Item key="name" name="name" label="Kompanijos pavadinimas">
                            <Input style={{ width: '100%' }} placeholder="Įrašykite pavadinimą" value={this.state.name} onChange={(e) => this.onDataChange(e.target.value)} />
                        </Form.Item>


                    </Form>
                </Modal>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        companiesReducer: state.companiesReducer
    }
}

export default connect(mapStateToProps, { createCompany })(withRouter(AddCompanyComponent));
