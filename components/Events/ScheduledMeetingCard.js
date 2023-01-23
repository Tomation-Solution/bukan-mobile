import { View, Text,TouchableOpacity, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import RoundedButton from '../../components/button/RoundedButton';

const ScheduledMeetingCard = (props) => {
    return (
        <View style={{width: "100%", backgroundColor: "#f1f5f9", marginBottom: 5}}>
            {/* <Image source={props.image} resizeMode="cover" style={tw`w-full h-32`}/> */}
            <View style={tw`w-full`}>
                <Text style={tw`font-bold`}>{props.startdate+" - "+props.start_time}</Text>
                <Text style={tw`text-sm`}>{props.text}</Text>
            </View>
            <View style={tw`flex-row flex-wrap justify-between pr-8`}>
                <RoundedButton style={{borderRadius: 9, paddingLeft: 10, paddingRight: 10}} rounded=''  pressed={props.accept} text="Accept" />
                <RoundedButton style={[tw`px-1.5`,{borderRadius: 9}]}  borderWidth={1} borderColor={'#365C2A'} rounded='' textColor={'#365C2A'} pressed={props.reschedule} bgColor={'transparent'} text="Request Reschedule"/>
                <RoundedButton style={{borderRadius: 9, paddingLeft: 20, paddingRight: 20}} rounded='' bgColor={'black'}  pressed={props.join} text="Join" />
            </View>
        </View>
    )
}

export default ScheduledMeetingCard