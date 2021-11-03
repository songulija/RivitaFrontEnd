import React from 'react';
import { connect } from 'react-redux'
import { Table, Space, Input } from 'antd';
import { getUserData } from '../redux/actions/userActions.js'
import { getCompanies } from '../redux/actions/companiesActions.js'
import { withRouter } from 'react-router';

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
                    console.log('Companies'+JSON.stringify(this.props.companiesReducer))
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
        // const companies = this.state.companies;
        const columns = [
            {
                title: 'Numeris',
                dataIndex: 'id',
                width: '30%'
            },
            {
                title: 'Kompanijos pavadinimas',
                dataIndex: 'name',
                width: '60%',
                render: (text, record, index) => (
                    <Input
                        type={"text"}
                        defaultValue={text === null ? 'Company name' : text}
                    // value={text}
                    // onChange={e => this.onFixedChange(e.target.value, record, "price")}
                    />
                )
            }
        ]
        return (
            <>
                <div className="my-auto container-fluid vh-100 vw-100">
                    <Table
                        columns={columns}
                        dataSource={this.state.companies}
                        pagination={false}
                    />
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

export default connect(mapStateToProps,{getUserData, getCompanies})(withRouter(CompaniesScreen));
