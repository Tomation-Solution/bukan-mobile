import { useState,useEffect } from 'react';
import {Text, FlatList, View, ActivityIndicator} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { MoneyCard } from '../../components/account/MoneyCard'
import { EventCard } from '../../components/notification/EventCard'
import { NotificationCard } from '../../components/notification/NoificationCard'
import { LoadingData } from '../../components/utilitiyFunctions'
import { RequestCall } from '../../connection/actions/user.actions'

export const EventsNotice =({navigation})=>{
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
      const unsubscribe = navigation.addListener('focus', () => {
        RequestCall('get',null,callback,null,'/reminder/member_reminder/',null);
      });
    
        return unsubscribe;
    },[])

    const callback=(res)=>{
        setLoading(false)
        setEvents(res.data)
    }

    
    return(
        <>
           {events.lenght > 0 ? <FlatList
                data={events}
                keyExtractor={ (item, index) => item.id }
                showsVerticalScrollIndicator={false}
                ListFooterComponent={<View style={tw`h-20`}></View>}
                renderItem={
                    ({item}) => (
                <EventCard
                    heading={item.name}
                    time={item.time}
                />
                    )}
            /> : <LoadingData loading={loading} message="No Events" />}
        </>
    )
}