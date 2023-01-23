// import React from 'react';
// import { View, Text } from 'react-native';

// export default function Contestants({route}) {
//   return (
//     <View>
//       <Text>Hey</Text>
//      </View>
//   );
// }
import { NavigationContainer } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicon from 'react-native-vector-icons/Ionicons'
import tw from 'tailwind-react-native-classnames';
// import {GetContestants, GetElections} from '../../connection/user.actions'
import ElectionCard from '../../components/election/ElectionCard';

import RoundedButton from '../../components/button/RoundedButton';
import TobBar from '../../components/topBar';
import { GetContestants } from '../../connection/actions/user.actions';
// import { ActivityIndicator } from 'react-native-web';


export default function Contestants({navigation, route}) {
    const [elections, setElections] = useState(null);
    const [isEmpty, setIsEmpty] = useState(false);
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(false)
    

  useEffect(()=>{
      setRefresh(!refresh)
    // setIsback(false)
    GetContestants(route.params.id, callback, setLoading)
  },[])

  const callback =(res)=>{
      setLoading(false)
    if(res.data.data.length>0){
        setElections(res.data.data)
    }else{
        setIsEmpty(true)
        // alert('no')
}

    // console.log(res)
  }
  return (
    <SafeAreaView style={tw`h-full`}>
        <TobBar
        body={
          <View style={tw`flex-row justify-between px-3`}>
              <Ionicon name='ios-chevron-back' onPress={()=>navigation.goBack()} size={30}/>
              <Text style={tw`my-auto font-bold text-base`}>Contestants</Text>
              <Ionicon name='md-notifications' style={tw`text-purple-800`} size={30}/>
          </View>
        }
    />
        <View style={tw`my-5 mx-2`}>
          { isEmpty && !loading?
          <Text>No Contestants</Text> :
          (loading ? <ActivityIndicator/>:
            <FlatList
            data={elections}
            keyExtractor={ (item, index) => item.id }
            numColumns={2}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View style={tw`h-60`}/>}
            renderItem={
    
                ({item, index}) => (
                  <ElectionCard
                    head={item.role_name}
                    body={item.role_detail}
                    navigation={navigation}
                    to={'contestants'}
                  />
                  // <Text>{item.name}</Text>
                  )}
          />)}
            {/* <Ionicon name='heart-dislike-circle' style={tw`text-gray-400 text-center`} size={70} />
            <Text style={tw`text-gray-500 pb-3`}>Contact your admmin to Subscribe for Election </Text>
          <View style={tw`mx-5`}>
            <RoundedButton text='Back to Home' pressed={()=>navigation.navigate('HomeScreen')}/>
          </View> */}
        </View>
     </SafeAreaView>
  );
}
