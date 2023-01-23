import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import RoundedButton from '../components/button/RoundedButton'

const ForgotPassword = ({navigation}) => {
  return (
    <View>
      <Image style={tw`mx-auto my-8`} source={require('../images/Logo/Bukka_logo.png')}/>
      <View style={tw`mx-10`}>
         <Text style={tw`text-base font-bold`}>Forgot Password</Text>
          <Text>Enter email address to recover account</Text>
      </View>
       
        <View style={tw`mt-3 mx-7 py-6 bg-white shadow-sm rounded-3xl px-5`}>
          
          <View>      
            <View style={tw`my-2.5 border-b`}>
              <Text>Email Address</Text>
              <TextInput
              placeholder='email Address'
              />
            </View>
          </View>

          <RoundedButton text='Continue' pressed={()=>navigation.navigate('mailSent')}/>
      </View>
    </View>
  )
}

export default ForgotPassword