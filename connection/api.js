import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const URL = 'https://rel8.watchdoglogisticsng.com/';

const instance = axios.create({
  baseURL: URL,
});

instance.interceptors.request.use(async (config) => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
  } catch (error) {
    console.error("Error retrieving token from AsyncStorage", error);
  }
  
  return config;
});

export default instance;
