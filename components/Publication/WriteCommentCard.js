import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const WriteCommentCard = () => {
  return (
      <View style={tw` mx-5 py-3 flex-row`}>
        <Image style={tw`h-10 w-10 rounded-full`} source={require('../../images/onboarding/phone.png')}/>
        <View style={tw`bg-gray-200 rounded-xl my-auto w-10/12 mx-5 p-3`}>
        {/* <Text>WriteCommentCard</Text> */}
        <TextInput placeholder='Write Comment'/>
        </View>
    </View>
  )
}

export default WriteCommentCard