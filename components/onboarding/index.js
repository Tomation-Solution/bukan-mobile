//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Ionicon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler';

// create a component
const Onboarding = (props) => {
    return (
        <View style={tw`h-full`}>
            <View style={tw`bg-red-200 h-1/2`}>
                <Image style={tw`h-full`} source={props.image}/>
            </View>
            {/* <View style={tw`pt-2`}>
                <Image style={tw`mx-auto`} source={require('../../images/onboarding/r8.png')}/>
            </View> */}
            
            <View style={tw`flex mx-auto pb-1 px-7 `}>
                <Text style={tw`flex mx-auto py-2 text-lg font-bold text-green-800`}>{props.title}</Text>
                <Text style={tw`flex mx-auto py-2 text-center text-gray-700`}>{props.body}</Text>
            </View>

            <View style={tw`flex-row mx-auto py-5`}>
                <Pressable onPress={()=>props.navigation('first')} style={tw`h-2 ${props.next=='second'?'w-5':'w-2'} rounded-full ${props.next =='second'? 'bg-green-800':'bg-gray-400'} mx-1`}></Pressable>
                <Pressable style={tw`h-2 ${props.next=='third'?'w-5':'w-2'} rounded-full ${props.next =='third'? 'bg-green-800':'bg-gray-400'} mx-1`}></Pressable>
                <Pressable style={tw`h-2 ${props.next=='login'?'w-5':'w-2'} rounded-full ${props.next =='login'? 'bg-green-800':'bg-gray-400'} mx-1`}></Pressable>
            </View>

            <View style={tw` absolute bottom-0 px-3 w-full`}>
                <View style={tw`flex-row  justify-between py-2`}>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('chapters')} style={tw`my-auto`}>
                        <Text>Skip</Text>
                    </TouchableOpacity>
                    <View style={tw`my-auto`}>
                        <Ionicon onPress={()=>props.navigation.navigate(props.next)} name='ios-arrow-forward-circle' size={38} color='#365C2A' />
                    </View>
                </View>
            </View>
        </View>
    );
};

//make this component available to the app
export default Onboarding;
