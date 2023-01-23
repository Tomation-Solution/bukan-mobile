
import { View, SafeAreaView, TextInput, Image,Text, ScrollView, Pressable } from 'react-native'
import React, { useCallback, useState } from 'react'
import * as ImagePicker from 'expo-image-picker';

import TobBar from '../../components/topBar'
import Ionicon from 'react-native-vector-icons/Ionicons'
import tw from 'tailwind-react-native-classnames'
import RoundedButton from '../../components/button/RoundedButton'

export default function EditProfile({navigation,route}) {
    const [image, setImage] = useState(null);
    const profile = route.params.profile

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);
      //   console.log(result.uri)
      }
    }

    const handleInputSubmit = useCallback((ev,id) => {
        const input =  ev.nativeEvent.text;
        const propIndex = profile.find(i => i.id === id)
        propIndex.value = input;
    },[]);

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
                {/* <View style={tw`bg-gray-200 mx-3 rounded-t-xl`}> */}
                {/* <Pressable onPress={()=>pickImage()} style={tw`bg-gray-200 mx-3 rounded-t-xl`}>
                    {   image ?
                        <Image  style={tw`h-28 w-28 rounded-full mx-auto my-2`} resizeMode='cover' source={{uri:image}}/>:
                        <Image  style={tw`h-28 w-28 rounded-full mx-auto my-2`} resizeMode='cover' source={require('../../images/user.png')}/>
                    }
            
                        <Text style={[tw`font-bold mx-auto`,{color:'#0092ED'}]}>Click to change image</Text>
                
                </Pressable>  */}
                {profile.slice(0,4).map((data,index) => <View key={index} style={tw` pt-3 py-1 mx-5`}>
                    <Text style={tw`text-green-900 pb-1`}>{data.name}:</Text>
                    <TextInput
                        // placeholder='Name' 
                        style={tw`border-b border-gray-600`}
                        defaultValue={data.value}
                        onEndEditing={(e)=> handleInputSubmit(e,data.id)}
                    />
                </View>)}

                <View style={tw`flex-row w-full`}>
                    {profile.slice(4,6).map((data,index) => <View key={index} style={tw` pt-3 py-1 mx-5`}>
                        <Text style={tw`text-green-900 pb-1`}>{data.name}:</Text>
                        <TextInput
                            // placeholder='Name'  
                            style={tw`border-b border-gray-600`}
                            defaultValue={data.value}
                            onEndEditing={(e)=> handleInputSubmit(e,data.id)}
                        />
                    </View>)}
                </View>

                <View style={tw`flex-row w-full`}>
                    {profile.slice(6,8).map((data,index) => <View key={index} style={tw` pt-3 py-1 mx-5`}>
                        <Text style={tw`text-green-900 pb-1`}>{data.name}:</Text>
                        <TextInput
                            // placeholder={data.name}  
                            style={tw`border-b border-gray-600`}
                            defaultValue={data.value}
                            onEndEditing={(e)=> handleInputSubmit(e,data.id)}
                        />
                    </View>)}
                </View>

                {profile.slice(8).map((data,index) => <View key={index} style={tw`w-11/12 mx-5 my-3`}>
                    <Text style={tw`text-green-900 pb-1`}>{data.name}:</Text>
                    <TextInput
                        // placeholder='Bio'  
                        style={tw`border-b border-gray-600`}
                        // numberOfLines={3}
                        // multiline={true}
                        defaultValue={data.value}
                        onEndEditing={(e)=> handleInputSubmit(e,data.id)}
                    />
                </View>)}
                {/* <View style={tw`w-full mx-5 pb-1 mt-3`}>
                    <Text style={tw`text-green-900`}>Pictures</Text>
                </View> */}


                {/* <View style={tw`flex-row mx-5 justify-between`}>
                    
                    <Image  style={tw`h-20 w-20 rounded-lg mx-1`}  source={require('../../images/onboarding/phone.png')}/>
                    <Image  style={tw`h-20 w-20 rounded-lg mx-auto`}  source={require('../../images/onboarding/phone.png')}/>
                    <Image  style={tw`h-20 w-20 rounded-lg mx-auto`}  source={require('../../images/onboarding/phone.png')}/>
                    <Image  style={tw`h-20 w-20 rounded-lg mx-auto`}  source={require('../../images/onboarding/phone.png')}/>
                </View> */}

                {/* <View style={[tw`h-20 w-20 border rounded-lg mx-5 my-2 flex-1 justify-center items-center`]}>
                <Ionicon onPress={()=>pickImage()}  name='ios-add' size={50}/>
                </View> */}

                <View style={tw`mt-4 mx-5`}>
                    <RoundedButton text='Update'/>
                </View>
            </ScrollView>
    </SafeAreaView>
  )
}