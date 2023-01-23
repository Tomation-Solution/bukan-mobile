import React, {useState} from 'react';
import { View, Image,SafeAreaView, ScrollView,Text, Switch,Pressable } from 'react-native';
import { DrawerItem} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCom from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import tw from 'tailwind-react-native-classnames';
import Logout from '../../Modal/Logout';
import ModalTemplate from '../../Modal';
import Loading from '../../Modal/Loading';


const handlePress=(props)=>{
    props.navigation.toggleDrawer()
    props.navigation.navigate(props.to)
    props.setSelected(props.id)
}

const DrawerButton =(props)=>{
    return(
        <DrawerItem activeTintColor='#365C2A'
            key={props.id}
            style={tw`${props.bg}`}
                label={props.label}
                onPress={() => handlePress(props)}
                icon={({ focused, color, size }) => (props.icon) }
            />
    )
}
export default function CustomDrawerList({navigation}) {
    // const navigation = useNavigation();
    const [selected, setSelected] = useState(1)
    const [visible, setVisible] = useState(false)
    const [showDropdown, setshowDropdown] = useState(false)
    const [showPlatforms, setshowPlaform] = useState(false)
    const [currentPlatform, setCurrentPlatform] =useState('Member')
    const [showComiittee, setShowCommittee] = useState(false)
    const [directory, setDirectory] =useState({member:false, exco:false,comm:false})
    const [loadVisible, setLoadVisible] = useState(false)
    const [loadMessage, setLoadMessage] = useState('')

    const handlePlatform =(platform)=>{
        setCurrentPlatform(platform)
        setshowPlaform(false)
    }
    const drawerData=[
        // {id:1, label:'Home', to:'dashboard', icon:<Ionicon name='md-home' size={22} color={'grey'}/>},
        {id:2, label:'Events', to:'events', icon:(<MaterialIcon name='event-available' style={tw`text-center `} color={'grey'} size={22}/>)},
        {id:3, label:'News', to:'news', icon:<MaterialCom name="message-alert" size={22} color={'grey'}
        />}
    // {id:9, label:'Logout', to:'subscribe'},
    ]

    const drawerData2 =[
        {id:5, label:'Gallery', to:'gallery', icon:<FontAwesome name="photo" size={22} color={'grey'}
        /> },
        {id:6, label:'Election Portal', to:'election', icon:<MaterialIcon name="how-to-vote" size={22} color={'grey'}
        />},
        // {id:7, label:'Subscribe', to:'subscribe', icon:<MaterialIcon name="subscriptions" size={22} color={'grey'}
        // />},
        {id:8, label:'Support', to:'support', icon:<MaterialIcon name="headset-mic" size={22} color={'grey'}
     /> },
     {id:7, label:'About', to:'about', icon:<MaterialIcon name="info" size={22} color={'grey'}
     /> },
    ]

    const options =[
        {id:9, label:'Exco Directory', to:'exco'},
        {id:10, label:'Publications', to:'publication'},
        {id:11, label:'Minutes', to:'minutes'},
       
    ]

    const committeeList =[
        {id:9, label:'Welfare Committee', to:'exco'},
        {id:10, label:'Planning Committee', to:'publication'},
    ]

    const handleSub=(to)=>{
        setshowDropdown(false)
        navigation.toggleDrawer()
        navigation.navigate(to)
        // props.setSelected(props.id)
    }

    const handleSwitch=(val)=>{
        if(val==1){
            setSelected(0)
            if(!directory.member){
                setDirectory({exco:false, member:true,comm:false})
                navigation.navigate('Home', {query:{type:'member', value: 'True'}, is_load: true,val: val})
            }else{
                setDirectory({exco:false, member:false,comm:false})
            }
        }else if(val==2){
            setSelected(0)
            if(!directory.exco){
                setDirectory({member:false, exco:true,comm:false})
                navigation.navigate('Home', {query: {type:'is_exco', value: 'True'}, is_load: true,val: val})
            }else{
                setDirectory({member:false, exco:false,comm:false})
            }
        }else{
            setSelected(0)
            if(!directory.comm){
                setDirectory({member:false, comm:true,exco:false})
                setShowCommittee(false)
            }else setDirectory({member:false, comm:false,exco:false})
        }
    }

    const handleCommitteeSub =(message)=>{
        setLoadMessage(message)
        setShowCommittee(false)
        navigation.toggleDrawer();
        setLoadVisible(true)
    }


  return (
        <SafeAreaView style={{flex:1}}>
            
             <ModalTemplate 
                visible={visible}
                body={<Logout setVisible={setVisible}/>}
                />

            <ModalTemplate 
                visible={loadVisible}
                body={<Loading setLoadVisible={setLoadVisible} 
                name={loadMessage} 
                to={()=>navigation.navigate('Home',{type:'committee'})}
                />}
            /> 
            <View style={tw`border-b  flex-row justify-around border-gray-300 mx-4 py-1.5 mb-6 w-10/12`}>
                  
                  <Image style={tw` mx-auto`} source={require('../../../images/Logo/Bukka_Splash.png')}/>
                
            </View>
            <ScrollView>

            <Pressable onPress={()=>handleSwitch(1)} style={tw` flex-row mx-5 justify-between`}>
                <View style={tw`flex-row`}>
                    <MaterialIcon name='groups' style={tw`mr-8 my-auto text-gray-500`} size={22} />
                    <Text style={tw`my-auto`}>Members Zone</Text>
                </View>
                <Switch value={directory.member} style={tw`my-auto`} />
            </Pressable>
            
            <Pressable onPress={()=>handleSwitch(2)} style={tw`my-1 flex-row justify-between mx-5`}>
                <View style={tw`flex-row`}>
                    <Ionicon name='person' style={tw`mr-8 my-auto text-gray-500`} size={22} />
                    <Text style={tw`my-auto`}>Excos Zone</Text>
                </View>
                <Switch value={directory.exco} style={tw`my-auto`} />
            </Pressable>

            <Pressable onPress={()=>handleSwitch(3)} style={tw`my-1 flex-row justify-between mx-5`}>
                <View style={tw`flex-row`}>
                    <Ionicon name='people' style={tw`mr-8 my-auto text-gray-500`} size={22} />
                    <Text style={tw`my-auto`}>Committee Zone</Text>
                </View>
                <Switch value={directory.comm} style={tw`my-auto`} />
               
            </Pressable>
             { showComiittee ? committeeList.map(e=>
            <Pressable key={e.id} onPress={()=>handleCommitteeSub(e.label)} style={tw`w-full ml-12 my-1`}>
                <Text style={tw`text-gray-600 ml-7`}>{e.label}</Text>
            </Pressable>):<></>}

            { drawerData.map(e=>
            
                <DrawerButton
                    label={e.label}
                    navigation={navigation}
                    id={e.id}
                    key={e.id}
                    to={e.to}
                    setSelected={setSelected}
                    selected={selected}
                    bg={selected == e.id ?'bg-green-200':''}
                    icon={e.icon}
                />)}
            
            
            <Pressable onPress={()=>setshowDropdown(!showDropdown)} style={tw`my-4 flex-row mx-5`}>
                <Ionicon name='ios-file-tray-full' style={tw`mr-8 my-auto text-gray-500`} size={22} />
                <Text style={tw`text-gray-500`}>Resources</Text>
                <Ionicon name={showDropdown?'md-caret-up-outline':'md-caret-down-outline'} style={tw` my-auto px-2 text-gray-400`}/>
            </Pressable>
            { showDropdown ? options.map(e=>
            <Pressable key={e.id} onPress={()=>handleSub(e.to)} style={tw`w-full ml-12 my-1`}>
                <Text style={tw`text-gray-600`}>{e.label}</Text>
            </Pressable>):<></>}

            { drawerData2.map(e=>
            <DrawerButton
                label={e.label}
                key={e.id}
                navigation={navigation}
                id={e.id}
                to={e.to}
                setSelected={setSelected}
                selected={selected}
                bg={selected == e.id ?'bg-green-200':''}
                icon={e.icon}
            />)}
            
            <Pressable onPress={()=>setVisible(true)} style={tw`my-4 flex-row mx-5`}>
                <MaterialIcon name='logout' style={tw`mr-8 my-auto text-gray-500`} size={22} />
                <Text>Logout</Text>
            </Pressable>
            </ScrollView>
        </SafeAreaView>
  );
}
