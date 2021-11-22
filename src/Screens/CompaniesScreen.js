import React from 'react';
import { connect } from 'react-redux'
import { Table, Space, Input, Col, Card, Row, Typography, Form, Modal, Button } from 'antd';
import UnsavedChangesHeader from '../Component/UnsavedChangesHeader.js'
import { PlusOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { getCompanies, createCompany, updateCompany } from '../redux/actions/companiesActions.js';
// import { getUserData } from '../redux/actions/userActions'
import { tableCardStyle, tableCardBodyStyle, buttonStyle } from '../styles/customStyles.js';
import { withRouter } from 'react-router-dom';
import AddCompanyComponent from '../Component/companies_components/AddCompanyComponent.js';
import UpdateCompanyComponent from '../Component/companies_components/UpdateCompanyComponent.js';

const aboutTitleTextStyle = {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    marginBottom: '16px',
}

const textStyle = {
    fontSize: '14px',
    color: '#8C8C8C',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '22px',
    marginRight: '40px',
}

const { Text } = Typography;

class CompaniesScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companies: [],
            addItemVisibility: false,
            updateItem: {
                visibility: false,
                record: null
            }
        }
    }
    // For AddCompanyComponent
    showAddCompanyModel = () => {
        this.setState({
            addItemVisibility: true
        });
    }
    unShowAddModel = () => {
        this.setState({
            addItemVisibility: false
        });
    }
    addCompany = (postObj) => {
        this.props.createCompany(postObj, () => {
            const companiesClone = JSON.parse(JSON.stringify(this.props.companiesReducer.companies))
            this.setState({
                companies: companiesClone
            });
        });
    }

    // For UpdateCompanyComponent
    showUpdateModel = (record) => {
        const obj = {
            visibility: true,
            record: record
        }
        this.setState({
            updateItem: obj
        });
    }
    unshowUpdateModel = () => {
        const obj = {
            visibility: false,
            record: null
        }
        this.setState({
            updateItem: obj
        });
    }
    saveUpdateCompany = (postObj, reducerObj) => {
        this.props.updateCompany(postObj, reducerObj, () => {
            //get clone of updated companies redux state
            const companiesClone = JSON.parse(JSON.stringify(this.props.companiesReducer.companies));
            this.setState({
                companies: companiesClone,
            });
            this.unshowUpdateModel();
        });
    }


    companiesDataSet = () => {
        //cloning companies redux state. not working directly
        const companiesClone = JSON.parse(JSON.stringify(this.props.companiesReducer.companies));
        this.setState({
            companies: companiesClone
        }, () => console.log('Setted companies:' + JSON.stringify(this.state.companies)));
    }


    componentDidMount() {
        if(this.props.usersReducer.currentUser !== null && this.props.userInfoReducer.role !== null){
            this.props.getCompanies(1, () => {
                const companiesClone = JSON.parse(JSON.stringify(this.props.companiesReducer.companies))
                this.setState({
                    companies: companiesClone
                })
            })
        }else{
            this.props.history.push('/')
        }
    }
    render() {
        console.log('Render User data:' + JSON.stringify(this.props.userInfoReducer))
        const columns = [
            {
                title: 'Atnaujinimas',
                width: '40%',
                render: (value, record, index) => (
                    <Button onClick={(e) => this.showUpdateModel(record)}>Atnaujinti</Button>
                )
            },
            {
                title: 'Kompanijos pavadinimas',
                dataIndex: 'name',
                width: '60%'
            }
        ]
        return (
            <>
                <div style={{ marginTop: 45, marginBottom: 45 }}>
                    <Col span={24} offset={3}>
                        <Row gutter={16}>
                            <Col span={16}>
                                <div style={{ marginRight: '40px' }}>
                                    <Typography.Title style={{ ...aboutTitleTextStyle }}>Kompanijos</Typography.Title>
                                    <Typography.Text style={{ ...textStyle }}>
                                        Įveskite kompanijas, kurios darbuotojai galės naudotis sveitaine. Tik tada
                                        galėsite registruoti vartotojus ir priskirti juos prie pridėtos kompanijos.
                                    </Typography.Text>
                                </div>
                            </Col>
                        </Row>
                        {/* returns second column with table */}
                        {/* <FixedCostTable data={obj.types} countryVats={this.props.countryVats} category_title={obj.category_title} category_id={obj.category_id} /> */}
                        <Row gutter={16}>
                            <Col span={14}>
                                <Card size={'small'} style={{ ...tableCardStyle }} bodyStyle={{ ...tableCardBodyStyle }}>
                                    <Table
                                        rowKey="id"
                                        columns={columns}
                                        dataSource={this.state.companies}
                                        pagination={{ pageSize: 15 }}
                                    // footer={() => (<Space style={{ display: 'flex', justifyContent: 'space-between' }}><Button size="large" style={{ ...buttonStyle }} onClick={this.onOpenAddCompany()}><PlusOutlined />Pridėti kompaniją</Button></Space>)}
                                    />
                                    <Space style={{ display: 'flex', justifyContent: 'space-between' }}><Button size="large" style={{ ...buttonStyle }} onClick={this.showAddCompanyModel}><PlusOutlined />Pridėti kompaniją</Button></Space>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </div>

                {this.state.addItemVisibility !== false ?
                    <AddCompanyComponent visible={this.state.addItemVisibility} onClose={this.unShowAddModel}
                        save={this.addCompany} />
                    : null}
                {this.state.updateItem.visibility !== false ?
                    <UpdateCompanyComponent visible={this.state.updateItem.visibility}
                        record={this.state.updateItem.record} onClose={this.unshowUpdateModel}
                        save={this.saveUpdateCompany} />
                    : null}


            </>
        )
    }
}
//mapStateToProps function should return a plain object that contains the data the component needs:
//i select all redux states that i need
function mapStateToProps(state) {
    return {
        companiesReducer: state.companiesReducer,
        usersReducer: state.usersReducer,
        userInfoReducer: state.userInfoReducer
    }
}

export default connect(mapStateToProps, { getCompanies, createCompany, updateCompany })(withRouter(CompaniesScreen));
