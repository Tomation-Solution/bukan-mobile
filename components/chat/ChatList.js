import { View, Text, Image,Pressable } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const ChatList = (props) => {
  const navigateTo = (to,object) => {
    if(props.isMember === false){
      alert('You are not a member')
    }
    // if(props.isExco === true){
    //   props.navigation.navigate(to, object)
    // }
    else{
    if(object !== undefined){
      props.navigation.navigate(to, object)
    }else props.navigation.navigate(to)}
  }
  return (
    <Pressable onPress={()=> navigateTo(props.to, props.passData)} style={tw`rounded-md flex-row my-1 py-3 bg-gray-200`}>
      { props.image ?
      <Image style={tw`h-10  w-10 ml-2 rounded-full`} source={props.image}/>
      :
      <Image style={tw`h-8 w-8 rounded-full`} source={require('../../images/user.png')}/>
    }
      <View style={tw`border-gray-300 w-full border-b pb-2 px-2`}> 
          <Text style={tw`font-bold`}>{props.name}</Text>
          {/* <Text numberOfLines={1} style={tw`my-auto`}>{props.message}</Text> */}
      </View>
      {/* <Text style={tw`my-auto text-xs text-gray-500`}>3:30</Text> */}
    </Pressable>
  )
}

export default ChatList