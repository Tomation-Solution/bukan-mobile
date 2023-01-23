import { View, Text,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'
import tw from 'tailwind-react-native-classnames'

const AccountCreated = ({navigation}) => {
  return (
    <View  style={tw`h-full`}>
        <View style={tw`m-auto`}> 
            <Image resizeMode='contain' source={require('../images/onboarding/success.png')}/>
            <Text style={tw`mx-auto text-gray-400`}>Account successfully created       </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('login')}>
                <Text style={tw`mx-auto py-3 font-bold text-green-800`} >Subscribe Now </Text>
            </TouchableOpacity>
            <Text style={tw`font-bold text-center`}>OR</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('login')}>
                <Text style={tw`mx-auto py-3 font-bold text-green-800`} >Continue to 72 hours Free Trial</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default AccountCreated