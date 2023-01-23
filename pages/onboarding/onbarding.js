import { View,Text,SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Onboarding from "../components/Onboarding";
import FirstBoard from "../../components/onboarding/firstBoard";
import Secondoard from "../../components/onboarding/secondBoard";
import ThirdBoard from "../../components/onboarding/thirdBoard";


export default function OnboardingPage(){
    const Stack = createNativeStackNavigator()
    return(
        <SafeAreaView style={tw`h-full`}>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen  name="first" component={FirstBoard}/>
                <Stack.Screen  name="second" component={Secondoard}/>
                <Stack.Screen  name="third" component={ThirdBoard}/>
            </Stack.Navigator>
      </SafeAreaView>
    )
}