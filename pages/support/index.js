import React, {useEffect,useState} from 'react';
import { View, SafeAreaView,Text, FlatList, Pressable  } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Ionicon from 'react-native-vector-icons/Ionicons'

import TobBar from '../../components/topBar';
import SupportCard from '../../components/support/SupportCard';
import ModalTemplate from '../../components/Modal';
import SupportChat from '../../components/support/SupportChat';
import { GetFAQ } from '../../connection/actions/user.actions';

export default function Support({navigation}) {
    const [visible, setVisible] = useState(false)
    const [data, setData] =useState(null)

    useEffect(()=>{
        GetFAQ(false, callback)
    },[data])

    const callback=(res)=>{
        setData(res.data.data)
    }
  return (
    <SafeAreaView style={tw`h-full`}>
        <ModalTemplate visible={visible} body={<SupportChat setVisible={setVisible}/>}/>
        <TobBar
            body={
                <View style={tw`flex-row justify-between px-3`}>
                    <Ionicon name='ios-chevron-back' onPress={()=>navigation.goBack()} size={30}/>
                    <Text style={tw`my-auto font-bold text-base`}>Support</Text>
                    <Ionicon name='md-notifications' style={tw`text-purple-800`} size={30}/>
                </View>
            }
        />
        <FlatList
            data={data}
            keyExtractor={(item)=>item.id}
            ListFooterComponent={<View style={tw`h-8`}></View>}
            renderItem={
                ({item})=>
                <SupportCard title={item.name} body={item.body} id={item.id}/>

            }
        // {data.map(e=>
        //     <SupportCard title={e.title} body={e.body} id={1}/>
        // )}
        />
        <Pressable onPress={()=>setVisible(true)} style={tw`h-14 shadow-lg w-14 bg-purple-800 absolute bottom-10 right-6 rounded-full`}>
            <Ionicon name="ios-chatbox-ellipses" style={tw`m-auto`} size={22} color={'white'}/>
        </Pressable>
     </SafeAreaView>
  );
}
