import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Button, Row, Col, Card, Space, Typography, Input } from 'antd'
import { tableCardStyle, tableCardBodyStyle, buttonStyle } from '../styles/customStyles.js';
import moment from 'moment'
import { Link } from 'react-router-dom'
import LoginScreen from './LoginScreen'
import { getUserData } from '../redux/actions/userActions'

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

const cardTextStyle = {
    marginTop: 0,
    marginRight: 0,
    marginLeft: 0,
    marginBottom: '2px'
}

function SearchScreen({ location, history }) {
    const dispatch = useDispatch();
    const [search, setSearch] = useState({
        "transportationNumber": "",
        "transportationStatus": "",
        "transportationType": "",
        "transportationSubCode": 0,
        "cargoAcceptanceDate": moment().format("DD/MM/YYYY"),
        "movementStartDateInBelarusFrom": moment().format("YYYY/MM/DD"),
        "movementStartDateInBelarusTo": moment().format("YYYY/MM/DD"),
        "movementEndDateInBelarusFrom": moment().format("YYYY/MM/DD"),
        "movementEndDateInBelarusTo": moment().format("YYYY/MM/DD"),
        "etsngCargoCode": 0,
        "gngCargoCode": 0,
        "departureStationCode": 0,
        "departureCountryCode": 0,
        "destinationStationCode": 0,
        "destinationCountryCode": 0,
        "stationMovementBeginingBelarusCode": 0,
        "stationMovementEndBelarusCode": 0
    });


    const usersReducer = useSelector((state) => state.usersReducer);
    const { loading, error, currentUser } = usersReducer;//we want to distructure userLogin to these

    //check the query string. if there is then take left size of query which is number
    const redirect = location.search ? location.search.split('=')[1] : '/login';

    // const searchTransportations = () =>{
    //     history.push(`/transportations?transportationNumber=${search.transportationNumber}&cargoAcceptanceDate=${search.cargoAcceptanceDate}&movementStartDateInBelarusFrom=${search.movementStartDateInBelarusFrom}&movementStartDateInBelarusTo=${search.movementStartDateInBelarusTo}`)
    // }
    const newTo = {
        pathname: "/transportations",
        transportationNumber: search.transportationNumber,
        cargoAcceptanceDate: search.cargoAcceptanceDate,
        movementStartDateInBelarusFrom: search.movementStartDateInBelarusFrom,
        movementStartDateInBelarusTo: search.movementStartDateInBelarusTo,
        movementEndDateInBelarusFrom: search.movementEndDateInBelarusFrom,
        movementEndDateInBelarusTo: search.movementEndDateInBelarusTo,
        etsngCargoCode: search.etsngCargoCode,
        gngCargoCode: search.gngCargoCode,
        departureStationCode: search.departureStationCode,
        departureCountryCode: search.departureStationCode,
        destinationStationCode: search.destinationStationCode,
        destinationCountryCode: search.destinationCountryCode,
        stationMovementBeginingBelarusCode: search.stationMovementBeginingBelarusCode,
        stationMovementEndBelarusCode: search.stationMovementEndBelarusCode
    };
    useEffect(() => {
        if (currentUser) {
            // dispatch(getUserData(()=>{
            //     console.log('Got user data')
            // }));
            // console.log('Home screen has user')
        } else {
            history.push(redirect);
        }
    }, [history, redirect, currentUser]);



    return (
        <>
            <div style={{ marginTop: 45, marginBottom: 45 }}>
                <Col span={24} offset={3}>
                    <Row gutter={16}>
                        <Col span={16}>
                            <div style={{ marginRight: '40px' }}>
                                <Typography.Title style={{ ...aboutTitleTextStyle }}>Paieška</Typography.Title>
                                <Typography.Text style={{ ...textStyle }}>
                                    Parinkite parametrus pagal kuriuos ieškosite transportacijų
                                </Typography.Text>
                            </div>
                        </Col>
                    </Row>
                    {/* returns second column with table */}
                    {/* <FixedCostTable data={obj.types} countryVats={this.props.countryVats} category_title={obj.category_title} category_id={obj.category_id} /> */}
                    <Row gutter={16} style={{ marginTop: '15px' }}>
                        <Col span={10}>
                            <Card size={'small'} style={{ padding: '7px' }} bodyStyle={{ ...tableCardBodyStyle }} title={'Judėjimo pradžios data per baltarusija'}>
                                <p style={{ ...cardTextStyle }}>Nuo</p>
                                <Input defaultValue={search.movementStartDateInBelarusFrom} />
                                <p style={{ ...cardTextStyle }}>Iki</p>
                                <Input defaultValue={search.movementStartDateInBelarusTo} />
                            </Card>
                        </Col>
                        <Col span={10}>
                            <Card size={'small'} style={{ padding: '7px' }}
                                bodyStyle={{ ...tableCardBodyStyle }} title={'Judėjimo pabaigos data per baltarusija'}>
                                <p style={{ ...cardTextStyle }}>Nuo</p>
                                <Input defaultValue={search.movementEndDateInBelarusFrom} />
                                <p style={{ ...cardTextStyle }}>Iki</p>
                                <Input defaultValue={search.movementEndDateInBelarusTo} />

                            </Card>
                        </Col>
                    </Row>

                    <Row gutter={16} style={{ marginTop: '15px' }}>
                        <Col span={10}>
                            <Card size={'small'} style={{ padding: '7px' }} bodyStyle={{ ...tableCardBodyStyle }} title={'Krovinio tipas(ETSNG)'}>
                                <p style={{ ...cardTextStyle }}>Kodas</p>
                                <Input defaultValue={search.etsngCargoCode} />
                            </Card>
                        </Col>
                        <Col span={10}>
                            <Card size={'small'} style={{ padding: '7px' }}
                                bodyStyle={{ ...tableCardBodyStyle }} title={'Krovinio tipas(GNG)'}>
                                <p style={{ ...cardTextStyle }}>Nuo</p>
                                <Input defaultValue={search.gngCargoCode} />

                            </Card>
                        </Col>
                    </Row>

                    <Row gutter={16} style={{ marginTop: '15px' }}>
                        <Col span={10}>
                            <Card size={'small'} style={{ padding: '7px' }} bodyStyle={{ ...tableCardBodyStyle }} title={'Išvykimo stotis'}>
                                <p style={{ ...cardTextStyle }}>Kodas</p>
                                <Input defaultValue={search.departureStationCode} />
                            </Card>
                        </Col>
                        <Col span={10}>
                            <Card size={'small'} style={{ padding: '7px' }}
                                bodyStyle={{ ...tableCardBodyStyle }} title={'Atvykimo stotis'}>
                                <p style={{ ...cardTextStyle }}>Kodas</p>
                                <Input defaultValue={search.destinationStationCode} />
                            </Card>
                        </Col>
                    </Row>

                    {/* BC */}
                    <Row gutter={16} style={{ marginTop: '15px' }}>
                        <Col span={10}>
                            <Card size={'small'} style={{ padding: '7px' }} bodyStyle={{ ...tableCardBodyStyle }} title={'Judėjimo pradžios stotis(per Baltarusiją)'}>
                                <p style={{ ...cardTextStyle }}>Kodas</p>
                                <Input defaultValue={search.stationMovementBeginingBelarusCode} />
                            </Card>
                        </Col>
                        <Col span={10}>
                            <Card size={'small'} style={{ padding: '7px' }}
                                bodyStyle={{ ...tableCardBodyStyle }} title={'Judėjimo pabaigos stotis(per Baltarusiją)'}>
                                <p style={{ ...cardTextStyle }}>Kodas</p>
                                <Input defaultValue={search.stationMovementEndBelarusCode} />
                            </Card>
                        </Col>
                    </Row>
                    <Button size="large" style={{
                        borderRadius: '4px',
                        fontWeight: '600',
                        fontSize: '14px',
                        marginTop: '10px',
                        width: '220px',
                        height: '60px'
                    }}><Link to={newTo}>Ieškoti</Link></Button>

                </Col>
            </div>
        </>
    )
}

export default SearchScreen;