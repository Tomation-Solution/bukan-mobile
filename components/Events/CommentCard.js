import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const CommentCard = () => {
  return (
    <View style={tw`my-2 mx-2`}>
      <Text style={tw`font-bold py-2`}>Michael Ayinde</Text>
      <View style={tw`flex-row`}> 
          <Image style={tw`h-12  w-12 mr-5 rounded-full`} source={require('../../images/onboarding/phone.png')}/>
          <View style={tw`bg-white p-2 rounded-xl w-9/12`}>
              <Text>Lorem ipsum dolor sit amet, consectetur a</Text>
          </View>
      </View>
    </View>
  )
}

export default CommentCard