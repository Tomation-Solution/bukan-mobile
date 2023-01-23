import { useState,useEffect } from 'react';
// import * as BackgroundFetch from 'expo-background-fetch';
// import * as TaskManager from 'expo-task-manager';
import {View, FlatList} from 'react-native'
import localStorage from "react-native-sync-localstorage";
import tw from 'tailwind-react-native-classnames'
import { NotificationCard } from '../../components/notification/NoificationCard'
import { LoadingData } from '../../components/utilitiyFunctions';
import { RequestCall } from '../../connection/actions/user.actions';
import { EventCard } from '../../components/notification/EventCard'

// const BACKGROUND_FETCH_TASK = 'background-fetch';
// const token = localStorage.getItem('token')

// TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
//     const now = Date.now();
  
//     console.log(`Got background fetch call at date: ${new Date(now).toISOString()}`);

  
//     // Be sure to return the successful result type!
//     return BackgroundFetch.BackgroundFetchResult.NewData;
// });

export const Messages =({navigation})=>{

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true)
    const [isRegistered, setIsRegistered] = useState(false);
    const [status, setStatus] = useState(null);

    // async function registerBackgroundFetchAsync() {
    //     return BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
    //       minimumInterval: 60 * 2, // 3 minutes
    //       stopOnTerminate: false, 
    //       startOnBoot: true,
    //     });
    // }


    useEffect(()=>{
        // checkNotificationAsync()
        // pushNotification()

        const unsubscribe = navigation.addListener('focus', () => {
        RequestCall('get',null,callback,errcallback,'reminder/member_reminder/',null)
      });
    
        return unsubscribe;
    },[])

    // const checkNotificationAsync = async () => {
    //     const status = await BackgroundFetch.getStatusAsync();
    //     const isRegistered = await TaskManager.isTaskRegisteredAsync(BACKGROUND_FETCH_TASK);
        
    //     setStatus(status);
    //     setIsRegistered(isRegistered);
    // }

    // const pushNotification = () => {

    //     if(!isRegistered && token !== 'undefined'){
    //         registerBackgroundFetchAsync()
    //     }
    // }

    const callback=(res)=>{
        setLoading(false)
        // console.log(res.results)
        setMessages(res.results)
    }

    const errcallback=(res)=>{
        setLoading(false)
        // console.log(res)
    }

    // const data = [
    //     {id:1,name: 'New message from Michael Ayinde ', time:'2 hours ago'},
    //     {id:2,name: 'New message from Michael Ayinde ', time:'2 hours ago'},
    //     {id:3,name: 'New message from Michael Ayinde ', time:'2 hours ago'},
    //     {id:4,name: 'New message from Michael Ayinde ', time:'2 hours ago'},
    //     {id:5,name: 'New message from Michael Ayinde ', time:'2 hours ago'},
    //     {id:6,name: 'New message from Michael Ayinde ', time:'2 hours ago'},
    //     {id:7,name: 'New message from Michael Ayinde ', time:'2 hours ago'},
    //     {id:8,name: 'New message from Michael Ayinde ', time:'2 hours ago'},
    //     {id:9,name: 'New message from Michael Ayinde ', time:'2 hours ago'},
        
    // ]

    return(
        <>
        {messages.length > 0 ? <FlatList
             data={messages}
             keyExtractor={ (item, index) => item.id }
             showsVerticalScrollIndicator={false}
             ListFooterComponent={<View style={tw`h-20`}></View>}
             renderItem={
                 ({item}) => (
             <EventCard
                 heading={item.title}
                 time={item.body}
             />
                 )}
         /> : <LoadingData Loading={loading} text="No Messages" />}
     </>
    )
}