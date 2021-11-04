import React from 'react';
import { connect } from 'react-redux'
import { Table, Space, Input, Col, Card, Row, Typography, Form, Modal } from 'antd';
import { Button } from 'react-bootstrap'
import { PlusOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { getUserData } from '../redux/actions/userActions.js'
import { getCompanies } from '../redux/actions/companiesActions.js'
import { tableCardStyle, tableCardBodyStyle, buttonStyle } from '../styles/customStyles.js';
import { withRouter } from 'react-router';
import AddCompanyComponent from '../Component/companies_components/AddCompanyComponent.js';

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


const titleTextStyle = {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: '20px',
    lineHeight: "38px"
}

const titleButtonStyle = {
    width: "40px",
    height: "40px",
    border: "1px solid #BFBFBF",
    boxSizing: "border-box",
    filter: "drop-shadow(0px 1px 0px rgba(0, 0, 0, 0.05))",
    borderRadius: "4px",
    backgroundColor: "transparent",
}

const { Text } = Typography;

class CompaniesScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companies: [],
            user: null,
            addItemVisibility: false,
            onAddName: ''
        }
    }
    showAddCompanyModel = () => {
        this.setState({
            addItemVisibility: true
        }, () => console.log('Show add company model:' + this.state.addItemVisibility));
    }
    unShowAddModel = () => {
        this.setState({
            addItemVisibility: false
        });
        console.log('Closed')
    }

    onDataChange = (value, record) => {
        //clone of companies state. dont change directly
        const companiesData = JSON.parse(JSON.stringify(this.state.companies));
        companiesData.map((element, index) => {
            if (element.id === record.id) {
                element.name = value;
            }
        });
        this.setState({
            companies: companiesData
        }, () => console.log('Companies state:' + JSON.stringify(this.state.companies)))
    }

    onDataAdd = () => {

    }

    componentDidMount() {
        console.log('Companies screeeeen')
        if (this.props.usersReducer.currentUser !== null) {
            this.props.getUserData(1, () => {
                const userData = JSON.parse(JSON.stringify(this.props.userInfoReducer));
                this.setState({
                    user: userData
                });
                // only admin can get Companies data. No other users
                this.props.getCompanies(1, () => {
                    console.log('YEYEYEYEY')
                    const companiesData = this.props.companiesReducer.companies;
                    console.log('Companies' + JSON.stringify(this.props.companiesReducer))
                    this.setState({
                        companies: companiesData
                    });
                });
            });
        } else {
            this.props.history.push('/');
        }

    }
    render() {
        const columns = [
            {
                title: 'Numeris',
                dataIndex: 'id',
                width: '60%'
            },
            {
                title: 'Kompanijos pavadinimas',
                dataIndex: 'name',
                width: '40%',
                render: (text, record, index) => (
                    <Input
                        type={"text"}
                        value={text}
                        defaultValue={text}
                        onChange={(e) => this.onDataChange(e.target.value, record)}
                    // value={text}
                    // onChange={e => this.onFixedChange(e.target.value, record, "price")}
                    />
                )
            }
        ]
        return (
            <>
                <div style={{ marginTop: 45, marginBottom: 45 }}>
                    <Col span={16} offset={4}>
                        <Row>
                            <Col span={6}>
                                <div style={{ marginRight: '40px' }}>
                                    <Typography.Title style={{ ...aboutTitleTextStyle }}>Kompanijos</Typography.Title>
                                    <Typography.Text style={{ ...textStyle }}>
                                        Įveskite kompanijas, kurios darbuotojai galės naudotis sveitaine. Tik tada
                                        galėsite registruoti vartotojus ir priskirti juos prie pridėtos kompanijos.
                                    </Typography.Text>
                                </div>
                            </Col>
                            {/* returns second column with table */}
                            {/* <FixedCostTable data={obj.types} countryVats={this.props.countryVats} category_title={obj.category_title} category_id={obj.category_id} /> */}
                            <Col span={10}>
                                <Card size={'small'} style={{ ...tableCardStyle }} bodyStyle={{ ...tableCardBodyStyle }}>
                                    <Table
                                        rowKey="id"
                                        columns={columns}
                                        dataSource={this.props.companiesReducer.companies}
                                        pagination={false}
                                        title={() => 'Kompanijos'}
                                    // footer={() => (<Space style={{ display: 'flex', justifyContent: 'space-between' }}><Button size="large" style={{ ...buttonStyle }} onClick={this.onOpenAddCompany()}><PlusOutlined />Pridėti kompaniją</Button></Space>)}
                                    />
                                    <Space style={{ display: 'flex', justifyContent: 'space-between' }}><Button size="large" style={{ ...buttonStyle }} onClick={this.showAddCompanyModel}><PlusOutlined />Pridėti kompaniją</Button></Space>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </div>

                {this.state.addItemVisibility !== false ?
                    <AddCompanyComponent visible={this.state.addItemVisibility} onClose={this.unShowAddModel} />
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

export default connect(mapStateToProps, { getUserData, getCompanies })(withRouter(CompaniesScreen));
