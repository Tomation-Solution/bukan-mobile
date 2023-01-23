import {useEffect, useState} from 'react'
import {Text, FlatList} from 'react-native'
import { MoneyCard } from '../../components/account/MoneyCard'
import { GetMyDues } from '../../connection/actions/user.actions'

export const Outstanding =()=>{
    const [list, setList] =useState(null)
    const [refresh, setRefresh] = useState(false)
    const data = [
        {id:1,name: 'Annual National Due ', date:'12/02/2022', amount:150000},
        {id:2,name: 'Annual National Due ', date:'12/02/2022', amount:150000},
        {id:3,name: 'Annual National Due ', date:'12/02/2022', amount:150000},
        {id:4,name: 'Annual National Due ', date:'12/02/2022', amount:150000},
        {id:5,name: 'Annual National Due ', date:'12/02/2022', amount:150000},
        {id:6,name: 'Annual National Due ', date:'12/02/2022', amount:150000},
        {id:7,name: 'Annual National Due ', date:'12/02/2022', amount:150000},
        
        ]

        useEffect(()=>{
            setRefresh(!refresh)
            GetMyDues(false, callback)
        }, [])

        const callback=(res)=>{
            // console.log(res.data.data)
            setList(res.data.data)
        }

    return(
        <FlatList
            data={list}
            keyExtractor={ (item, index) => item.id }
            showsVerticalScrollIndicator={false}
            renderItem={
                ({item}) => (
            <MoneyCard
                reason={item.due__Name}
                amount={item.amount}
                date={item.date}
                type='outstanding'
            />
                )}
        />
    )
}