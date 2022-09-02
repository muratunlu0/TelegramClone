import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {UserContext} from './user';
import LoginScreen from './Login';
import BottomNavigator from './bottomNavigator';
import ChatScreen from './Chat';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useContext} from 'react';

const MainStackNav = createStackNavigator();
const MainStackNavigator = () => {
  const {user, setUser} = useContext(UserContext);
  const getUser = async () => {
    const userData = await AsyncStorage.getItem('user');
    const _user = userData ? JSON.parse(userData) : null;
    setUser(_user);
  };

  useEffect(() => {
    // logout();
    getUser();
  });
  return (
    <MainStackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {user ? (
        <>
          <MainStackNav.Screen name="BottomNav" component={BottomNavigator} />
          <MainStackNav.Screen
            name="Chat"
            component={ChatScreen}
            options={{
              headerShown: true,
              headerTitle: 'Chat',
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: 'rgba(81,125,162,255)',
              },
            }}
          />
        </>
      ) : (
        <>
          <MainStackNav.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
    </MainStackNav.Navigator>
  );
};

export default MainStackNavigator;
