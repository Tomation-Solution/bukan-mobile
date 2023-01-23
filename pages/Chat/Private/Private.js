import { View, Text, FlatList } from 'react-native'
import React,{useEffect, useState} from 'react'
import localStorage from "react-native-sync-localstorage";
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'
import ChatsCard from '../../../components/chat/ChatsCard'
import ChatList from '../../../components/chat/ChatList'
import { GetMembers } from '../../../connection/actions/user.actions'

const Private = ({navigation}) => {
  const [chats, setChats] = useState([])
  const currentUserEmail = localStorage.getItem('user_email');

  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus', () => {
      GetMembers(callback,errcallback)
    });
    return unsubscribe
  },[])

  const callback = (res) => {
      setChats(res)
  }

  const errcallback= (res) => {
    console.log('err occured')
  }
  const currentUser = chats.filter(i => i.email === currentUserEmail)[0]
  const filterCurrentUser = chats.filter(i => i.email !== currentUserEmail)
  
  return (
    <View style={tw`bg-white`}>
        <View style={[tw`flex-row  px-2 py-2 rounded-lg mx-5 my-3`,{backgroundColor: "#93d3f482"}]}>
            <Ionicon  name='search' style={tw`text-gray-500`} size={24}/>
            <Text  style={tw`my-auto px-4 text-gray-500`}>Search</Text>
          </View>
      <FlatList
            data={filterCurrentUser}
            keyExtractor={ (item, index) => item.id }
            showsVerticalScrollIndicator={false}
            renderItem={
                ({item}) => (
            <ChatList 
              name={item.member_info.find(x => x.name === 'fullname')['value']}
              image={item.picture}
              navigation={navigation}
              to='private-single'
              passData={{id: currentUser !== undefined ? currentUser.user : null ,recipient: item}}
            />   
                )}
        />
    </View>
  )
}

export default Private