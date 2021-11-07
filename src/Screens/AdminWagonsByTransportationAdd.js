import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Modal, Button, Form, Space, Select, Table, Row, Col, Card, Typography, InputNumber,Input } from 'antd';
import { tableCardStyle, tableCardBodyStyle, buttonStyle } from '../styles/customStyles';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { PlusOutlined } from '@ant-design/icons';
import { getUserData } from '../redux/actions/userActions';
import { getWagonsByTransportation, getlWagons, getWagons } from '../redux/actions/wagonsActions';
import UnsavedChangesHeader from '../Component/UnsavedChangesHeader';
import { useStateWithCallbackLazy } from 'use-state-with-callback';

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

class AdminWagonsByTransportationAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wagons: [],
            visibleHeader: 'hidden'
        }
    }
    onBack = () => {
        // props.onClose();\
        this.props.onClose();
    }
    onCancel = () => {
        this.props.onClose();
    }
    showAddVagonModel = () => {
        console.log('Wagons state is:' + JSON.stringify(this.state.wagons))
    }
    discardChanges = () => {
        const originalWagons = this.props.wagonsReducer.wagons
        this.setState({
            wagons: originalWagons
        }, () => {
            this.setState({
                visibleHeader: 'hidden'
            })
        });
    }
    saveChanges = () => {
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
            if (original[i].numberOfWagon !== modified[i].numberOfWagon ||
                original[i].typeOfWagon !== modified[i].typeOfWagon ||
                original[i].wagonsCount !== modified[i].wagonsCount ||
                original[i].liftingCapacityTons !== modified[i].liftingCapacityTons ||
                original[i].weight !== modified[i].weight
            ) {
                console.log('They are not equal!!!')
                return false;
            }
        }
        return true;
    }


    //check if original companies state and modified are equal or not
    getUpdateWindowState = () => {
        // make clones first. i dont want to make any action to them directly
        const originalWagons = JSON.parse(JSON.stringify(this.props.wagonsReducer.wagons));
        const modifiedWagons = JSON.parse(JSON.stringify(this.state.wagons));

        if (originalWagons === null) {
            return 'hidden';
        }
        if (modifiedWagons === null) {
            return 'hidden';
        }
        if (this.arrayEqual(originalWagons, modifiedWagons) === false) {
            return 'visible';
        }
        return 'hidden'

    }
    onDataChange = (value, record, inputName) => {
        console.log('Value that want to change:'+value)
        //cloning wagons state to not work directly with it
        const wagonsClone = JSON.parse(JSON.stringify(this.state.wagons));
        wagonsClone.map((element, index) => {
            if (element.id === record.id) {
                if (inputName === "numberOfWagon") {
                    element.numberOfWagon = Number(value);
                } else if (inputName === "typeOfWagon") {
                    element.typeOfWagon = value;
                } else if (inputName === "liftingCapacityTons") {
                    element.liftingCapacityTons = Number(value);
                } else if (inputName === 'weight') {
                    element.weight = Number(value);
                }
            }
        });
        // console.log('Modified array is:' + JSON.stringify(wagonsClone));
        this.setState({
            wagons: wagonsClone
        },() => {
            console.log('Modified array is:'+JSON.stringify(this.state.wagons))
            const visibilityString = this.getUpdateWindowState();
            this.setState({
                visibleHeader: visibilityString
            });
        })
        // this.setState({
        //     wagons: wagonsClone
        // }, () => {
        //     console.log('Original array: ' + JSON.stringify(this.props.wagonsReducer.wagons));
        //     console.log('Modified array:' + JSON.stringify(this.state.wagons));
        //     // const visibilityString = this.getUpdateWindowState();
        //     // this.setState({
        //     //     visibleHeader: visibilityString
        //     // });
        // })
    }


    componentDidMount() {
        if (this.props.usersReducer.currentUser !== null) {
            this.props.getUserData(1, () => {
                if (this.props.userInfoReducer.role === 'Administrator') {
                    console.log('Admin is logged')
                    this.props.getWagonsByTransportation(this.props.match.params.id, () => {
                        const wagonsClone = JSON.parse(JSON.stringify(this.props.wagonsReducer.wagons));
                        this.setState({ wagons: wagonsClone }, () => {
                            console.log('Wagons setted to:' + this.state.wagons)
                        })
                    });
                } else {
                    this.props.history.push('/')
                }
            });

        } else {
            this.props.history.push('/')
        }
    }
    render() {
        const columns = [
            {
                title: 'Vagono numeris',
                dataIndex: 'numberOfWagon',
                width: '25%',
                render: (text, record, index) => (
                    <InputNumber
                        tyoe={'text'}
                        defaultValue={text}
                        value={text}
                        onChange={(e) => this.onDataChange(e, record, "numberOfWagon")}
                    />
                )

            },
            {
                title: 'Vagono tipas',
                dataIndex: 'typeOfWagon',
                width: '20%',
                render: (text, record, index) => (
                    <Input
                        type={'text'}
                        defaultValue={text}
                        value={text}
                        onChange={(e) => this.onDataChange(e.target.value,record,"typeOfWagon")}
                        />
                )
            },
            {
                title: 'Keliamoji galia(tonomis)',
                dataIndex: 'liftingCapacityTons',
                width: '25%',
                render: (text, record, index) => (
                    <InputNumber
                        tyoe={'text'}
                        defaultValue={text}
                        value={text}
                        onChange={(e) => this.onDataChange(e, record, "liftingCapacityTons")}
                    />
                )
            },
            {
                title: 'Svoris(tonomis)',
                dataIndex: 'weight',
                width: '30%',
                render: (text, record, index) => (
                    <InputNumber
                        tyoe={'text'}
                        defaultValue={text}
                        value={text}
                        onChange={(e) => this.onDataChange(e, record, "weight")}
                    />
                )
            },
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
                                    <Typography.Title style={{ ...aboutTitleTextStyle }}>Transportacijos vagonai</Typography.Title>
                                    <Typography.Text style={{ ...textStyle }}>
                                        Atvaizduojami pasirinktos transportacijos vagonai. Galima pridėti naujus vagonus,
                                        tačiau yra galimybė ir atnaujinti esamus duomenis.
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
                                        dataSource={this.state.wagons}
                                        pagination={true}
                                    // footer={() => (<Space style={{ display: 'flex', justifyContent: 'space-between' }}><Button size="large" style={{ ...buttonStyle }} onClick={this.onOpenAddCompany()}><PlusOutlined />Pridėti kompaniją</Button></Space>)}
                                    />
                                    {/* <Space style={{ display: 'flex', justifyContent: 'space-between' }}><Button size="large" style={{ ...buttonStyle }} onClick={showAddVagonModel}><PlusOutlined />Pridėti kompaniją</Button></Space> */}
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        usersReducer: state.usersReducer,
        userInfoReducer: state.userInfoReducer,
        wagonsReducer: state.wagonsReducer
    }
}
export default connect(mapStateToProps, { getUserData, getWagonsByTransportation })(withRouter(AdminWagonsByTransportationAdd));