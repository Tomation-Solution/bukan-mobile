import React, {useState} from 'react';
import { View,SafeAreaView,Text } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons'
import tw from 'tailwind-react-native-classnames';
import PlanCard from '../../components/Plan/PlanCard';

import TobBar from '../../components/topBar';

export default function Subscribe({navigation}) {

    const [checked, setChecked] = useState(false)

  return (
    <SafeAreaView>
        <TobBar
            body={
                <View style={tw`flex-row justify-between px-3`}>
                    <Ionicon name='ios-chevron-back' onPress={()=>navigation.goBack()} size={30}/>
                    <Text style={tw`my-auto font-bold text-base`}>Subscribe</Text>
                    <Ionicon name='md-notifications' onPress={()=>navigation.navigate('notifications')} style={tw`text-green-800`} size={30}/>
                </View>
            }
        />

        <Text style={tw`text-lg font-bold p-4`}>Payment Plans</Text>
        <View style={tw`flex-row px-2 w-full`}>
            <View style={tw`w-6/12`}>
                <PlanCard 
                    duration='3 Months'
                    amount='N200/Month'
                    bg='bg-green-900'
                    features={[
                        {name:'Chat with alumnus members', status:true},
                        {name:'Get all news and event update', status:true},
                        {name:'Discount', status:false},
                        {name:'Live email', status:false},
                    ]}
                />
            </View>
        
            <View style={tw`w-6/12 mx-2`}>
                <PlanCard 
                    duration='6 Months'
                    amount='N200/Month'
                    bg='bg-green-700'
                    features={[
                        {name:'Chat with alumnus members', status:true},
                        {name:'Get all news and event update', status:true},
                        {name:'5% Discount', status:true},
                        {name:'Live email', status:false},
                    ]}
                />
            </View>
        </View>

        <View style={tw`w-6/12 mt-3 mx-auto`}>
                <PlanCard 
                    duration='1 Year'
                    amount='N200/Month'
                    bg='bg-pink-700'
                    features={[
                        {name:'Chat with alumnus members', status:true},
                        {name:'Get all news and event update', status:true},
                        {name:'15% Discount', status:true},
                        {name:'Live email', status:true},
                    ]}
                />
            </View>
            <View style={tw`flex-row py-2`}>
                <Text style={tw`my-auto px-4`}>Add live email address to package</Text>
                {checked ? 
                    <Ionicon name='checkbox' size={20} onPress={()=>setChecked(!checked)}/> : 
                    <Ionicon name='ios-square-outline' size={20} onPress={()=>setChecked(!checked)}/>
                }
            </View>
    </SafeAreaView>
  );
}
