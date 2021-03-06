import React from 'react';
import { connect } from 'react-redux';
import { getTransportations, createTransportation, updateTransportation,deleteTransportation } from '../redux/actions/transportationsActions.js';
import { getCompanies } from '../redux/actions/companiesActions'
import { buttonStyle } from '../styles/customStyles';
import { getWagons } from '../redux/actions/wagonsActions';
import { Col, Table, Row, Space, Typography, Button, Input,Popconfirm } from 'antd';
// import { Button } from 'react-bootstrap'
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import AddTransportationComponent from '../Component/transportations_components/AddTransportationComponent';
import moment from 'moment'
import UpdateTransportationComponent from '../Component/transportations_components/UpdateTransportationComponent.js';
import HeaderMain from '../Component/HeaderMain.js';


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


class AdminTransportationScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transportations: [],
            originalTransportations: [],
            addPanelVisibility: false,
            updateTransportation: {
                visibility: false,
                record: null
            }
        }
    }

    showTransportationAddPanel = () => {
        this.setState({
            addPanelVisibility: true
        });
    }

    //FOR AddTransportationComponent
    unshowTransportationAddPanel = () => {
        this.setState({
            addPanelVisibility: false
        });
    }

    wagonsAddScreen = (id) => {
        this.props.history.push(`/wagons/${id}`)
    }

    addTransportation = (postObj) => {
        //dispatching addTransporation action action
        this.props.createTransportation(postObj, () => {
            this.transportationsDataSet(this.props.transportationsReducer.transportations);
        });
    }

    deleteTransportations = (id)=>{
        this.props.deleteTransportation(id, () =>{
            this.transportationsDataSet(this.props.transportationsReducer.transportations)
        })
    }

    // FOR UpdateTransportationComponent
    showUpdateTransportationModal = (record) => {
        const obj = {
            visibility: true,
            record: record
        }
        this.setState({
            updateTransportation: obj
        });
    }
    unshowUpdateTransportationModal = () => {
        const obj = {
            visibility: false,
            record: null
        }
        this.setState({
            updateTransportation: obj
        })
    }
    saveUpdateTransportation = (postObj, reducerObj) => {
        this.props.updateTransportation(postObj, reducerObj, () => {
            //get clone of changed transportations redux state
            const transportationsClone = JSON.parse(JSON.stringify(this.props.transportationsReducer.transportations));
            this.transportationsDataSet(transportationsClone);
            this.unshowUpdateTransportationModal();
        });
    }



    transportationsDataSet = (transportationsArray) => {
        const transportationsClone = JSON.parse(JSON.stringify(transportationsArray));
        //removing time from data that we get
        transportationsClone.map((element) => {
            //for each element in array change dates
            let date1 = moment(element.cargoAcceptanceDate).format("YYYY/MM/DD");
            let date2 = moment(element.movementStartDateInBelarus).format("YYYY/MM/DD");
            let date3 = "";
            if(element.movementEndDateInBelarus !== null &&  element.movementEndDateInBelarus !== undefined){
                date3 =  moment(element.movementEndDateInBelarus).format("YYYY/MM/DD");
            }
            element.cargoAcceptanceDate = date1;
            element.movementStartDateInBelarus = date2;
            element.movementEndDateInBelarus = date3;
        });
        this.setState({
            transportations: transportationsClone,
            originalTransportations: transportationsClone
        });
    }
    componentDidMount() {
        if (this.props.usersReducer.currentUser !== null && this.props.userInfoReducer.role === 'ADMINISTRATOR') {
            this.props.getTransportations(() => {
                this.transportationsDataSet(this.props.transportationsReducer.transportations);
                this.props.getCompanies(() => {
                })
            });
            
        } else {
            this.props.history.push('/');
        }
    }

    render() {
        let { filteredInfo } = this.state;
        filteredInfo = filteredInfo || {};
        const columns = [
            {
                title: 'Atnaujinimas',
                width: '5%',
                render: (value, record, index) => (
                    <Button onClick={(e) => this.showUpdateTransportationModal(record)}>Atnaujinti</Button>
                )
            },
            {
                title: 'I??trinti',
                width: '5%',
                render: (text, record, index) => (
                    <Popconfirm title="Tikrai i??trinti?" onConfirm={() => this.deleteTransportations(record.transportationNumber)}>
                        <Button type="primary" danger>I??trinti</Button>
                    </Popconfirm>
                )
            },
            {
                title: 'Prid??ti vagon??',
                width: '3%',
                render: (text, record, index) => (
                    <Button onClick={(e) => this.wagonsAddScreen(record.id)}>Prid??ti</Button>
                )
            },
            {
                title: 'Siuntos numeris',
                dataIndex: 'transportationNumber',
                filterDropdown: ({ setSelectedKeys, selectedKeys, confirm,clearFilters }) => {
                    return (
                        <>
                            <Input autofocus placeholder="??ra??ykite numer??"
                                value={selectedKeys[0]}
                                onChange={(e) => {
                                    setSelectedKeys(e.target.value ? [e.target.value] : [])
                                    confirm({closeDropdown: false})
                                }}
                                onPressEnter={() => {
                                    // on enter it will be confirmin. and on confirming it will call function on filter
                                    confirm();
                                }}
                                onBlur={() => {
                                    confirm();
                                }}></Input>
                                <Button onClick={()=>{
                                    confirm();
                                }} type='primary'>Surasti</Button>
                                <Button onClick={()=>{
                                    clearFilters();
                                }} type='danger'>Gra??inti</Button>
                        </>
                    )

                },
                filterIcon: () => {
                    return <SearchOutlined />;
                },
                onFilter: (value, record) => {
                    return record.transportationNumber == value;
                },
                width: '5%'
            },
            {
                title: 'Kompanija',
                dataIndex: 'companyName',
                width: '5%'
            },
            {
                title: 'Svoris (tn.)',
                dataIndex: 'weight',
                width: '5%'
            },
            {
                title: 'Vagon?? skai??ius',
                dataIndex: 'wagonsCount',
                width: '5%'
            },
            {
                title: 'Transportavimo tipas',
                dataIndex: 'transportationType',
                width: '5%'
            },
            {
                title: 'Krovinio pri??mimo data',
                dataIndex: 'cargoAcceptanceDate',
                width: '7%',
                sorter: (a, b) => {
                    if (moment(a.Created).isBefore(moment(b.Created))) {
                        return -1;
                    }
                    return 1;
                }
            },
            {
                title: 'Jud??jimo prad??ios data Baltarusijoje',
                dataIndex: 'movementStartDateInBelarus',
                width: '5%',
                sorter: (a, b) => {
                    if (moment(a.Created).isBefore(moment(b.Created))) {
                        return -1;
                    }
                    return 1;
                }
            },
            {
                title: 'Jud??jimo pabaigos data Baltarusijoje',
                dataIndex: 'movementEndDateInBelarus',
                width: '5%'
            },
            {
                title: 'ETSNG krovinio kodas',
                dataIndex: 'etsngCargoCode',
                width: '5%'
            },
            {
                title: 'BKN krovinio kodas',
                dataIndex: 'gngCargoCode',
                width: '5%'
            },
            {
                title: 'Pradin?? stotis',
                dataIndex: 'departureStationTitle',
                width: '8%'
            },
            {
                title: 'Pradin?? ??alis',
                dataIndex: 'departureCountryTitle',
                width: '7%'
            },
            {
                title: 'Galin?? stotis',
                dataIndex: 'destinationStationTitle',
                width: '8%'
            },
            {
                title: 'Galin?? ??alis',
                dataIndex: 'destinationCountryTitle',
                width: '7%'
            },
            {
                title: 'Jud??jimo prad??ios stoties pavadinimas (Baltarusijoje)',
                dataIndex: 'stationMovementBeginingBelarusTitle',
                width: '8%'
            },
            {
                title: 'Jud??jimo pabaigos stoties pavadinimas (Baltarusijoje)',
                dataIndex: 'stationMovementEndBelarusTitle',
                width: '7%'
            },
        ]
        return (
            <>
                <HeaderMain />
                {/* column has 100 percent if span 24 */}
                <div style={{ marginTop: 45, marginBottom: 45 }}>
                    <Col span={24} offset={1}>
                        <Row gutter={16}>
                            <Col span={18}>
                                <div style={{ marginRight: '40px', marginBottom: 25 }}>
                                    <Typography.Title style={{ ...aboutTitleTextStyle }}>Transportavimas</Typography.Title>
                                    <Typography.Text style={{ ...textStyle }}>
                                        Prid??kite naujus transportavimus ir priskirti prie kiekvieno transportavimo vagonus.
                                        Taip pat galite atnaujinti kiekvienos transportavimo duomenis kai reikia.
                                    </Typography.Text>
                                </div>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={23}>

                                <Table
                                    rowKey="id"
                                    columns={columns}
                                    dataSource={this.state.transportations}
                                    pagination={{ pageSize: 15 }}
                                    bordered
                                    scroll={{ x: 'calc(700px + 50%)' }}
                                // footer={() => (<Space style={{ display: 'flex', justifyContent: 'space-between' }}><Button size="large" style={{ ...buttonStyle }} onClick={this.onOpenAddCompany()}><PlusOutlined />Prid??ti kompanij??</Button></Space>)}
                                />
                                <Space style={{ display: 'flex', justifyContent: 'space-between' }}><Button size="large" style={{ ...buttonStyle }} onClick={this.showTransportationAddPanel}><PlusOutlined />Prid??ti transportacij??</Button></Space>

                            </Col>
                        </Row>
                    </Col>
                    {this.state.addPanelVisibility !== false ?
                        <AddTransportationComponent visible={this.state.addPanelVisibility} onClose={this.unshowTransportationAddPanel}
                            save={this.addTransportation} companies={this.props.companiesReducer.companies} />
                        : null}
                    {this.state.updateTransportation.visibility !== false ?
                        <UpdateTransportationComponent visible={this.state.updateTransportation.visibility} save={this.saveUpdateTransportation}
                            onClose={this.unshowUpdateTransportationModal} record={this.state.updateTransportation.record} />
                        : null}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        usersReducer: state.usersReducer,
        userInfoReducer: state.userInfoReducer,
        transportationsReducer: state.transportationsReducer,
        wagonsReducer: state.wagonsReducer,
        companiesReducer: state.companiesReducer
    }
}

export default connect(mapStateToProps, { getTransportations, getWagons,getCompanies, createTransportation, updateTransportation,deleteTransportation })(withRouter(AdminTransportationScreen))