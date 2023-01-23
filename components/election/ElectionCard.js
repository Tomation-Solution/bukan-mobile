import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Ionicon from 'react-native-vector-icons/Ionicons'

export default function ElectionCard(props) {
  return (
    <Pressable onPress={()=>props.navigation.navigate(props.to, {id:props.id})} style={[{width:'48%', marginVertical:9,marginHorizontal:5}, tw`border border-purple-200 rounded-lg   py-3`]}>
    { props.image ?
        <Image style={tw`w-full h-40  rounded-2xl`} resizeMode='cover' resizeMethod='resize' source={require('../../images/onboarding/guy.png')}/>
    : 
    <Ionicon name='heart-dislike-circle' style={tw`text-purple-300 text-center`} size={70} />

    }
        {/* <View style={[tw`flex-row justify-end -mt-8 py-1 px-1`,{backgroundColor:'rgba(0, 0, 0, .3)'}]}>
            <FontAwesome name='commenting-o' style={tw`px-4 text-white`} size={20}/>
            { isLiked ?
            <Ionicon name='ios-heart-sharp' color='#f00' onPress={()=>setIsLiked(!isLiked)} size={22}/> :
            <Ionicon name='ios-heart-outline' color='#fff' onPress={()=>setIsLiked(!isLiked)} size={22}/>}
        </View> */}
        <Text style={tw` text-base text-gray-700 pt-2 text-center`}>{props.head}</Text>
        {/* <Text style={tw`font-bold text-center text-gray-500 py-1`}>portfolio - {props.portfolio}</Text> */}
        {/* <Text style={tw`font-bold pb-1`} numberOfLines={1}>{props.company}</Text> */}
        {props.body &&
        <Text numberOfLines={2} style={tw`text-justify text-center text-xs`}>{props.body}</Text>
        }
    </Pressable>
  );
}
