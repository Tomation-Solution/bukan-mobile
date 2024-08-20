import { View,FlatList, SafeAreaView,TextInput, Text, Pressable } from 'react-native'
import React, {useEffect, useState} from 'react'
import GalleryCard from '../../components/Gallery/GalleryCard'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import tw from 'tailwind-react-native-classnames'
import TobBar from '../../components/topBar'
import { GetGallery } from '../../connection/actions/user.actions'


const Gallery = ({navigation}) => {

  const [gallery, setGallery] = useState([])

  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus', () => {
      GetGallery(callback,errcallback)
    });

    return unsubscribe;
  },[])

  const callback = (res)=>{
    // console.log('gallery',res.data)
    setGallery(res.data)
  }

  const errcallback = (err) => {
    console.log(err)
  }
  return (
    <SafeAreaView style={tw`px-4 h-full`}>
      <TobBar
        body={
          <View style={tw`flex-row justify-between px-3`}>
              <Ionicon name='chevron-back' onPress={()=>navigation.goBack()} size={30}/>
              <Text style={tw`my-auto font-bold text-base`}>Gallery</Text>
              <Ionicon name='notifications' onPress={()=>navigation.navigate('notifications')} style={tw`text-green-800`} size={30}/>
          </View>
        }
    />
      <View style={tw`flex-row mx-4 justify-between bg-green-100 my-3 rounded-lg py-2  px-2`}> 
        <Ionicon name='search-outline' size={25} style={tw`mr-2`} />
        <TextInput
          placeholder='Search by date'
          style={tw`w-9/12`}
        />
        <Feather name='sliders' style={tw`my-auto`} size={20} color='#365C2A'/>
      </View>
      {/* <Galler */}
      <FlatList
        data={gallery}
        keyExtractor={ (item, index) => item.id }
        // contentContainerStyle={styles.container}
        numColumns={2}
        // style={tw`bg-red-300 w-full`}
        // scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        // contentOffset={1}
        renderItem={
            ({item}) => (
              <Pressable style={tw`w-1/2`}  onPress={()=>navigation.navigate('viewGallery', {data:item})}>
                <GalleryCard
                  image={item.photo_file}
                  head={item.name}
                  navigation ={navigation}
                />
              </Pressable>)}
      />
    </SafeAreaView>
  )
}

export default Gallery