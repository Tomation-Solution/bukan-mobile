import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicon from 'react-native-vector-icons/Ionicons'

const NewsCard = (props) => {
    const [isLiked, setIsLiked] = useState(false)
  return (
    <Pressable onPress={()=>props.navigation.navigate(props.to, {props})} style={{width:'48%', marginVertical:9,marginHorizontal:5}}>
    { props.image ?<Image  style={tw`w-full h-40  rounded-t-2xl`} resizeMode='cover' resizeMethod='resize' 
    // source={props.image}
    source={{uri:props.image}}
    />
        : 
        <View style={tw`w-full h-20 bg-purple-100 rounded-t-xl`}>
          <Ionicon name='image' style={tw`text-center text-4xl text-purple-300 mt-2`}/>  
        </View>
        }
        <View style={[tw`flex-row justify-end -mt-8 py-1 px-1`,{backgroundColor:'rgba(0, 0, 0, .3)'}]}>
            <FontAwesome name='commenting-o' style={tw`px-4 text-white`} size={20}/>
            { isLiked ?
            <Ionicon name='heart-sharp' color='#f00' onPress={()=>setIsLiked(!isLiked)} size={22}/> :
            <Ionicon name='heart-outline' color='#fff' onPress={()=>setIsLiked(!isLiked)} size={22}/>}
        </View>
        <Text style={tw`font-bold`}>{props.head}</Text>
        {/* <Text style={tw`text-justify text-xs`}>{props.paragraphs[0].paragraph < 50 ? props.body : props?.body?.substr(0,49)+'...'}</Text> */}
        
    </Pressable>
  )
}

export default NewsCard