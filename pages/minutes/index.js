//import liraries
import React, { useState } from 'react';
import { View, StatusBar,SafeAreaView, Text, FlatList, Pressable } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import TobBar from '../../components/topBar';
import Ionicon from 'react-native-vector-icons/Ionicons'
import MinuteCard from '../../components/minute/MinuteCard';
import * as DocumentPicker from 'expo-document-picker';
import RoundedButton from '../../components/button/RoundedButton';

// create a component
const Minutes = ({navigation}) => {
    const [document, setDocument] = useState(null)
    const data =[
        {id:1, name:'Exco Meeting '},
        {id:2, name:'Exco Meeting '},
        {id:3, name:'Exco Meeting '},
        {id:4, name:'Exco Meeting '},
        {id:5, name:'Exco Meeting '},
        {id:6, name:'Exco Meeting '},
    ]


    const _pickDocument = async () => {
	    let result = await DocumentPicker.getDocumentAsync({});
        if(!result.cancelled){
            setDocument(result.uri)
        }
	}

    return (
        <SafeAreaView style={tw`bg-white px-4`}>
            <StatusBar backgroundColor={'#365C2A'} />
            <TobBar
                body={
                <View style={tw`flex-row justify-between`}>
                    <Ionicon name='ios-chevron-back' onPress={()=>navigation.goBack()} size={30}/>
                    <Text style={tw`my-auto font-bold text-base`}>Subscribe</Text>
                    <Ionicon name='md-notifications' onPress={()=>navigation.navigate('notifications')} color='#365C2A' size={30}/>
                </View>
                }
            />

            <Text style={[tw`text-base font-bold px-4 pt-4`, {color:'#365C2A'}]}>
                Upload Minutes
            </Text>

            <Text style={tw`text-gray-500 text-xs font-bold px-4 `}>
            Select file you will like to upload
            </Text>

            <Pressable onPress={()=>_pickDocument()} style={[tw`${document ? 'pb-1 pt-3' :'py-5'} px-2 my-4 mx-auto  w-11/12 `,{borderWidth:1,borderColor:'#365C2A', borderStyle: 'dashed',
                borderRadius: 1, borderStyle:'dashed',}]}>
                
                <Ionicon name="ios-cloud-upload" style={tw`m-auto`} color={document ? '#365C2A': 'rgba(0,0,0,0.4)'} size={50}/>

                <Text style={tw`text-center text-gray-400`} numberOfLines={1}>
                    { document ? document:
                        'Upload Meeting'
                     }
                </Text>
                {
                    document ?
                    <View style={tw`w-6/12 mx-auto`}>
                        <RoundedButton text='Upload'/>
                    </View>:<></>
                }
            </Pressable>
            <Text style={tw`font-bold text-base pt-2 pb-2`}>All Minutes</Text>
            <FlatList
                data={data}
                keyExtractor={ (item, index) => item.id }
                numColumns={3}
                showsVerticalScrollIndicator={false}
                renderItem={
                    ({item}) => (
                        <View style={tw`flex-row m-1 mx-auto`}>
                            <MinuteCard name={item.name}/>
                        </View>
                )}
            />
            
        </SafeAreaView>
    );
};


//make this component available to the app
export default Minutes;
