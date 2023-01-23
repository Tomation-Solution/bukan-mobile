import {useEffect, useState} from 'react'
import {Text, FlatList} from 'react-native'
import { MoneyCard } from '../../components/account/MoneyCard'
import { GetMyDues } from '../../connection/actions/user.actions'

export const Paid =()=>{
    const [list, setList] = useState(null)
    const [refresh, setRefresh] = useState(false)


        useEffect(()=>{
            setRefresh(!refresh)
            GetMyDues(false, callback)
        }, [])

        const callback=(res)=>{
            console.log(res.data.data)
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
                type='paid'
            />
                )}
        />
    )
}