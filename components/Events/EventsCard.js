import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicon from 'react-native-vector-icons/Ionicons'

const EventsCard = (props) => {
    const [isLiked, setIsLiked] = useState(false)
  return (
    <Pressable onPress={()=>props.navigation.navigate(props.to, {item: props.item})} style={{width:'48%', marginVertical:9,marginHorizontal:5}}>
    
        <Image style={tw`w-full h-20  rounded-t-2xl`} resizeMode='cover' resizeMethod='resize' source={props.image}/>
       
        <Text style={tw`font-bold`}>{props.startdate+" - "+props.start_time}</Text>
        <Text style={tw`font-bold`}>{props.head}</Text>
        {props.body ? <Text style={tw`text-justify text-xs`}>{props.body < 50 ? props.body : props.body.substring(0,49)+'...'}</Text> 
        
      : null }
        
    </Pressable>
  )
}

export default EventsCard