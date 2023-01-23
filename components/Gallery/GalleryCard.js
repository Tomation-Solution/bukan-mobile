import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicon from 'react-native-vector-icons/Ionicons'

const GalleryCard = (props) => {
  return (
    <View style={{width:'95%', marginVertical:9,marginHorizontal:4}}>
    
        <Image style={tw`w-full h-28  rounded-t-3xl`} resizeMode='cover' resizeMethod='resize' source={{uri: props.image}}/>
      
        <Text style={tw`font-bold`}>{props.head}</Text>
        
    </View>
  )
}

export default GalleryCard