import { View, SafeAreaView,Text, ScrollView, Image } from 'react-native'
import React from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'
import CommentCard from '../../components/News/CommentCard'
import WriteCommentCard from '../../components/News/WriteCommentCard'
import TobBar from '../../components/topBar'

const ViewExco = () => {
  return (
    <SafeAreaView>
      <TobBar
        body={
          <View style={tw`flex-row justify-between px-3`}>
            <Ionicon name='ios-chevron-back' onPress={()=>navigation.goBack()} size={30}/>
            <Text style={tw`my-auto font-bold text-base`}>Publications</Text>
            <Ionicon name='md-notifications' onPress={()=>navigation.navigate('notifications')} style={tw`text-green-800`} size={30}/>
          </View>
        }
        />
    <ScrollView style={tw`h-full`}>
      
        <View style={tw`h-60 p-3`}>
            <Image  
            resizeMode='cover'
            style={tw`h-full w-full rounded-lg`}
            source={require('../../images/onboarding/phone.png')}/>
        </View>
        <View style={tw`px-4 py-2`}>
            <Text style={tw`text-base font-bold text-green-800 py-1`}>24th Annual Anniversary Celebration</Text>
            <Text style={tw`text-justify text-gray-800 py-1`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit. Et lacus lacus, proin proin egestas. Augue 
            scelerisque pellentesque nullam montes, pretium. 
            Nisl, in netus Et lacus lacus, proin proin egestas. 
            Augue scelerisque pellentesque nullam montes,
             pretium. Nisl, in netus Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit. Et lacus lacus, proin proin egestas. Augue 
            scelerisque pellentesque nullam montes, pretium. 
            Nisl, in netus Et lacus lacus, proin proin egestas. 
            Augue scelerisque pellentesque nullam montes,
             pretium. Nisl, in netus 
            </Text>
      </View>
      
    </ScrollView>
    </SafeAreaView>
  )
}

export default ViewExco