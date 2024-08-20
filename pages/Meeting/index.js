import { View, SafeAreaView,Text, FlatList, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React, {useState, useEffect} from 'react'
import tw from 'tailwind-react-native-classnames'
import Feather from 'react-native-vector-icons/Feather'
import Ionicon from 'react-native-vector-icons/Ionicons'
import TabbedButton from '../../components/button/TabbedButton'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TobBar from '../../components/topBar'
import ScheduledMeeting from './scheduledMeeting'
import RescheduledMeeting from './resheduledMeeting'

const Meetings = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [events, setEvents] = useState([])
  const Stack = createNativeStackNavigator()

      // useEffect(()=>{
      //   GetEvents(callback)
      // },[])

      // const callback = (res) =>{
      //   setEvents(res.data.data)
      // }

      const handleSelect =(index)=>{
        if(index==0){
          navigation.navigate('scheduled_meeting')
          setSelectedIndex(index)
      }else if(index==1){
          navigation.navigate('rescheduled_meeting')
          setSelectedIndex(index)
      }
      // else if(index==2){
      //   navigation.navigate('member')
      //     setSelectedIndex(index)
      //     // alert(index)
      // }
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
            <Ionicon name='chevron-back' onPress={()=>navigation.goBack()} size={30}/>
            <Text style={tw`my-auto font-bold text-base`}>Meetings</Text>
              <Ionicon name='notifications' onPress={()=>navigation.navigate('notifications')} style={tw`text-green-800`} size={30}/>
          </View>
        }
        />
      <View style={tw`flex-row justify-between bg-purple-100 my-3 rounded-lg py-2 mx-4 px-2`}> 
        <Ionicon name='search-outline' size={25} style={tw`mr-2`} />
        <TextInput
          placeholder='Search by date'
          style={tw`w-9/12`}
        />
        <Feather name='sliders' style={tw`my-auto`} size={20} color='purple'/>
      </View>
      <View style={tw`flex-row w-full justify-around`}>
         <TabbedButton text='Scheduled'
          index={0}
          selected={selectedIndex}
          setSelected={setSelectedIndex}
          pressed={()=>handleSelect(0)}
        />
        <TabbedButton text='Rescheduled'
          index={1}
          selected={selectedIndex} 
          setSelected={setSelectedIndex}
          pressed={()=>handleSelect(1)}
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
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='scheduled_meeting'>
          {/* <State data={data} navigation={navigation} /> */}
          <Stack.Screen name='scheduled_meeting' component={ScheduledMeeting}/>
          <Stack.Screen name='rescheduled_meeting' component={RescheduledMeeting}/>
        </Stack.Navigator>
    </SafeAreaView>
  )
}

export default Meetings