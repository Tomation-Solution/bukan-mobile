import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import TobBar from '../../components/topBar'
import Ionicon from 'react-native-vector-icons/Ionicons'

const ViewGallery = ({navigation, route}) => {
  return (
    <View style={tw`h-full`}>
      <TobBar
        body={
          <View style={tw`flex-row justify-between px-3`}>
              <Ionicon name='ios-chevron-back' onPress={()=>navigation.goBack()} size={30}/>
              <Text style={tw`my-auto font-bold text-base`}>Gallery</Text>
              <View style={tw-10}/>
          </View>
        }
    />
        <View style={tw`h-4/5`}>
          { route.params.data ?
            <Image  
            resizeMode='cover'
            style={tw`h-full w-full rounded-lg`}
            source={{uri: route.params.data.photo_file}}/>
            :<></>
            }
        </View>
        <View style={tw`px-4 py-2`}>
            {/* <Text style={tw`text-base font-bold text-green-800 py-1`}>Monthly Exco Meeting</Text> */}
            <Text style={tw`text-justify text-green-800 py-1`}>{route.params.data.name}</Text>
        </View>  
      
    </View>
  )
}

export default ViewGallery