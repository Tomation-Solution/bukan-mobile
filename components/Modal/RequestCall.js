import { ActivityIndicator, View } from "react-native"
import tw from 'tailwind-react-native-classnames';
import ModalTemplate from ".";

export const RequestCall = (props) => {
    return (
        <ModalTemplate visible={props.open} body={<View style={[tw`m-auto rounded h-24 w-24`, { backgroundColor: "#0c0c0c8a" }]}>
            <ActivityIndicator style={tw`m-auto`} size={"large"} color={"#14a314"} />
            </View>} 
        />
    )
}