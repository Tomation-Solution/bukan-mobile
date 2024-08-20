import { View, SafeAreaView,Text, ScrollView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'
import TobBar from '../components/topBar'
import RoundedButton from '../components/button/RoundedButton'

const About = ({navigation}) => {
  return (
    <SafeAreaView>
      <TobBar
        body={
          <View style={tw`flex-row justify-between px-3`}>
            <Ionicon name='chevron-back' onPress={()=>navigation.goBack()} size={30}/>
            <Text style={tw`my-auto font-bold text-base`}>About Us</Text>
            <Ionicon name='notifications' style={tw`text-green-800`} size={30}/>
          </View>
        }
        />
    <ScrollView style={tw`h-full`}>
      
        <View style={tw`h-60 p-3`}>
            <Image  
            resizeMode='contain'
            style={tw`h-full w-full rounded-lg`}
            source={require('../images/Logo/Bukka_logo.png')}/>
        </View>
        <View style={tw`px-4 py-2`}>
        {/* <Image  resizeMode='cover' style={tw`h-10 w-10 mx-auto rounded-lg mb-4`} source={require('../assets/favicon.png')}/> */}
            {/* <Text style={tw`text-base font-bold text-green-800 py-1 text-center text-base`}></Text> */}
            <Text style={[tw`text-justify text-gray-800 py-1`,{fontSize: 20,}]}> 
AANI stands for Alumni Association of the National Institute (for Policy and Strategic Studies)
AANI is best described as the national reservoir of knowledge, skills and expertise.
            </Text>
      </View>
    
      
    </ScrollView>
    </SafeAreaView>
  )
}

export default About