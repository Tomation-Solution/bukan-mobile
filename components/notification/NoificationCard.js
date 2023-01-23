import { View, Image, Text } from "react-native"
import tw from "tailwind-react-native-classnames"
import RoundedButton from "../button/RoundedButton"

export const NotificationCard =(props)=>{
    return(
        <View style={tw`bg-white rounded-lg px-4 border-b border-gray-300 pt-6 pb-2`}>
            
            <View style={tw`flex-row`}>
            <Image style={tw`h-10 w-10 rounded-full mr-5`} source={require('../../images/onboarding/phone.png')}/>

                <View>
                    <Text style={tw`font-bold`}>{props.heading}</Text>
                    <Text style={tw`my-auto text-gray-400 text-xs`}>{props.time}</Text>
                </View>
            </View>
        </View>
    )
}