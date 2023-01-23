import React, {useState} from 'react';
import { View, Text, Pressable } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons'
import tw from 'tailwind-react-native-classnames';

export default function SupportCard(props) {
    const [isChecked, setisChecked] = useState(0)
    const handlePress=(id)=>{
        setisChecked(null)
        setTimeout(
            function() {
             setisChecked(id)
            }, 100);
    }
  return (
    <View style={tw`border-b border-gray-400 py-4 mx-4`}>
        <View style={tw`flex-row justify-between ${isChecked == props.id ? 'pb-2':''}`}>
            <Pressable onPress={()=>handlePress(props.id)}>
                <Text style={tw`my-auto font-bold pb-1`}>{props.title}</Text>
            </Pressable>
            { !isChecked == props.id ?
            <Ionicon onPress={()=>handlePress(props.id)} name='ios-add-circle-outline' color='green' size={22}/>
            :
            <Ionicon onPress={()=>setisChecked(0)} name='ios-remove-circle-outline' color='red' size={22}/>
            }
        </View>
        { isChecked == props.id ?
        <Text>{props.body}</Text>
    : <></>}
    </View>
  );
}
