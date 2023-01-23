import localStorage from "react-native-sync-localstorage";
import { View, Text , TextInput, FlatList, KeyboardAvoidingView} from 'react-native'
import React,{useState,useEffect} from 'react'
import tw from 'tailwind-react-native-classnames'
import MessageField from '../../../components/chat/MessageField'
import ChatsCard from '../../../components/chat/ChatsCard'
import { RequestCall } from '../../../connection/actions/user.actions'
import ChatList from '../../../components/chat/ChatList'

const General = ({navigation}) => {
  const [commitee, setCommitee] = useState([])
    const currentUser = localStorage.getItem('currentUser')
  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus', () => {
      RequestCall('get',null,callback,errcallback,'auth/manage-commitee-member/get_commitee/')
    });
    return unsubscribe
  },[])
  let checkCurrentUser_a_Member
  let connected_members

  const getUserId = () => {
    let result;
    commitee.forEach(el => {
      result = el.connected_members.find(i => i.id === currentUser.member_id) ? true : false
      connected_members = el.connected_members.find(i => i.id === currentUser.member_id)
    })

    return result
  }

  checkCurrentUser_a_Member = getUserId()

  const callback = (res) => {
    // console.log(res)
    setCommitee(res.data)
  }

  const errcallback= (res) => {
    console.log('err occured')
  }

  return (
    <View style={tw`h-full`}>
        <FlatList
            data={commitee}
            keyExtractor={ (item, index) => item.id }
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View style={tw`h-20`}></View>}
            renderItem={
                ({item}) => (
            <ChatList 
              name={item.name}
              navigation={navigation}
              to='general-single'
              isMember={checkCurrentUser_a_Member}
              passData={{id: connected_members !== undefined  ? connected_members.user_id : null, commitee: item}}
            />  
                )}
        />
    </View>
  )
}

export default General