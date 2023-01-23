import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function BalanceCard (props){
    return(
        <View style={[tw`${props.bg} px-4 py-6 w-5/12 rounded-lg flex-row`,{backgroundColor: props.bgc}]}>
            {props.icon}
            <View>
                <Text style={tw`${props.color} font-bold pb-1 mx-auto text-base`}>{'N '+props.amount}</Text>
                <Text style={tw`${props.color} `}>{props.description}</Text>
            </View>
            
        </View>
    )
}