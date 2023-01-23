import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'
import tw from 'tailwind-react-native-classnames'

const PasswordChanged = ({navigation}) => {
  return (
    <View  style={tw`h-full`}>
        <View style={tw`m-auto`}> 
            <Ionicon style={tw`mx-auto`} color='#365C2A' name='md-checkmark-circle' size={80}/>
            <Text>Password successfully changed. </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('accountCreated')}>
                <Text style={tw`mx-auto font-bold text-green-800`} >Login to continue </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default PasswordChanged