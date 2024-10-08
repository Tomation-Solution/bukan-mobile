import { View, Text , Image, Keyboard, FlatList, KeyboardAvoidingView} from 'react-native'
import React, {useEffect, useRef, useState} from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'

import MessageField from '../../../components/chat/MessageField'
import ChatsCard from '../../../components/chat/ChatsCard'
import TobBar from '../../../components/topBar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RequestCall } from '../../../connection/actions/user.actions'


const GeneralSingle = ({navigation,route}) => {
    const currentuser_id = route.params.id
    const commitee = route.params.commitee
    const [message,setMessage] = useState({
      send_user_id: currentuser_id,
      is_group: false
    })
    const [allmessages, setAllmessages] = useState([])
    var ws = new WebSocket('wss://rel8-backend-production.up.railway.app/ws/commitee_chat/buk/'+commitee.id+'/')
    const inputRef = useRef()
    const flatListRef = useRef()

    useEffect(() => {
      RequestCall('get',null,callback,errcallback,`chat/?room_name=${commitee}`)
      ws.onopen = (e) => {
        // connection opened
        console.log('connecting',e)
      };

      ws.onmessage = (e) => {
        // a message was received
        const response = JSON.parse(e.data)
        setAllmessages(prevState => [...prevState, response])
        inputRef.current.clear()
      };

      ws.onclose = (e) => {
        console.log('err',e)
      }
    },[])

    const callback = (response) => {
      setAllmessages(response.data)
    }

    const errcallback = (err) => {
      console.log(err.response)
    }

    const sendMessage = () => {
      console.log(message)
      try{
       ws.send(JSON.stringify(message))
        setMessage({...message, message: ''})
      }
      catch(e){
        console.log('catch',e)
      }
    }


  return (
    <SafeAreaView style={tw`h-full bg-green-100`}>
      <TobBar
        body={
          <View style={tw` flex-row`}>
            <Ionicon name='chevron-back' size={30} onPress={()=>navigation.goBack()}/>
            {/* <Image style={tw`h-10 w-10 ml-5 rounded-full`} source={require('../../images/onboarding/phone.png')}/> */}
            <Text style={tw` mx-2 font-bold my-auto`}>
              {commitee.name}
              </Text>
          </View>
        }
      />
       <FlatList
          ref={flatListRef}
            data={allmessages}
            keyExtractor={ (item, index) => index }
            showsVerticalScrollIndicator={false}
            renderItem={
                ({item}) => (
            <ChatsCard 
                    // name={item.name}
                    // image={item.picture}
                    message={item.message}
                    isme={item.user__id !== undefined ? item.user__id : item.send_user_id}
                    currentuser_id={currentuser_id}
                    item={item}
            />    
                )}
                getItemLayout={(_, index) => (
                  {length: allmessages.length, offset: 0 * index, index}
                )}
        />
        <KeyboardAvoidingView behavior='position' contentContainerStyle={tw`top-0`}>
        <View style={tw`left-1 w-full`}>
              <MessageField 
              sendMessage={sendMessage}
              inputRef={inputRef}
              setMessage={setMessage}
              message={message}
              />
        </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default GeneralSingle