import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RoundedButton from '../button/RoundedButton';

export default function Logout(props) {
  const [visible, setVisible] = useState(true);
  const navigation = useNavigation();

  const cancel = () => {
    props.setVisible(false);
    navigation.navigate('HomeScreen');
  };

  const logout = async () => {
    try {
      // Clear AsyncStorage
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('user_email');
      await AsyncStorage.removeItem('user_type');
      await AsyncStorage.removeItem('loggedIn');
      await AsyncStorage.removeItem('isRegistered');

      // Reset the navigation stack and navigate to the login screen
      navigation.reset({
        index: 0,
        routes: [{ name: 'login' }],
      });

      props.setVisible(false);
    } catch (error) {
      console.error('Error clearing async storage during logout:', error);
    }
  };

  return (
    <View style={tw`m-auto bg-white rounded-xl w-8/12`}>
      <View style={tw`border-b border-green-300 my-3 mx-5`}>
        <Text style={tw`font-bold text-lg text-center text-green-500`}>Confirm Logout</Text>
      </View>
      <Text style={tw`px-5 text-center py-3 text-gray-700`}>Kindly confirm you wish to logout of the application</Text>
      <View style={tw`px-5 flex-row mb-4 justify-around `}>
        <View style={tw`w-5/12`}>
          <RoundedButton text='Logout' pressed={logout} />
        </View>
        <Pressable onPress={cancel}>
          <Text style={tw`my-auto`}>Cancel</Text>
        </Pressable>
      </View>
    </View>
  );
}
