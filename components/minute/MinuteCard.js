import { View, Text } from 'react-native'
import React from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'
import tw from 'tailwind-react-native-classnames'

export default function MinuteCard(props) {
  return (
    <View style={tw`bg-green-100 px-3 py-5 rounded-lg`}>
      <Ionicon name='ios-folder-open' style={tw`text-center text-green-900`} size={30}/>
      <Text style={tw`text-xs text-center text-green-900`} >{props.name}</Text>
    </View>
  )
}