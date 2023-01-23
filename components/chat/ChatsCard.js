import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const ChatsCard = (props) => {
  return (
    props.isme === props.currentuser_id ?
    <View style={[tw`my-2 mx-2  flex-row justify-end w-11/12`  ,{maxWidth:'100%'}]}>
        
      <View style={[tw`flex-row`, {maxWidth:'85%'}]}> 
          
          <View style={[tw`bg-white py-2 px-4  rounded-xl `,{backgroundColor:'#365C2A'}]}>
              <Text style={tw`text-xs font-bold text-white`}>{props.message}</Text>
              {/* <Text style={tw`text-xs text-gray-300 text-right`}>{props.time}</Text> */}
          </View>
          {props.image !== undefined ? <Image style={tw`h-10  w-10 ml-2 rounded-full`} source={props.image}/>: null}
      </View>
    </View>:
    <View style={[tw`my-2 mx-2` , {maxWidth:'100%'}]}>
      {props.name ? <Text style={tw`font-bold py-2 `}>{props.name}</Text>:<></>}
      <View style={tw`flex-row`}> 
      {props.image ?<Image style={tw`h-10  w-10 mr-2 rounded-full`} source={props.image}/> : <></>}
          <View style={tw`bg-white py-2 px-4 rounded-xl `}>
              <Text style={tw`text-xs font-bold`}>{props.message}</Text>
              <Text style={tw`text-xs text-gray-500 text-right`}>{props.time}</Text>
          </View>
      </View>
    </View>
  )
}

export default ChatsCard