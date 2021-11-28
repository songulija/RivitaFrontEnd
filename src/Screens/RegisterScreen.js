import React from 'react'
import { connect } from 'react-redux'
import { Table, Space, Card, Typography, Col, Row } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import Button from "react-bootstrap/Button";
import "../styles/Login.css";
import { register } from '../redux/actions/userActions'
import { getCompanies } from '../redux/actions/companiesActions.js'
import { getUsers } from '../redux/actions/userListActions'
import { withRouter } from 'react-router-dom'
import { tableCardStyle, tableCardBodyStyle, buttonStyle } from '../styles/customStyles.js';
import AddUserComponent from '../Component/register_components/AddUserComponent'
import HeaderMain from '../Component/HeaderMain';


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
class RegisterScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            companies: [],
            addUserVisibility: false
        }
    }

    showAddUser = () => {
        this.setState({
            addUserVisibility: true
        })
    }
    unshowAddUser = () => {
        this.setState({
            addUserVisibility: false
        })
    }

    saveChanges = (postObj) => {
        this.props.register(postObj, () => {
            this.props.getUsers(1, () => {
                const usersClone = JSON.parse(JSON.stringify(this.props.usersListReducer.users))
                this.setState({
                    users: usersClone,
                    addUserVisibility: false
                });
            });
        });
    }

    //get companies. becouse when register we asign companies
    componentDidMount() {
        if (this.props.usersReducer.currentUser !== null && this.props.userInfoReducer.role === 'Administrator') {
            this.props.getUsers(1, () => {
                const usersClone = JSON.parse(JSON.stringify(this.props.usersListReducer.users));
                this.setState({
                    users: usersClone
                })
            });
            this.props.getCompanies(() => {
                const companiesClone = JSON.parse(JSON.stringify(this.props.companiesReducer.companies))
                this.setState({
                    companies: companiesClone
                })
            })
        } else {
            // this.props.history.push('/login')
        }
    }
    render() {
        const columns = [
            {
                title: 'El. pašas',
                dataIndex: 'email',
                width: '40%'
            },
            {
                title: 'Telefono numeris',
                dataIndex: 'phoneNumber',
                width: '40%'
            },
            {
                title: 'Kompanijos numeris',
                dataIndex: 'companyId',
                width: '20%'
            }
        ]
        return (
            <>
                <HeaderMain />
                <div style={{ marginTop: 45, marginBottom: 45 }}>
                    <Col span={24} offset={2}>
                        <Row gutter={16}>
                            <Col span={16}>
                                <div style={{ marginRight: '40px' }}>
                                    <Typography.Title style={{ ...aboutTitleTextStyle }}>Naudotojai</Typography.Title>
                                    <Typography.Text style={{ ...textStyle }}>
                                        Pridėkite naudotojus, kurie galės naudotis sveitaine. Kuriant naudotoją
                                        jį reikia priskirti prie vienos iš kompanijų su kuriomis jus dirbate. Jei
                                        kompajios saraše nematote pirma sukurkite kompaniją.                                    </Typography.Text>
                                </div>
                            </Col>
                        </Row>
                        {/* returns second column with table */}
                        {/* <FixedCostTable data={obj.types} countryVats={this.props.countryVats} category_title={obj.category_title} category_id={obj.category_id} /> */}
                        <Row gutter={16}>
                            <Col span={22}>
                                <Card size={'small'} style={{ ...tableCardStyle }} bodyStyle={{ ...tableCardBodyStyle }}>
                                    <Table
                                        rowKey="id"
                                        columns={columns}
                                        dataSource={this.props.usersListReducer.users}
                                        pagination={{ pageSize: 10 }}
                                        bordered
                                        scroll={{ x: 'calc(700px + 50%)' }}
                                    // footer={() => (<Space style={{ display: 'flex', justifyContent: 'space-between' }}><Button size="large" style={{ ...buttonStyle }} onClick={this.onOpenAddCompany()}><PlusOutlined />Pridėti kompaniją</Button></Space>)}
                                    />
                                    <Space style={{ display: 'flex', justifyContent: 'space-between' }}><Button size="large" style={{ ...buttonStyle }} onClick={this.showAddUser}><PlusOutlined />Pridėti naudotoją</Button></Space>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </div>
                {this.state.addUserVisibility !== false ?
                    <AddUserComponent visible={this.state.addUserVisibility} onClose={this.unshowAddUser}
                        save={this.saveChanges} companies={this.state.companies} />
                    : null}
            </>

        )
    }
}

//getting all redux states
const mapStateToProps = (state) => {
    return {
        usersReducer: state.usersReducer,
        userInfoReducer: state.userInfoReducer,
        companiesReducer: state.companiesReducer,
        usersListReducer: state.usersListReducer
    }
}
//connect to redux states, defining all action that we will use
export default connect(mapStateToProps, { getUsers, getCompanies, register })(withRouter(RegisterScreen));
