import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Space, Select, Table, Row, Col, Card, Typography } from 'antd';
import { tableCardStyle, tableCardBodyStyle, buttonStyle } from '../styles/customStyles';
import { PlusOutlined } from '@ant-design/icons';
import { getWagonsByTransportation, insertWagon, updateWagon } from '../redux/actions/wagonsActions';
import { getTransportations } from '../redux/actions/transportationsActions'
import AddWagonComponent from '../Component/wagons_components/AddWagonComponent';
import UpdateWagonComponent from '../Component/wagons_components/UpdateWagonComponent'
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

const { Text } = Typography;
const { Option } = Select;

class AdminWagonScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wagons: [],
            transportations: [],
            visibleHeader: 'hidden',
            addWagonVisible: {
                visible: false,
                transportationId: null
            },
            transportationId: null,
            updateWagon: {
                visibility: false,
                record: null
            }
        }
    }
    onBack = () => {
        // props.onClose();\
        this.props.history.push('/transportations/admin')
    }
    //Functions For AddWagonComponent
    unshowWagonAdd = () => {
        const obj = {
            visible: false,
            transportationId: null
        }
        this.setState({
            addWagonVisible: obj
        })
    }
    showAddWagonModel = () => {
        const obj = {
            visible: true,
            transportationId: this.props.match.params.id
        }
        this.setState({
            addWagonVisible: obj
        });
    }

    addWagon = (postObj) => {
        this.props.insertWagon(postObj, () => {
            const newWagons = JSON.parse(JSON.stringify(this.props.wagonsReducer.wagons))
            this.setState({
                wagons: newWagons
            });
            this.unshowWagonAdd();
        });
    }

    // For UpdateTransportationScreen
    showUpdateWagonModal = (record) => {
        const obj = {
            visibility: true,
            record: record
        }
        this.setState({
            updateWagon: obj
        });
    }
    unshowUpdateWagonModal = () => {
        const obj = {
            visibility: false,
            record: null
        }
        this.setState({
            updateWagon: obj
        });
    }
    saveUpdateWagon = (postObj, reducerObj) => {
        this.props.updateWagon(postObj, reducerObj, () => {
            //clone updated wagons redux state
            const wagonsClone = JSON.parse(JSON.stringify(this.props.wagonsReducer.wagons));
            this.setState({
                wagons: wagonsClone
            });
            this.unshowUpdateWagonModal();
        });
    }


    //provide transportation id.
    transportationSelect = (id) => {
        //set transportation id then get all data
        // dispatching action to get wagons by selected transportation
        this.setState({
            transportationId: id
        }, () => {
            this.props.getWagonsByTransportation(id, () => {
                const wagonsClone = JSON.parse(JSON.stringify(this.props.wagonsReducer.wagons));
                this.setState({
                    wagons: wagonsClone,
                });
            });
        });

    }


    componentDidMount() {
        if (this.props.usersReducer.currentUser !== null && this.props.userInfoReducer.role === 'Administrator') {
            this.props.getTransportations(() => {
                const transportationsClone = JSON.parse(JSON.stringify(this.props.transportationsReducer.transportations));
                this.setState({
                    transportations: transportationsClone
                });
                if (this.props.match.params.id === null || this.props.match.params.id === undefined) {
                    this.setState({
                        transportationId: transportationsClone[0].id
                    }, () => {
                        this.props.getWagonsByTransportation(this.state.transportationId, () => {
                            const wagonsClone = JSON.parse(JSON.stringify(this.props.wagonsReducer.wagons));
                            this.setState({ wagons: wagonsClone });
                        })
                    });
                } else {
                    this.props.getWagonsByTransportation(this.props.match.params.id, () => {
                        const wagonsClone = JSON.parse(JSON.stringify(this.props.wagonsReducer.wagons));
                        this.setState({ wagons: wagonsClone, transportationId: this.props.match.params.id });
                    })

                }
            });
        } else {
            this.props.history.push('/')
        }
    }
    render() {
        const columns = [
            {
                title: 'Atnaujinimas',
                width: '10%',
                render: (value, record, index) => (
                    <Button onClick={(e) => this.showUpdateWagonModal(record)}>Atnaujinti</Button>
                )
            },
            {
                title: 'Transportavimo numeris',
                dataIndex: 'transportationId',
                width: '10%',
                render: (text, record, index) => (
                    <Text>{record.transportation.transportationNumber}</Text>
                )
            },
            {
                title: 'Vagono numeris',
                dataIndex: 'numberOfWagon',
                width: '20%'
            },
            {
                title: 'Vagono tipas',
                dataIndex: 'typeOfWagon',
                width: '20%'
            },
            {
                title: 'Keliamoji galia(tonomis)',
                dataIndex: 'liftingCapacityTons',
                width: '20%'
            },
            {
                title: 'Svoris(tonomis)',
                dataIndex: 'weight',
                width: '20%'
            },
        ]
        return (
            <>
            <HeaderMain/>
                <div style={{ marginTop: 45, marginBottom: 45 }}>
                    <Col span={24} offset={2}>
                        <Row gutter={16}>
                            <Col span={16}>
                                <div style={{ marginRight: '40px' }}>
                                    <Typography.Title style={{ ...aboutTitleTextStyle }}>Transportacijos vagonai</Typography.Title>
                                    <Typography.Text style={{ ...textStyle }}>
                                        Atvaizduojami pasirinktos transportacijos vagonai. Galima pridėti naujus vagonus,
                                        tačiau yra galimybė ir atnaujinti esamus duomenis.
                                    </Typography.Text>
                                </div>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={16}>
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Pasirinkite transportacijos numerį"
                                    optionFilterProp="children"
                                    onChange={(e) => this.transportationSelect(e)}
                                >
                                    {this.state.transportations.map((element, index) => {
                                        return (<Option key={element.id} name={element.id} value={element.id}>{element.transportationNumber}</Option>)
                                    })}
                                </Select>
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
                                        dataSource={this.state.wagons}
                                        pagination={{ pageSize: 15 }}
                                        bordered
                                        scroll={{ x: 'calc(700px + 50%)' }}
                                    // footer={() => (<Space style={{ display: 'flex', justifyContent: 'space-between' }}><Button size="large" style={{ ...buttonStyle }} onClick={this.onOpenAddCompany()}><PlusOutlined />Pridėti kompaniją</Button></Space>)}
                                    />
                                    <Space style={{ display: 'flex', justifyContent: 'space-between' }}><Button size="large" style={{ ...buttonStyle }} onClick={this.showAddWagonModel}><PlusOutlined />Pridėti vagoną</Button></Space>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    {this.state.addWagonVisible.visible !== false ?
                        <AddWagonComponent visible={this.state.addWagonVisible.visible} transportationId={this.state.addWagonVisible.transportationId} onClose={this.unshowWagonAdd}
                            save={this.addWagon} />
                        : null}
                    {this.state.updateWagon.visibility !== false ?
                        <UpdateWagonComponent visible={this.state.updateWagon.visibility} record={this.state.updateWagon.record}
                            save={this.saveUpdateWagon} onClose={this.unshowUpdateWagonModal} />
                        : null
                    }
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        usersReducer: state.usersReducer,
        userInfoReducer: state.userInfoReducer,
        wagonsReducer: state.wagonsReducer,
        transportationsReducer: state.transportationsReducer
    }
}
export default connect(mapStateToProps, { getTransportations, getWagonsByTransportation, insertWagon, updateWagon })(withRouter(AdminWagonScreen));