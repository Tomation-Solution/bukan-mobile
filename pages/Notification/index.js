import { View, Text, FlatList } from 'react-native'
import React, {useState} from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'
import tw from 'tailwind-react-native-classnames'
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import TobBar from '../../components/topBar'
import TabbedButton from '../../components/button/TabbedButton'
import { SafeAreaView } from 'react-native-safe-area-context';
import BalanceCard from '../../components/account/BalanceCard';
import { EventsNotice } from './Events';
import { Messages } from './Messages';


const Notifications = ({navigation}) => {
    const Stack= createNativeStackNavigator()
    const [selected, setSelected] = useState(0)

    const handlePressed =(value) =>{
        if(value==1){
            navigation.navigate('eventNotice')
            setSelected(value)
        }else{
            navigation.navigate('messages')
            setSelected(value)
        }
    }
    
  return (
    <SafeAreaView style={tw`h-full bg-white px-2`}>
        <TobBar
            body={
                <View style={tw`flex-row justify-between`}>
                    <Ionicon onPress={()=>navigation.goBack()} name='ios-chevron-back' size={30}/>
                    <Text style={tw`my-auto mx-auto font-bold`}>Notifications</Text>
                    <View style={tw`w-12`}></View>
                </View>
            }
        />

      <View style={tw`flex-row justify-around` }>
        
       </View>
        <View style={tw`flex-row justify-around`}>
            <TabbedButton text='Messages' index={0} selected={selected} pressed={()=>handlePressed(0)}/>
            {/* <TabbedButton text='Events' index={1} selected={selected} pressed={()=>handlePressed(1)} /> */}
        </View> 
        <Stack.Navigator screenOptions={{headerShown:false}}> 
            <Stack.Screen name='messages' component={Messages}/>
            {/* <Stack.Screen name='eventNotice' component={EventsNotice}/>  */}
            
        </Stack.Navigator>
    </SafeAreaView>
  )
}

export default Notifications