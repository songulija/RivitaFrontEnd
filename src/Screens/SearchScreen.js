import React from 'react'
import { connect } from 'react-redux'
import { Button, Row, Col, Checkbox, Typography, Input, Space } from 'antd'
import moment from 'moment'
import { withRouter } from 'react-router-dom';
import { getTransportationsByParams } from '../redux/actions/transportationsActions'
import HeaderMain from '../Component/HeaderMain';
import { userCompanyReducer } from '../redux/reducers/usersReducer';


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


class SearchScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            queryString: "",
            search: [
                {
                    "id": 1,
                    "title": "Siuntos numeris",
                    "dataIndex":"transportationNumber",
                    "value": 0
                },
                {
                    "id": 2,
                    "title": "Krovinio priėmimo data nuo",
                    "dataIndex":"cargoAcceptanceDate",
                    "value": moment().format("YYYY/MM/DD"),
                },
                {
                    "id": 3,
                    "title": "Judėjimo pradžios data per Baltarusija nuo",
                    "dataIndex":"movementStartDateInBelarusFrom",
                    "value": moment().format("YYYY/MM/DD"),
                },
                {
                    "id": 4,
                    "title": "Judėjimo pradžios data per Baltarusija iki",
                    "dataIndex":"movementStartDateInBelarusTo",
                    "value": moment().format("YYYY/MM/DD"),
                },
                {
                    "id": 5,
                    "title": "Judėjimo pabaigos data per Baltarusija nuo",
                    "dataIndex":"movementEndDateInBelarusFrom",
                    "value": moment().format("YYYY/MM/DD"),
                },
                {
                    "id": 6,
                    "title": "Judėjimo pabaigos data per Baltarusija iki",
                    "dataIndex":"movementEndDateInBelarusTo",
                    "value": moment().format("YYYY/MM/DD"),
                },
                {
                    "id": 7,
                    "title": "Krovinio kodas (ETSNG)",
                    "dataIndex":"etsngCargoCode",
                    "value": 0,
                },
                {
                    "id": 8,
                    "title": "Krovinio kodas (BKN)",
                    "dataIndex":"gngCargoCode",
                    "value": 0,
                }
                // "transportationStatus": "",
                // "transportationType": "",
                // "transportationSubCode": 0,
                // "departureCountryCode": 0,
                // "destinationCountryCode": 0,
            ],
            features: [],
            checked: []
        }
    }

    onChange = checkedValues => {
        this.setState(() => {
            return { checked: checkedValues };
        });
    };

    isDisabled(id) {
        return (
            this.state.checked.length > 3 && this.state.checked.indexOf(id) === -1
        );
    };
    setInitialChecked = () => {
        const searchClone = JSON.parse(JSON.stringify(this.state.search));
        const array = []
        searchClone.map((element, index) => {
            if(index < 5){
                array.push(element.id);
            }
        });
        this.setState({
            checked: array
        })
    }

    onDataChange = (value,inputName) => {
        const searchClone = JSON.parse(JSON.stringify(this.state.search));
        searchClone.map((element,index)=>{
            if(element.dataIndex === inputName){
                element.value = value
            }
        });
        this.setState({
            search: searchClone
        })
    }
    getTransportations = () => {
        // i will get by only those values that are checked
        const checkedClone = JSON.parse(JSON.stringify(this.state.checked));
        const searchClone = JSON.parse(JSON.stringify(this.state.search));
        let queryString = "";
        checkedClone.map((element,index)=>{
            searchClone.map((element2,index1)=>{
                if(element === element2.id){
                    let query = `${element2.dataIndex}=${element2.value}&`
                    queryString = queryString + query;
                }
            });
        })
        let companyName = this.props.userCompanyReducer.company;
        if(companyName !== undefined && companyName !== null){
            queryString = queryString + `companyName=${companyName}&`;
        }
            // companyName = null;
            queryString = queryString.slice(0,-1)
        
        this.setState({
            queryString: queryString
        });
        console.log(queryString)
        this.props.history.push({
            pathname: '/transportations',
            state: {query: queryString}
        })
    }
    componentDidMount() {
        if (this.props.usersReducer.currentUser) {
            // this.setInitialChecked();
        } else {
            this.props.history.push('/login');
        }
    }

    render() {
        return (
            <>
            <HeaderMain/>
                <div style={{ marginTop: 45, marginBottom: 45 }}>
                    <Col span={24} offset={1}>
                        <Row gutter={16}>
                            <Col span={16}>
                                <div style={{ marginRight: '40px' }}>
                                    <Typography.Title style={{ ...aboutTitleTextStyle }}>Paieška</Typography.Title>
                                    <Typography.Text style={{ ...textStyle }}>
                                        Parinkite parametrus pagal kuriuos ieškosite
                                    </Typography.Text>
                                </div>
                            </Col>
                        </Row>
                        <Row gutter={16} style={{ marginTop: '15px' }}>
                        <Col span={22}>
                            
                                <Space direction="vertical">
                                    <Checkbox.Group onChange={this.onChange}>
                                    <div className='container' style={{padding: '20px',borderStyle: 'solid',borderColor:'#e0e0e0',borderWidth: '1px',borderRadius: '5px'}}>
                                        <Space direction="vertical">
                                            {this.state.search.map((element) => (
                                                <div key={element.dataIndex}>
                                                <Checkbox key={element.id} value={element.id} disabled={this.isDisabled(element.id)}>{element.title}</Checkbox>
                                                <Input key={element.id+1} value={element.value} disabled={this.isDisabled(element.id)} onChange={(e) => this.onDataChange(e.target.value,element.dataIndex)}/>
                                            </div>
                                            ))}
                                        </Space>
                                        </div>
                                    </Checkbox.Group>
                                </Space>
                            </Col>
                        </Row>
                        <Button size="large" style={{
                            borderRadius: '4px',
                            fontWeight: '600',
                            fontSize: '14px',
                            marginTop: '10px',
                            width: '220px',
                            height: '60px'
                        }}
                        onClick={this.getTransportations}>
                        Ieškoti
                        </Button>
                        {/* <Link to={{pathname:"/transportations",state:{queryString: this.state.queryString}}}> */}
                    </Col>
                </div>
            </>
        )
    }
}
// get redux states. map to props
const mapStateToProps = (state) => {
    return {
        usersReducer: state.usersReducer,
        transportationsReducer: state.transportationsReducer,
        userCompanyReducer: state.userCompanyReducer
    }
}

export default connect(mapStateToProps, { getTransportationsByParams })(withRouter(SearchScreen));