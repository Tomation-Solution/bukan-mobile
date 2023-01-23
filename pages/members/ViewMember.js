import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import tw from 'tailwind-react-native-classnames'
import RoundedButton from '../../components/button/RoundedButton'
import TobBar from '../../components/topBar'

export const ViewMember =({navigation})=>{
    return(
        <SafeAreaView style={tw`h-full`}>
            <TobBar
                body={
                 <Ionicon onPress={()=>navigation.goBack()} name='ios-chevron-back' size={30}/>
                }/>

                <ScrollView>
                <View >
                    <Image  style={tw`h-28 w-28 rounded-full mx-auto`} resizeMode='cover' source={require('../../images/onboarding/phone.png')}/>
                </View> 
                <View style={tw` pt-3 border-b border-gray-500 py-1 mx-5`}>
                    <Text style={tw`text-green-900 pb-1`}>Name:</Text>
                    <Text>Bolaji Johnson</Text>
                </View>
                <View style={tw` mt-3 border-b border-gray-500 py-1 mx-5`}>
                    <Text style={tw`text-green-900 pb-1`}>Email Address:</Text>
                    <Text>BolajiJohnson@gmail.com </Text>
                </View>

                <View style={tw` mt-3 border-b border-gray-500 py-1 mx-5`}>
                    <Text style={tw`text-green-900 pb-1`}>Address:</Text>
                    <Text>No 20, Kings Avenue, Ikoyi, Lagos.</Text>
                </View>

                <View style={tw`flex-row w-full`}>
                    <View style={tw` mt-3 w-5/12 border-b border-gray-500 py-1 mx-5`}>
                        <Text style={tw`text-green-900 pb-1`}>Department:</Text>
                        <Text>Accounting</Text>
                    </View>
                    <View style={tw` mt-3 w-4/12 border-b border-gray-500 py-1 mx-5`}>
                        <Text style={tw`text-green-900 pb-1`}>Year:</Text>
                        <Text>2019</Text>
                    </View>
                </View>

                <View style={tw`flex-row w-full`}>
                    <View style={tw` mt-3 w-5/12 border-b border-gray-500 py-1 mx-5`}>
                        <Text style={tw`text-green-900 pb-1`}>Occupation:</Text>
                        <Text>Accountant</Text>
                    </View>
                    <View style={tw` mt-3 w-4/12 border-b border-gray-500 py-1 mx-5`}>
                        <Text style={tw`text-green-900 pb-1`}>Phone Number:</Text>
                        <Text>08023793847</Text>
                    </View>
                </View>

                <View style={tw`w-11/12 mx-5 my-3`}>
                    <Text style={tw`text-green-900 pb-1`}>Bio:</Text>
                    <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscin. ad 
                    Lorem ipsum dolor sit amet, consectetur adipiscin. ad
                    Lorem ipsum dolor sit amet, consectetur adipiscin. ad
                    </Text>
                </View>
                <View style={tw`w-full mx-5 pb-1 mt-3`}>
                    <Text style={tw`text-green-900`}>Pictures</Text>
                </View>
                <View style={tw`flex-row mx-5 justify-between`}>
                    
                    <Image  style={tw`h-20 w-20 rounded-lg mx-1`}  source={require('../../images/onboarding/phone.png')}/>
                    <Image  style={tw`h-20 w-20 rounded-lg mx-auto`}  source={require('../../images/onboarding/phone.png')}/>
                    <Image  style={tw`h-20 w-20 rounded-lg mx-auto`}  source={require('../../images/onboarding/phone.png')}/>
                    <Image  style={tw`h-20 w-20 rounded-lg mx-auto`}  source={require('../../images/onboarding/phone.png')}/>
                
                </View>
                <View style={tw`mt-7 mx-8`}>
                    <RoundedButton text='Chat'/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}