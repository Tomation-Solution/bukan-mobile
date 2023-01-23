import {TouchableOpacity,Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const TabbedButton = (props) => {
  return (
    <TouchableOpacity 
        style={props.index==props.selected ? [tw`py-1 my-2 px-5 rounded-3xl`,{backgroundColor:'#0092dc'}] : tw` py-2.5 my-2 rounded-3xl`} 
        onPress={props.pressed}
    >
      <Text style={props.index==props.selected ? tw`text-white text-center my-auto` : [tw`font-bold text-center my-auto`,{color:'#365C2A'}]}>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default TabbedButton