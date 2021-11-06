import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { Modal, Button, Form, Space, Select, Input, Table,Row,Col,Card,Typography } from 'antd';
import { tableCardStyle, tableCardBodyStyle, buttonStyle } from '../styles/customStyles';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { PlusOutlined } from '@ant-design/icons';
import { getUserData } from '../redux/actions/userActions';
import { getWagonsByTransportation, getlWagons, getWagons } from '../redux/actions/wagonsActions';
import UnsavedChangesHeader from '../Component/UnsavedChangesHeader';

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

function AdminWagonsByTransportationAdd(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [wagons, setWagons] = useState([]);
    const [transportationId, setTransportationId] = useState('');

    //getting redux states
    const usersReducer = useSelector((state) => state.usersReducer);
    const userInfoReducer = useSelector((state) => state.userInfoReducer);
    const wagonsReducer = useSelector((state) => state.wagonsReducer);


    const onBack = () => {
        // props.onClose();\
        props.onClose();
    }
    const onCancel = () => {
        props.onClose();
    }
    const saveChanges = () => {
        // const name = this.state.name;
        // const postObj = {
        //     'name': name
        // }
        // this.props.save(postObj);
        // this.props.onClose();
    }

    useEffect(() => {
        console.log('Transportation id:' + props.match.params.id)
        setTransportationId(props.match.params.id);
        if (usersReducer.currentUser !== null) {
            dispatch(getUserData(1, () => {
                if (userInfoReducer.role === 'Administrator') {
                    console.log('Admin is logged')
                    dispatch(getWagonsByTransportation(props.match.params.id,()=>{
                        const wagonsClone = JSON.parse(JSON.stringify(wagonsReducer.wagons))
                        setWagons(wagonsClone);
                    }));
                } else {
                    history.push('/')
                }
            }));

        } else {
            history.push('/')
        }
    }, [history, dispatch, props.match.params.id,usersReducer.currentUser, userInfoReducer.role]);
    const columns = [
        {
            title: 'Vagono numeris',
            dataIndex: 'numberOfWagon',
            width: '25%',
            render: (text, record, index) => (
                <Input
                    tyoe={'text'}
                    defaultValue={text}
                />
            )
        },
        {
            title: 'Vagono tipas',
            dataIndex: 'typeOfWagon',
            width: '20%',
            render: (text, record, index) => (
                <Input
                    type={"text"}
                    defaultValue={text}
                // onChange={(e) => this.onDataChange(e.target.value, record)}
                // value={text}
                // onChange={e => this.onFixedChange(e.target.value, record, "price")}
                />
            )
        },
        {
            title: 'Keliamoji galia(tonomis)',
            dataIndex: 'liftingCapacityTons',
            width: '25%',
            render: (text, record, index) => (
                <Input
                    tyoe={'text'}
                    defaultValue={text}
                />
            )
        },
        {
            title: 'Svoris(tonomis)',
            dataIndex: 'weight',
            width: '30%',
            render: (text, record, index) => (
                <Input
                    tyoe={'text'}
                    defaultValue={text}
                />
            )
        },
    ]
    return (
        <>
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
                                        dataSource={wagons}
                                        pagination={true}
                                    // footer={() => (<Space style={{ display: 'flex', justifyContent: 'space-between' }}><Button size="large" style={{ ...buttonStyle }} onClick={this.onOpenAddCompany()}><PlusOutlined />Pridėti kompaniją</Button></Space>)}
                                    />
                                    {/* <Space style={{ display: 'flex', justifyContent: 'space-between' }}><Button size="large" style={{ ...buttonStyle }} onClick={this.showAddCompanyModel}><PlusOutlined />Pridėti kompaniją</Button></Space> */}
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </div>
        </>
    )
}
export default AdminWagonsByTransportationAdd;