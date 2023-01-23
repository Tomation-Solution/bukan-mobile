import { View, SafeAreaView, Text, FlatList, TextInput, Pressable } from 'react-native'
import React, {useEffect, useState} from 'react'
import tw from 'tailwind-react-native-classnames'

import NewsCard from '../../components/News/NewsCard'
import Feather from 'react-native-vector-icons/Feather'
import Ionicon from 'react-native-vector-icons/Ionicons'
import TobBar from '../../components/topBar'
import { GetNews } from '../../connection/actions/user.actions'

const News = ({navigation}) => {
  const [news, setNews] = useState([])

    useEffect(()=>{
      const unsubscribe = navigation.addListener('focus', () => {
        GetNews(callback)
      });
    
        return unsubscribe;
    },[])

    const callback=(res)=>{
      setNews(res.data.data)
    }
  return (
    <SafeAreaView style={tw`px-2`}>
      <TobBar
        body={
          <View style={tw`flex-row justify-between px-3`}>
              <Ionicon name='ios-chevron-back' onPress={()=>navigation.goBack()} size={30}/>
              <Text style={tw`my-auto font-bold text-base`}>News</Text>
              <Ionicon name='md-notifications' style={tw`text-purple-800`} size={30}/>
          </View>
        }
        />
      <View style={tw`flex-row mx-4 justify-between bg-purple-100 my-3 rounded-lg py-2  px-2`}> 
        <Ionicon name='ios-search' size={25} style={tw`mr-2`} />
        <TextInput
          placeholder='Search by date'
          style={tw`w-9/12`}
        />
        <Feather name='sliders' style={tw`my-auto`} size={20} color='purple'/>
      </View>
      <View style={tw` flex-row mt-0 `}>
        <FlatList
            data={news}
            keyExtractor={ (item, index) => item.id }
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={
                ({item}) => (
                //   <Pressable style={tw`w-1/2`}>
                  <NewsCard 
                    image={item.image}
                    head={item.name}
                    body={item.body}
                    item={item}
                    navigation={navigation}
                    to='viewNews'
                  />
                //   </Pressable>
                  )}/>
        </View>
    </SafeAreaView>
  )
}

export default News