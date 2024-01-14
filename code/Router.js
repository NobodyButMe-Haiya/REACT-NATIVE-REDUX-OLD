import React from 'react';

// navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screen
// authentication(access denied)
import LoginScreen from './screen/access/Login';
import ForgotPasswordScreen from './screen/access/ForgetPassword';
import RegisterScreen from './screen/access/Register';
// main(access granted)
import HomeScreen from './screen/application/Home';
import NotificationsScreen from './screen/application/Notification';
import ProfileScreen from './screen/application/Profile';
// end screen

// redux
import {useSelector} from 'react-redux';
import {selectAuth} from './redux/Reducer/AuthenticationSlice';

// react navigation
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

const MainTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const Router = () => {
  // new style code const {isAuthenticated} = useSelector(selectAuth);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <NavigationContainer>
      {/* Check if the user is authenticated */}
      {/* If authenticated, show main tabs, else show auth stack */}
      {isAuthenticated ? <MainTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Router;
