import { View, Image, Text } from "react-native"
import tw from "tailwind-react-native-classnames"
import RoundedButton from "../button/RoundedButton"

export const EventCard =(props)=>{
    return(
        <View style={tw`bg-white rounded-lg px-3 border-b pt-7 border-gray-300  pb-2`}>
            
            <Text style={tw`font-bold `} numberOfLines={1}>{props.heading}</Text>
                <Text style={tw`text-xs `}>{props.time}</Text>
                {/* <Text style={tw`my-auto text-gray-400 text-xs`}>{props.time}</Text> */}
        
        </View>
    )
}