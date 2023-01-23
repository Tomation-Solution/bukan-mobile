import { View, FlatList,Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import NewsCard from '../../components/News/NewsCard'
import tw from 'tailwind-react-native-classnames'
import EventsCard from '../../components/Events/EventsCard'
import { GetEvents } from '../../connection/actions/user.actions'
import moment from 'moment/moment'
import { LoadingData } from '../../components/utilitiyFunctions'
import ScheduledMeetingCard from '../../components/Events/ScheduledMeetingCard'


const ScheduledMeeting = ({navigation}) => {

  const [event, setEvent] = useState([])
  const [loading,setLoad] = useState(true)

  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus', () => {
      GetEvents(callback)
    });

    return unsubscribe;
  },[])

  const callback =(res)=>{
    setLoad(false)
    setEvent(res.data.data)
  }

  const Accept = () => alert('Meeting Accepted')

  const Reshcedule = () => alert('Request Submitted')

  console.log('evt',event)

  const JoinEvent = (event) => {
    const currentDate = moment()
    const meetDate = moment(event.startDate)
    const dateDiff = currentDate.diff(meetDate, 'days') === 0 ? true : false;
    if(event.event_access.link !== 'pending' && dateDiff){
      // join meeting
      alert('meeting joined')
    }
  }

  
  return (
    <View>
      <View style={tw` flex-row mt-3 `}>
        { event.length > 0 ? 
          <FlatList
            data={event}
            keyExtractor={ (item, index) => item.id }
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={
                ({item}) => (
                  <ScheduledMeetingCard 
                    text={item.name}
                    startdate={moment(item.startDate).format("MMMM Do, YYYY")}
                    start_time={item.startTime.substring(0,5)}
                    item={item}
                    navigation={navigation}
                    to='viewEvents'
                    type='national'
                    accept={() => Accept()}
                    reschedule={() => Reshcedule()}
                    join={() => JoinEvent(item)}
                  />
                  )}/> :
                  <LoadingData Loading={loading} text="No Events"/>
          }
        </View>
    </View>
  )
}

export default ScheduledMeeting