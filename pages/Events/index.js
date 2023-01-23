import { View, SafeAreaView,Text, FlatList, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React, {useState, useEffect} from 'react'
import tw from 'tailwind-react-native-classnames'
import NewsCard from '../../components/News/NewsCard'
import Feather from 'react-native-vector-icons/Feather'
import Ionicon from 'react-native-vector-icons/Ionicons'
import TabbedButton from '../../components/button/TabbedButton'
import State from './state'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TobBar from '../../components/topBar'
import National from './national'
import Member from './member'
// import { GetEvents } from '../../connection/actions/user.actions'
// import { GetEvents } from '../../connection/user.actions'

const Events = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [events, setEvents] = useState([])
  const Stack = createNativeStackNavigator()

  const data =[
        {id:1,title: 'Lorem ipsum dolor sit amet, ', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../../images/onboarding/phone.png')},
        {id:2,title: 'Lorem ipsum dolor sit amet, ', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../../images/onboarding/phone.png')},
        {id:3,title: 'Lorem ipsum dolor sit amet, ', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../../images/onboarding/phone.png')},
        {id:4,title: 'Lorem ipsum dolor sit amet, ', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../../images/onboarding/phone.png')},
        // {id:5,title: 'Lorem ipsum dolor sit amet, ', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../../images/onboarding/phone.png')},
      ]

      // useEffect(()=>{
      //   GetEvents(callback)
      // },[])

      // const callback = (res) =>{
      //   setEvents(res.data.data)
      // }

      const handleSelect =(index)=>{
        if(index==0){
          navigation.navigate('national')
          setSelectedIndex(index)
      }else if(index==1){
          navigation.navigate('state')
          setSelectedIndex(index)
      }else if(index==2){
        navigation.navigate('member')
          setSelectedIndex(index)
          // alert(index)
      }
        // setSelectedIndex(index);
        // if(index==0){
        //   // setSelectedIndex(index);
        //   navigation.navigate('state')
        // }
        
      }


  return (
    <SafeAreaView style={tw`px-2 h-full`}>
      <TobBar
        body={
          <View style={tw`flex-row justify-between px-3`}>
            <Ionicon name='ios-chevron-back' onPress={()=>navigation.goBack()} size={30}/>
            <Text style={tw`my-auto font-bold text-base`}>Events</Text>
            <Ionicon name='md-notifications' style={tw`text-purple-800`} size={30}/>
          </View>
        }
        />
      <View style={tw`flex-row justify-between bg-purple-100 my-3 rounded-lg py-2 mx-4 px-2`}> 
        <Ionicon name='ios-search' size={25} style={tw`mr-2`} />
        <TextInput
          placeholder='Search by date'
          style={tw`w-9/12`}
        />
        <Feather name='sliders' style={tw`my-auto`} size={20} color='purple'/>
      </View>
      <View style={tw`flex-row w-full justify-around`}>
        <TabbedButton text='National' 
          index={0} selected={selectedIndex} 
          setSelected={setSelectedIndex}
          pressed={()=>handleSelect(0)}
        />
        <TabbedButton text='State' 
          index={1} selected={selectedIndex} 
          setSelected={setSelectedIndex}
          pressed={()=>handleSelect(1)}  
        />
        <TabbedButton text='Member' 
          index={2} selected={selectedIndex} 
          setSelected={setSelectedIndex}
          pressed={()=>handleSelect(2)}
        />
      </View>
      {/* <View style={tw` flex-row mt-0 `}>
        <FlatList
            data={events}
            keyExtractor={ (item, index) => item.id }
            // contentContainerStyle={styles.container}
            numColumns={2}
            // scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            // contentOffset={1}
            renderItem={
                ({item}) => (
                //   <Pressable style={tw`w-1/2`}>
                  <NewsCard 
                    image={item.picture}
                    head={item.title}
                    body={item.body}
                    navigation={navigation}
                  />
                //   </Pressable>
                  )}/>
        </View> */}
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='national'>
          {/* <State data={data} navigation={navigation} /> */}
          <Stack.Screen name='national' component={National}/>
          <Stack.Screen name='state' component={State}/>
          <Stack.Screen name='member' component={Member}/>
        </Stack.Navigator>
    </SafeAreaView>
  )
}

export default Events