import React from 'react';
import { connect } from 'react-redux'
import { Table, Space, Input, Col, Card, Row, Typography, Form, Modal } from 'antd';
import UnsavedChangesHeader from '../Component/UnsavedChangesHeader.js'
import { Button } from 'react-bootstrap'
import { PlusOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { getUserData } from '../redux/actions/userActions.js'
import { getCompanies, createCompany } from '../redux/actions/companiesActions.js'
import { tableCardStyle, tableCardBodyStyle, buttonStyle } from '../styles/customStyles.js';
import { withRouter } from 'react-router-dom';
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

const { Text } = Typography;

class CompaniesScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companies: [],
            user: null,
            addItemVisibility: false,
            visibleHeader: 'hidden'
        }
    }
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

    arrayEqual = (array1, array2) => {
        let a = JSON.parse(JSON.stringify(array1));
        let b = JSON.parse(JSON.stringify(array2));

        let original = array1;
        let modified = array2;

        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length !== b.length) return false;

        a = a.sort();
        b = b.sort();

        for (var i = 0; i < original.length; i++) {
            if (original[i].name !== modified[i].name) {
                console.log('They are not equal!!!')
                return false;
            }
        }
        return true;
    }


    //check if original companies state and modified are equal or not
    getUpdateWindowState = () => {
        // make clones first. i dont want to make any action to them directly
        const originalCompanies = JSON.parse(JSON.stringify(this.props.companiesReducer.companies));
        const modifiedCompanies = JSON.parse(JSON.stringify(this.state.companies));

        if (originalCompanies === null) {
            return 'hidden';
        }
        if (modifiedCompanies === null) {
            return 'hidden';
        }
        if (this.arrayEqual(originalCompanies, modifiedCompanies) === false) {
            return 'visible';
        }
        return 'hidden'

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
        }, () => {
            const visibilityString = this.getUpdateWindowState();
            this.setState({
                visibleHeader: visibilityString
            });
        });

    }

    userDataSet = () => {
        const userClone = JSON.parse(JSON.stringify(this.props.userInfoReducer));
        this.setState({
            user: userClone
        }, () => console.log('Setted user:' + JSON.stringify(this.state.user)));
    }
    companiesDataSet = () => {
        //cloning companies redux state. not working directly
        const companiesClone = JSON.parse(JSON.stringify(this.props.companiesReducer.companies));
        this.setState({
            companies: companiesClone
        }, () => console.log('Setted companies:' + JSON.stringify(this.state.companies)));
    }

    discardChanges = () => {
        console.log('Discard changes')
    }

    saveChanges = () => {
        console.log('Update all')
    }

    componentDidMount() {
        if (this.props.usersReducer.currentUser !== null) {
            this.props.getUserData(1, () => {
                this.userDataSet();
            });
            this.props.getCompanies(1, () => {
                this.companiesDataSet();
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
                <UnsavedChangesHeader
                    visibility={this.state.visibleHeader}
                    discardChanges={this.discardChanges}
                    saveChanges={this.saveChanges}
                />
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
                            <Col span={18}>
                                <Card size={'small'} style={{ ...tableCardStyle }} bodyStyle={{ ...tableCardBodyStyle }}>
                                    <Table
                                        rowKey="id"
                                        columns={columns}
                                        dataSource={this.state.companies}
                                        pagination={true}
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

export default connect(mapStateToProps, { getUserData, getCompanies, createCompany })(withRouter(CompaniesScreen));
