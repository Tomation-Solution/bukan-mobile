import {useEffect, useState} from 'react'
import {View, Text, FlatList,TextInput} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import tw from 'tailwind-react-native-classnames'
import { MemberCard } from '../../components/members/MemberCard'
import { GetMembers } from '../../connection/actions/user.actions'


export const Members  =({navigation})=>{
    const data =[
        {id:1,name: 'LSteve Job', dept:'Accounting', year:'1998'},
        {id:2,name: 'LSteve Job', dept:'Accounting', year:'1998'},
        {id:3,name: 'LSteve Job', dept:'Accounting', year:'1998'},
        {id:4,name: 'LSteve Job', dept:'Accounting', year:'1998'},
        {id:5,name: 'LSteve Job', dept:'Accounting', year:'1998'},
        {id:6,name: 'LSteve Job', dept:'Accounting', year:'1998'},
        {id:7,name: 'LSteve Job', dept:'Accounting', year:'1998'},
        {id:8,name: 'LSteve Job', dept:'Accounting', year:'1998'},
        {id:9,name: 'LSteve Job', dept:'Accounting', year:'1998'},
        {id:10,name: 'LSteve Job', dept:'Accounting', year:'1998'},
        {id:11,name: 'LSteve Job', dept:'Accounting', year:'1998'},
        
      ]

    const [members, setMembers] = useState(null)
    const [refresh, setRefresh] = useState(false)


    useEffect(()=>{
        setRefresh(!refresh)
        GetMembers(false, callback)
    },[])

    const callback =(res)=>{
        setMembers(res.data.data[0].members.map(e=>e))
        // console.log(res.data.data[0].members.map(e=>e))÷
        // console.log(res.data.data[0].members.map(e=>e.memeber_info.map(f=>f)))
    }
    return (
        <SafeAreaView>
            <View style={tw`flex-row justify-between bg-green-100 p-3 mx-4 my-3`}>
                <Ionicon name='ios-search' size={25} style={tw`mr-2`} />
                <TextInput
                placeholder='Search by date'
                style={tw`w-9/12`}
                />
                <Feather name='sliders' style={tw`my-auto`} size={20} color='#365C2A'/>
            </View>
            <FlatList
                data={members}
                keyExtractor={ (item, index) => item.id }
                showsVerticalScrollIndicator={false}
                renderItem={
                    ({item}) => (
                        <MemberCard
                            name={item.memeber_info.map(f=>{if(f.name=='First Name' || f.name=='Second Name' ) {return f.value + ' '}})}
                            value={item.memeber_info.map(f=>f)}
                            // item={item.memeber_info.map(f=>f.name)}
                            dept={item.dept}
                            year={item.year}
                            navigation={navigation}
                            // year={item.year}
                            // navigation={navigation}
                        />
                    )}
                    
            />
            <View style={tw`bg-white `}>
                <Text>Members</Text>
            </View>
        </SafeAreaView>

    )
}