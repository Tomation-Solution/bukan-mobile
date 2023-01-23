import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Ionicon from 'react-native-vector-icons/Ionicons'

import RoundedButton from '../button/RoundedButton';

export default function PlanCard(props) {
  return (
    <View style={tw`bg-white w-full rounded-xl `}>
        <View style={tw`${props.bg} py-2.5 rounded-t-xl`}>
            <Text style={tw`text-white text-center text-lg font-bold`}>{props.duration}</Text>
        </View>
        <Text style={tw`text-gray-800  py-2 text-center text-base`}>{props.amount}</Text>
        {
            props.features ? props.features.map((e, index)=>
        <View key={index} style={tw`flex-row justify-between px-3 py-1`}>
            <Text style={tw`my-auto w-10/12`}>{e.name}</Text>
            {e.status ?
            <Ionicon name='md-checkmark' style={tw`my-auto px-2`} color='green' size={20}/>
            : 
            <Ionicon name='ios-close-outline' style={tw`my-auto px-2`} color='red' size={20}/>}
        </View>):<></>}
        <View style={tw`px-3`}>
            <RoundedButton text='Choose Plan' pressed={props.pressed}/>
        </View>
    </View>
  );
}
