import { View, SafeAreaView,Text, ScrollView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'
import TobBar from '../../components/topBar'
import RoundedButton from '../../components/button/RoundedButton'

const ViewPublication = ({navigation, route}) => {
  // console.log(route.params.props.item)
  return (
    <SafeAreaView>
      <TobBar
        body={
          <View style={tw`flex-row justify-between px-3`}>
            <Ionicon name='ios-chevron-back' onPress={()=>navigation.goBack()} size={30}/>
            <Text style={tw`my-auto font-bold text-base`}>Publications</Text>
            <Ionicon name='md-notifications' style={tw`text-purple-800`} size={30}/>
          </View>
        }
        />
    <ScrollView style={tw`h-full`}>
      
        <View style={tw`h-60 p-3`}>
            { route.params.props.item.image ?
            <Image  
            resizeMode='cover'
            style={tw`h-full w-full rounded-lg`}
            source={{uri:route.params.props.item.image}}
            />:
            <Ionicon name='image' style={tw`text-purple-400 m-auto`} size={60}/>
            }
        </View>
        <View style={tw`px-4 py-2`}>
            <Text style={tw`text-base font-bold text-purple-800 py-1`}>{route.params.props.item.name}</Text>
            <Text style={tw`text-justify text-gray-800 py-1`}>
            {route.params.props.item.body}
            </Text>
      </View>
      <View style={tw`mx-5`}>
        <RoundedButton text='Download'/>
      </View>
      
    </ScrollView>
    </SafeAreaView>
  )
}

export default ViewPublication