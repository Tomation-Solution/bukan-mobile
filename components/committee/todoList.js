import { View, Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

export default function TodoList(props) {
  return (
    <View style={tw`w-10/12 mx-auto bg-white mt-2 mb-1`}>
        <View style={tw`bg-green-800 py-4 rounded-lg my-auto mb-2`}>
            <Text style={tw`text-center font-bold text-base text-white`}>To-Do List</Text>
        </View>
        {props.data? props.data.map((e, index)=>
        <View key={index} style={tw`flex-row w-10/12 px-1 my-1`}>
            <View style={tw`${index % 2 ==0 ?'bg-green-800':'bg-green-500'} py-1 px-2`}>
                <Text style={tw`text-white text-base`}>{e.day}</Text>
                <Text style={tw`text-white text-center`}>{e.month}</Text>
            </View>
            <Text style={tw`text-gray-600 my-auto ml-2`} >{e.body}</Text>
        </View>)
        :<Text style={tw`text-center py-3 text-gray-600`}>No Todo at the moment</Text>}
        <Text style={tw`text-right p-2`}>See all</Text>
    </View>
  )
}