import { View, Text, TextInput, FlatList,SafeAreaView, ScrollView,ActivityIndicator, Image, StatusBar, Pressable } from 'react-native'
import React, {useEffect, useState} from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import NewsCard from '../components/News/NewsCard'
import TobBar from '../components/topBar'
import TodoList from '../components/committee/todoList'
import {
  PanGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
} from "react-native-reanimated";
import { GetGallery, GetNews, GetPublications, LikeDisLikeNews, GetProfile, MultipleRequest } from '../connection/actions/user.actions'
import localStorage from "react-native-sync-localstorage";
import { RequestCall } from '../components/Modal/RequestCall'
import api from '../connection/api'

const Home = ({navigation, route}) => {

  const dgallery = [
    {photo_file: require("../images/onboarding/network.png")},
    {photo_file: require("../images/onboarding/network.png")}
  ]

  // const data = [
  //   {name: 'Lorem Ipsum', image: require("../images/onboarding/network.png"), id: 1},
  //   {name: 'Lorem Ipsum', image: require("../images/onboarding/network.png"), id: 2},
  //   {name: 'Lorem Ipsum', image: require("../images/onboarding/network.png"), id: 4},
  //   {name: 'Lorem Ipsum', image: require("../images/onboarding/network.png"), id: 5},
  // ]

  const [news, setNews] = useState(null)
  const [publications,setPublications] = useState([]);
  const [gallery,setGallery] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [name,setName] = useState('');
  const [open,setOpen] = useState(false)
  const [load,setLoad] = useState(undefined)

  const offsetHorizontal = useSharedValue(0);
  let is_load = route.params === undefined ? false : route.params.is_load;
  let query = route.params === undefined ? null : route.params.query;
  let value = route.params === undefined ? 0 : route.params.val

  const queryParams = {type: 'is_chapter', value: "True"}

  const arr = query !== null ? [
    api.get(`tenant/bukaa/tenant/news/newsview/get_news/?${query.type}=${query.value}`),
    api.get(`tenant/bukaa/tenant/publication/getyourpublication/?${query.type}=${query.value}`)
  ] : []

  const mErrCallback = (res) => {
    setOpen(false)
    alert(res)
  }

  const mCallback = (res) => {
    console.log('multiple',res.data)
    setOpen(false)
  }

  useEffect(() => {
    if(is_load){
      setOpen(true)
      MultipleRequest(arr,mCallback,mErrCallback)
    }
  }, [value])

  useEffect(()=>{
    setRefresh(!refresh);
    const unsubscribe = navigation.addListener('focus', () => {
        GetNews(callback,null)
        GetPublications(pCallback,null)
        GetGallery(gcallback,gerrcallback)
        GetProfile(profileCall)
    });

    return unsubscribe;
  },[])

  const profileCall =(res) => {
    let index;
    if(res){
      index = res.more_info.length > 0 ? res.more_info.find(i => i.name === "fullname")['value'] : null
      setName(index)
      localStorage.setItem('currentUser', res)
    }
  }

  const gcallback = (res) => {
    const reverseArr = res.data.reverse()
    setGallery(reverseArr)
    console.log('gallery',res)
  }

  const gerrcallback = (res) => {
    console.log('gallery error',res)
  }

  const likeNews=(data) =>{
    LikeDisLikeNews({id: data.id, like:'true', dislike:'false'})
  }

  const callback=(res)=>{
    setNews(res.data)
    // console.log('news',res.data)
  }
  const pCallback= (res) => {
    setPublications(res.data)
    // console.log('publication',res.data)
  }

  const scrollHorizontal = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offsetHorizontal.value }],
    };
  }, []);
  const glength = dgallery.length;

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (event,context) => {
      context.translateX = offsetHorizontal.value
    },
    onActive: (event,context) => {
        offsetHorizontal.value = event.translationX + context.translateX
    },
    onEnd: (event,context) => {
      const end = (-352 * glength) + 332
      if(offsetHorizontal.value > 0){
        offsetHorizontal.value = withSpring(0)
      }
      if(end > offsetHorizontal.value){
       offsetHorizontal.value = withSpring(end)
      }
    }
  })

  const UpperComponent=(props)=>{
    return(
      <View>
        {props.show ? <View>
          <Text style={tw`text-base font-bold my-2 mt-6`}> Feeds </Text>
          <View style={tw`flex-row justify-between px-5`}>
            <Pressable onPress={()=>navigation.navigate('events')}>
              <MaterialIcon name='event-available' style={tw`text-center pb-2`} color='#C4C4C4' size={35}/>
              <Text style={tw`text-xs`}>Events</Text>
            </Pressable>
            <Pressable onPress={()=>navigation.navigate('meetings')}>
              <MaterialIcon name='event-available' style={tw`text-center pb-2`} color='#C4C4C4' size={35}/>
              <Text style={tw`text-xs`}>Meetings</Text>
            </Pressable>
            <Pressable onPress={()=>navigation.navigate('gallery')}>
              <FontAwesome name='photo' style={tw`text-center pb-2`} color='#C4C4C4' size={30} />
              <Text style={tw`text-xs`}>Gallery</Text>
            </Pressable>

            <Pressable onPress={()=>navigation.navigate('publication')}>
              <Ionicon name='book' style={tw`text-center pb-2`} color='#C4C4C4' size={30}/>
              <Text style={tw`text-xs`}>Publications</Text>
            </Pressable>
          </View>
          </View> : null}

          <View style={[tw`flex-row my-3 mt-7 justify-between p-2 rounded-lg`,{backgroundColor: '#0089ce'}]}>
            <Text style={tw`font-bold text-white`}>{props.textTitle}</Text>
            <Text style={tw`text-xs text-white`}>See All ({props.count})</Text>
          </View>
          <View style={tw` flex-row mt-0 `}></View>
      </View>
    )
    }


    return (
      <SafeAreaView style={tw`mx-3`}>
        <RequestCall open={open} />
        <StatusBar backgroundColor={'#0089ce'} showHideTransition='slide'/>
        <TobBar
          body={
            <View style={tw`flex-row justify-between `}>
              <View>
                <Ionicon name='menu' onPress={() => navigation.toggleDrawer()} size={34} />
              </View>
              <View style={{ flexGrow: 2 }}></View>
              <Text style={tw`my-auto px-4`}>Welcome {name}</Text>
              <Pressable style={{ flexGrow: 0.1 }} onPress={() => navigation.navigate('profile')}>
                <Image style={tw`h-8 w-8 rounded-full`} source={require('../images/user.png')} />
              </Pressable>
              <Ionicon name='notifications' onPress={() => navigation.navigate('notifications')} size={28} color='#0092dc' />
            </View>
          }
        />
        <FlatList
          data={news}
          keyExtractor={(item, index) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View style={tw`h-32`}></View>}
          ListHeaderComponent={
            <View>
              <View style={[tw`flex-row my-3 rounded-lg py-2  px-2`, { backgroundColor: "#93d3f482" }]}>
                <Ionicon name='ios-search' size={25} style={tw`mr-2`} />
                <TextInput
                  placeholder='Search'
                  style={tw`w-9/12`}
                />
              </View>
              {!route.params || route.params.query.type != 'is_exco' ?
                <>
                  <Text style={tw`text-base font-bold mb-2`}>Latest Update</Text>
                  <PanGestureHandler onGestureEvent={gestureHandler}>
                    <Animated.View style={[tw`flex-row`, scrollHorizontal]}>
                      {gallery.length > 0 ? gallery.map((image, index) =>
                        <Image resizeMode='stretch'
                          resizeMethod='auto' key={index}
                          style={tw`h-56 mx-3 w-11/12 rounded-lg`}
                          source={{ uri: image.photo_file }}
                        />) : <Text>No image in gallery</Text>}
                    </Animated.View>
                  </PanGestureHandler>
                </>
                : null
              }
              <UpperComponent textTitle='News' show={true} count={news !== null ? news.length : 0} />
            </View>
          }
          renderItem={
            ({ item }) => (
              <NewsCard
                image={item.image}
                head={item.name}
                item={item}
                navigation={navigation}
                isLiked={item.likes}
                pressLike={() => likeNews(item)}
                pressDisLike={() => alert('like')}
                to='viewNews'
              />
            )}
        />
      </SafeAreaView>
    );
    
}

export default Home