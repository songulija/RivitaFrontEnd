import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { Table, Space, Input} from 'antd';
import {getUserData} from '../redux/actions/userActions.js'
import {getCompanies} from '../redux/actions/companiesActions.js'

function CompaniesScreen({history,location}){
    const dispatch = useDispatch();
    const [companies, setCompanies] = useState([]);
    const [user, setUser] = useState(null);

    const usersReducer = useSelector((state)=>state.usersReducer)
    const userInfoReducer = useSelector((state) => state.userInfoReducer)
    const companiesReducer = useSelector((state)=> state.companiesReducer)

    const redirect = location.search ? location.search.split('=')[1] : '/';
    // if history or dispatch is called it will trigger useEffect once more. If currentUser or companies is 
    // changed it will trigger it too
    useEffect(()=>{
        console.log('Companies screeeeen')
        if(usersReducer.currentUser !== null){
            dispatch(getUserData(1,()=>{
                const userData = JSON.parse(JSON.stringify(userInfoReducer));
                setUser(userData);
                // only admin can get Companies data. No other users
                dispatch(getCompanies(1, ()=>{
                    const companiesData = JSON.parse(JSON.stringify(companiesReducer.companies));
                    setCompanies(companiesData);
                }));
            }));
        }else{
            history.push(redirect);
        }

    },[history,dispatch,usersReducer.currentUser,userInfoReducer.user]);

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
                    dataSource={companies}
                    pagination={false}
                 />
            </div>
        </>
    )
}

export default CompaniesScreen;
