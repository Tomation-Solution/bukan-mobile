import { View, Text } from "react-native"
import tw from "tailwind-react-native-classnames"
import RoundedButton from "../button/RoundedButton"

export const MemberCard =(props)=>{
    return(
        <View style={tw`bg-white rounded-lg my-1 mx-2  p-2`}>
            <Text style={tw`font-bold text-base`}>{props.name}</Text>
            <View style={tw`flex-row justify-between`}>
                <Text style={tw`my-auto`}>{props.dept}</Text>
                <Text style={tw`my-auto`}>{props.year}</Text>
                <View style={tw`w-20`}>
                    <RoundedButton text='View' pressed={()=>props.navigation.navigate('view-member')}/>
                </View> 
            </View>
        </View>
    )
}