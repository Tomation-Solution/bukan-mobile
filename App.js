import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import tw from 'tailwind-react-native-classnames';

// Import your screens
import SplashScreen from './pages/splashScreen';
import AppWelcomeScreen from './pages/WelcomeScreen';
import Login from './pages/login';
import Register from './pages/register';
import ForgotPassword from './pages/forgotPasword';
import MailSent from './pages/mailSent';
import ConfirmCode from './pages/confirmCode';
import SetNewPassword from './pages/setNewPassword';
import PasswordChanged from './pages/passwordChanged';
import AccountCreated from './pages/accountCreated';
import Home from './pages/home';
import Gallery from './pages/Gallery/gallery';
import ViewGallery from './pages/Gallery/viewGallery';
import News from './pages/News';
import ViewNews from './pages/News/viewNews';
import Events from './pages/Events';
import ViewEvent from './pages/Events/viewEvent';
import Chat from './pages/Chat';
import PrivateSingle from './pages/Chat/Private/privateSingle';
import GeneralSingle from './pages/Chat/General/singleGeneral';
import MyAccount from './pages/MyAccount';
import Minutes from './pages/minutes';
import { Members } from './pages/members';
import {ViewMember} from './pages/members/ViewMember';
import Subscribe from './pages/subscription';
import Support from './pages/support';
import Elections from './pages/election';
import Publication from './pages/publication';
import ViewPublication from './pages/publication/viewPublication';
import Exco from './pages/exco';
import ViewExco from './pages/exco/viewExco';
import Notifications from './pages/Notification';
import Profile from './pages/Profile/profile';
import EditProfile from './pages/Profile/EditProfile';
import Chapters from './pages/onboarding/Chapters';
import About from './pages/about';
import Meetings from './pages/Meeting';
import CustomDrawerList from './components/support/drawer';
import Logout from './components/Modal/Logout';

import * as StartScreen from 'expo-splash-screen';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: false, 
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#053B8D', 
        tabBarInactiveTintColor: '#C4C4C4',
        tabBarStyle: { shadowColor: '#fff' }
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicon name="home" size={23} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Chat" 
        component={Chat} 
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color }) => (
            <MaterialIcon name="chat-bubble" size={23} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="MyAccount" 
        component={MyAccount} 
        options={{
          tabBarLabel: 'My Account',
          tabBarIcon: ({ color }) => (
            <MaterialIcon name="account-balance-wallet" size={23} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Members" 
        component={Members} 
        options={{
          tabBarLabel: 'Members',
          tabBarIcon: ({ color }) => (
            <MaterialIcon name="groups" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};


const DrawerNavigation = () => {
  return (
    <Drawer.Navigator 
      screenOptions={{ headerShown: false }} 
      initialRouteName="HomeScreen" 
      drawerContent={props => <CustomDrawerList {...props} />}
    >
      <Drawer.Screen 
        name="HomeScreen" 
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({ focused, size }) => (
            <Ionicon name="md-home" size={size} color={focused ? '#365C2A' : '#c4c4c4'} />
          ),
        }} 
        component={TabScreen} 
      />
      <Drawer.Screen 
        name="event" 
        options={{
          drawerLabel: 'Events',
          drawerIcon: ({ focused, size }) => (
            <MaterialIcon name='event-available' color={focused ? '#365C2A' : '#C4C4C4'} size={size} />
          ),
        }} 
        component={Events} 
      />
      <Drawer.Screen 
        name="gallery" 
        options={{
          drawerLabel: 'Gallery',
          drawerIcon: ({ focused, size }) => (
            <FontAwesome name="photo" size={size} color={focused ? '#365C2A' : '#c4c4c4'} />
          ),
        }} 
        component={Gallery} 
      />
      <Drawer.Screen 
        name="election" 
        options={{
          drawerLabel: 'Elections',
          drawerIcon: ({ focused, size }) => (
            <MaterialIcon name="how-to-vote" size={size} color={focused ? '#365C2A' : '#c4c4c4'} />
          ),
        }} 
        component={Elections} 
      />
      <Drawer.Screen 
        name="subscribe" 
        options={{
          drawerLabel: 'Subscription',
          drawerIcon: ({ focused, size }) => (
            <MaterialIcon name="subscriptions" size={size} color={focused ? '#365C2A' : '#c4c4c4'} />
          ),
        }} 
        component={Subscribe} 
      />
      <Drawer.Screen 
        name="support" 
        options={{
          drawerLabel: 'Support',
          drawerIcon: ({ focused, size }) => (
            <MaterialIcon name="headset-mic" size={size} color={focused ? '#365C2A' : '#c4c4c4'} />
          ),
        }} 
        component={Support} 
      />
      <Drawer.Screen 
        name="logout" 
        options={{
          drawerLabel: 'Logout',
          drawerIcon: ({ focused, size }) => (
            <>
              {focused ? <Logout /> : null}
              <MaterialIcon name="logout" size={size} color={focused ? '#365C2A' : '#c4c4c4'} />
            </>
          ),
        }} 
        component={Home} 
      />
      <Drawer.Screen name="login" component={Login} />
      {/* <Drawer.Screen name="dashboard" component={DrawerNavigation} /> */}
      
    </Drawer.Navigator>
  );
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const hideSplashScreen = async () => await StartScreen.hideAsync();

  const checkAuthentication = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      setIsAuthenticated(!!token);
    } catch (error) {
      console.error('Failed to fetch the auth token from storage', error);
    }
  };

  useEffect(() => {
    checkAuthentication();
    hideSplashScreen();
  }, []);

  if (isAuthenticated === null) {
    // You can render a loading screen or splash screen here while checking authentication
    // return null;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="dashboard" component={DrawerNavigation} />
            <Stack.Screen name="meetings" component={Meetings} />
            <Stack.Screen name="gallery" component={Gallery} />
            <Stack.Screen name="viewGallery" component={ViewGallery} />
            <Stack.Screen name="news" component={News} />
            <Stack.Screen name="publication" component={Publication} />
            <Stack.Screen name="exco" component={Exco} />
            <Stack.Screen name="viewPublication" component={ViewPublication} />
            <Stack.Screen name="viewNews" component={ViewNews} />
            <Stack.Screen name="viewExco" component={ViewExco} />
            <Stack.Screen name="private-single" component={PrivateSingle} />
            <Stack.Screen name="general-single" component={GeneralSingle} />
            <Stack.Screen name="events" component={Events} />
            <Stack.Screen name="viewEvents" component={ViewEvent} />
            <Stack.Screen name="notifications" component={Notifications} />
            <Stack.Screen name="view-member" component={ViewMember} />
            <Stack.Screen name="profile" component={Profile} />
            <Stack.Screen name="editProfile" component={EditProfile} />
            <Stack.Screen name="verification" component={Chapters} />
            <Stack.Screen name="about" component={About} />
            <Stack.Screen name='minutes' component={Minutes}/>  
            {/* <Stack.Screen name="meetings" component={Meetings} /> */}
          </>
        ) : (
          <>
            <Stack.Screen name="splashScreen" component={SplashScreen} />
            <Stack.Screen name="home" component={AppWelcomeScreen} />
            <Stack.Screen name="HomeScreen" component={DrawerNavigation} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="register" component={Register} />
            <Stack.Screen name="forgotPassword" component={ForgotPassword} />
            <Stack.Screen name="mailSent" component={MailSent} />
            <Stack.Screen name="confirmCode" component={ConfirmCode} />
            <Stack.Screen name="setNewPassword" component={SetNewPassword} />
            <Stack.Screen name="changedPassword" component={PasswordChanged} />
            <Stack.Screen name="accountCreated" component={AccountCreated} />
            {/* <Stack.Screen name="gallery" component={Gallery} />
            <Stack.Screen name="viewGallery" component={ViewGallery} /> */}

          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}