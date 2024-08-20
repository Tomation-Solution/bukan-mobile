import { View, Text, FlatList } from 'react-native'
import React, {useState} from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'
import tw from 'tailwind-react-native-classnames'
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import TobBar from '../../components/topBar'
import TabbedButton from '../../components/button/TabbedButton'
import { setSelectedLog } from 'react-native/Libraries/LogBox/Data/LogBoxData'
import ChatsCard from '../../components/chat/ChatsCard'
import MessageField from '../../components/chat/MessageField'
// import General from './General'
import { StackActions } from '@react-navigation/native';
// import Private from './Private';
// import PrivateSingle from './privateSingle';
import { SafeAreaView } from 'react-native-safe-area-context';
import BalanceCard from '../../components/account/BalanceCard';
import { Paid } from './Paid';
import { Outstanding } from './Outstanding';


const MyAccount = ({navigation}) => {
    const Stack= createNativeStackNavigator()
    const [selected, setSelected] = useState(0)

    const handlePressed =(value) =>{
        if(value==1){
            navigation.navigate('outstanding')
            setSelected(value)
        }else{
            navigation.navigate('paid')
            setSelected(value)
        }
    }
    
  return (
    <SafeAreaView style={tw`h-full bg-white px-2`}>
        <TobBar
            body={
                <View style={tw`flex-row justify-between`}>
                    <Ionicon onPress={()=>navigation.goBack()} name='chevron-back' size={30}/>
                    <Text style={tw`my-auto mx-auto font-bold`}>My Account</Text>
                    <View style={tw`w-12`}></View>
                </View>
            }
        />

        {/* <View style={tw`flex-row justify-around`}>
            <TabbedButton text='General' index={0} selected={selected} pressed={()=>handlePressed(0)}/>
            <TabbedButton text='Private Chat' index={1} selected={selected} pressed={()=>handlePressed(1)} />
        </View> */}
        {/* <Stack.Navigator screenOptions={{headerShown:false}}> */}
            {/* <Stack.Screen name='general-chat' component={General}/>
            <Stack.Screen name='private-chat' component={Private}/> */}
            {/* <View style={tw`h-3/4`}>
                <General/>
            </View> */}
        {/* </Stack.Navigator> */}
      {/* <MessageField/> */}
      <View style={tw`flex-row justify-around py-2` }>
        <BalanceCard 
            amount={0} description='Total Paid'
             color='text-white'
             icon={<Ionicon name='wallet' size={25}  style={tw`my-auto text-white mr-2`}/>}
             bgc='#0089ce'
        />
        <BalanceCard 
            amount={0} description='Outstanding' 
            color='text-green-900'
            bgc='#93d3f482'
            icon={<Ionicon name='wallet' size={25}  style={tw`my-auto text-green-900 mr-2`}/>}
        />
       </View>
        <View style={tw`flex-row justify-around pt-3`}>
            <TabbedButton text='Paid' index={0} selected={selected} pressed={()=>handlePressed(0)}/>
            <TabbedButton text='Outstanding' index={1} selected={selected} pressed={()=>handlePressed(1)} />
        </View> 
        <Stack.Navigator screenOptions={{headerShown:false}}> 
            <Stack.Screen name='paid' component={Paid}/>
            <Stack.Screen name='outstanding' component={Outstanding}/> 
            
        </Stack.Navigator>
    </SafeAreaView>
  )
}

export default MyAccount