
import { View, SafeAreaView, Image,Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import TobBar from '../../components/topBar'
import Ionicon from 'react-native-vector-icons/Ionicons'
import tw from 'tailwind-react-native-classnames'
import RoundedButton from '../../components/button/RoundedButton'
import { GetProfile } from '../../connection/actions/user.actions'

export default function Profile({navigation}) {
    const [profile,setProfile] = useState([])
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            GetProfile(callback)
        });
        return unsubscribe;
    },[])

    const callback = (data) => {
        setProfile(data.more_info)
    }
    
  return (
    <SafeAreaView>
        <ScrollView>
            <TobBar
                body={
                    <View style={tw`flex-row justify-between`}>
                        <Ionicon onPress={()=>navigation.goBack()} name='ios-chevron-back' size={30}/>
                        <Text style={tw`font-bold my-auto text-center`}>My Profile</Text>
                        <View style={tw`w-8`}></View>
                    </View>
                }/>
                {/* <View style={tw`bg-gray-200 mx-3 rounded-t-xl`}>
                    <Image  style={tw`h-28 w-28 rounded-full mx-auto my-2`} resizeMode='cover' source={{}}/>
                </View> */}

                {
                    profile.slice(0,4).map((data,index) => <View key={index} style={tw` mt-3 border-b border-gray-500 py-1 mx-5`}>
                        <Text style={tw`text-green-900 pb-1`}>{data.name}</Text>
                        <Text>{data.value}</Text>
                    </View>)
                }

                <View style={tw`flex-row w-full`}>
                {
                    profile.slice(4,6).map((data,index) => <View key={index} style={tw` mt-3 border-b border-gray-500 py-1 mx-5`}>
                        <Text style={tw`text-green-900 pb-1`}>{data.name}</Text>
                        <Text>{data.value}</Text>
                    </View>)
                }
                </View>

                <View style={tw`flex-row w-full`}>
                {
                    profile.slice(7,9).map((data,index) => <View key={index} style={tw` mt-3 border-b w-1/3 border-gray-500 py-1 mx-5`}>
                        <Text style={tw`text-green-900 pb-1`}>{data.name}</Text>
                        <Text>{data.value}</Text>
                    </View>)
                }
                </View>

                <View style={tw`flex-row w-full`}>
                {
                    profile.slice(9,11).map((data,index) => <View key={index} style={tw` mt-3 border-b w-1/3 border-gray-500 py-1 mx-5`}>
                        <Text style={tw`text-green-900 pb-1`}>{data.name}</Text>
                        <Text>{data.value}</Text>
                    </View>)
                }
                </View>

                <View style={tw`flex-row w-full`}>
                {
                    profile.slice(11,13).map((data,index) => <View key={index} style={tw` mt-3 border-b w-1/3 border-gray-500 py-1 mx-5`}>
                        <Text style={tw`text-green-900 pb-1`}>{data.name}</Text>
                        <Text>{data.value}</Text>
                    </View>)
                }
                </View>

                <View style={tw`flex-row w-full`}>
                {
                    profile.slice(13,15).map((data,index) => <View key={index} style={tw` mt-3 border-b w-1/3 border-gray-500 py-1 mx-5`}>
                        <Text style={tw`text-green-900 pb-1`}>{data.name}</Text>
                        <Text>{data.value}</Text>
                    </View>)
                }
                </View>

                <View style={tw`flex-row w-full`}>
                {
                    profile.slice(15,17).map((data,index) => <View key={index} style={tw` mt-3 border-b w-1/3 border-gray-500 py-1 mx-5`}>
                        <Text style={tw`text-green-900 pb-1`}>{data.name}</Text>
                        <Text>{data.value}</Text>
                    </View>)
                }
                </View>

                {/* user gallery */}
                {/* <View style={tw`flex-row mx-5 justify-between`}>
                    
                    <Image  style={tw`h-20 w-20 rounded-lg mx-1`}  source={require('../../images/onboarding/phone.png')}/>
                    <Image  style={tw`h-20 w-20 rounded-lg mx-auto`}  source={require('../../images/onboarding/phone.png')}/>
                    <Image  style={tw`h-20 w-20 rounded-lg mx-auto`}  source={require('../../images/onboarding/phone.png')}/>
                    <Image  style={tw`h-20 w-20 rounded-lg mx-auto`}  source={require('../../images/onboarding/phone.png')}/>
                
                </View> */}
                <View style={tw`mt-4 mx-5`}>
                    <RoundedButton 
                        text='Edit'
                        pressed={()=>navigation.navigate('editProfile', {profile})}
                    />
                </View>
            </ScrollView>
    </SafeAreaView>
  )
}