import { View, Text } from "react-native"
import tw from "tailwind-react-native-classnames"
import RoundedButton from "../button/RoundedButton"

export const MoneyCard =(props)=>{
    return(
        <View style={tw`bg-white rounded-lg my-1 mx-2  p-2`}>
            <Text>{props.reason}</Text>
            <View style={tw`flex-row justify-between`}>
                <Text style={tw`my-auto`}>{props.date}</Text>
                <Text style={tw`my-auto`}>{props.amount}</Text>
                {props.type =='paid' ? 
                <View style={tw`w-20`}>
                    <RoundedButton text='Reciept'/>
                </View> :
                
                <View style={tw`w-20`}>
                    <RoundedButton text='Pay'/>
                </View>}
            </View>
        </View>
    )
}