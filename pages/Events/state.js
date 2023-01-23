import { View, FlatList,Text } from 'react-native'
import React, { useState } from 'react'
import NewsCard from '../../components/News/NewsCard'
import tw from 'tailwind-react-native-classnames'
import EventsCard from '../../components/Events/EventsCard'

const State = ({navigation}) => {
  const [events,setEvents] = useState([])

  
  return (
    <View>
      <View style={tw` flex-row mt-0 `}>
        <FlatList
            data={events}
            keyExtractor={ (item, index) => item.id }
            // contentContainerStyle={styles.container}
            numColumns={2}
            // scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            // contentOffset={1}
            renderItem={
                ({item}) => (
                //   <Pressable style={tw`w-1/2`}>
                  <EventsCard 
                    image={item.picture}
                    head={item.title}
                    body={item.body}
                    navigation={navigation}
                    to='viewEvents'
                    type='state'
                  />
                //   </Pressable>
                  )}/>
        </View>
    </View>
  )
}

export default State