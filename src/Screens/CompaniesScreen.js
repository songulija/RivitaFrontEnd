import React from 'react';
import { connect } from 'react-redux'
import { Table, Space, Input, Col, Card, Row, Typography } from 'antd';
import { getUserData } from '../redux/actions/userActions.js'
import { getCompanies } from '../redux/actions/companiesActions.js'
import { tableCardStyle, tableCardBodyStyle } from '../styles/customStyles.js';
import { withRouter } from 'react-router';

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
            user: null
        }
    }
    // if history or dispatch is called it will trigger useEffect once more. If currentUser or companies is 
    // changed it will trigger it too
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
                    const companiesData = JSON.parse(JSON.stringify(this.props.companiesReducer.companies));
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


    onDataChange = (value,record)=>{
        //clone of companies state. dont change directly
        const companiesData = JSON.parse(JSON.stringify(this.state.companies));
        companiesData.map((element,index)=>{
            if(element.id === record.id){
                element.name = value;
            }
        });
        this.setState({
            companies: companiesData
        }, ()=> console.log('Companies state:'+JSON.stringify(this.state.companies)))
    }
    render() {
        // const companies = this.state.companies;
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
                <div style={{ marginTop: 45 }}>
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
                                        dataSource={this.state.companies}
                                        pagination={false}
                                        title={() => 'Kompanijos'}
                                    />
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </div>
            </>
        )
    }
}
//mapStateToProps function should return a plain object that contains the data the component needs:
//i select all redux states that i need
function mapStateToProps(state) {
    return {
        usersReducer: state.usersReducer,
        userInfoReducer: state.userInfoReducer,
        companiesReducer: state.companiesReducer
    }
}

export default connect(mapStateToProps, { getUserData, getCompanies })(withRouter(CompaniesScreen));
