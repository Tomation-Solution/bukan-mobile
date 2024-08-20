import { View, Text, FlatList } from 'react-native'
import React, {useState} from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'
import tw from 'tailwind-react-native-classnames'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import TobBar from '../../components/topBar'
import TabbedButton from '../../components/button/TabbedButton'
import { setSelectedLog } from 'react-native/Libraries/LogBox/Data/LogBoxData'
import ChatsCard from '../../components/chat/ChatsCard'
import MessageField from '../../components/chat/MessageField'
import General from './General/General'
import { StackActions } from '@react-navigation/native';
import Private from './Private/Private';
// import PrivateSingle from './privateSingle';
import { SafeAreaView } from 'react-native-safe-area-context';


const Chat = ({navigation}) => {
    const Stack= createNativeStackNavigator()
    const [selected, setSelected] = useState(0)
    const Tab = createMaterialTopTabNavigator();
    const [menuDisplay, setMenuDisplay] = useState(false);
    const [settingsMenu, setSettingsMenu] =  useState(false);
    const [selectedMember,setSelectedMember] = useState([])

    const handlePressed =(value) =>{
        if(value==1){
            navigation.navigate('private-chat')
            setSelected(value)
        }else{
            navigation.navigate('general-chat')
            setSelected(value)
        }
    }

    const DefualtMenu = () => {
        return (
            <>
            <Ionicon onPress={()=>navigation.goBack()} name='chevron-back' size={30}/>
                    <Text style={tw`my-auto mx-auto font-bold`}>Chat</Text>
                    <View>
                        <Ionicon onPress={()=> menuDisplay ? setMenuDisplay(false) : setMenuDisplay(true)} name='ellipsis-vertical' size={25}/>
                        {menuDisplay ? <View style={[tw`w-20 bg-white z-40 top-7 border border-gray-400 right-2 absolute px-1.5 py-2`]}>
                            <Text onPress={() => {setSettingsMenu(!settingsMenu);
                            setMenuDisplay(false)}} style={tw`font-bold text-gray-600`}>Settings</Text>
                        </View>: null
                        }
                    </View>
                    </>
        )
    }

    const SettingsMenu = () => {
        <>
            <Text>{selectedMember.length}</Text>
            <Text>Select Members to block</Text>
        </>
    }


    
  return (
    <SafeAreaView style={tw`h-full bg-white px-2`}>
        <TobBar
            body={
                <View style={tw`flex-row justify-between`}>
                    <DefualtMenu />
                </View>
            }
        />

        <View style={tw`flex-row justify-around`}>
            <TabbedButton text='General' index={0} selected={selected} pressed={()=>handlePressed(0)}/>
            <TabbedButton text='Private Chat' index={1} selected={selected} pressed={()=>handlePressed(1)} />
        </View>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='general-chat' component={General}/>
            <Stack.Screen name='private-chat' component={Private}/>
        </Stack.Navigator>
    </SafeAreaView>
  )
}

export default Chat