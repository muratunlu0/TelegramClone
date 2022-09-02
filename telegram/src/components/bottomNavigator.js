import React from 'react';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ContactScreen from './Contact';
import MessagesScreen from './Messages';
import ProfileStackNavigator from './profileNavigator';

const BottomNav = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <BottomNav.Navigator>
      <BottomNav.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarIcon: tabInfo => {
            return (
              <AntDesign
                name="contacts"
                size={20}
                color={tabInfo.focused ? 'rgba(81,125,162,255)' : '#8e8e93'}
              />
            );
          },
          headerTitle: 'Telegram',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'rgba(81,125,162,255)',
          },
        }}
      />
      <BottomNav.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarIcon: tabInfo => {
            return (
              <AntDesign
                name="message1"
                size={20}
                color={tabInfo.focused ? 'rgba(81,125,162,255)' : '#8e8e93'}
              />
            );
          },
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'rgba(81,125,162,255)',
          },
        }}
      />
      <BottomNav.Screen
        name="Profile"
        options={{
          tabBarIcon: tabInfo => {
            return (
              <AntDesign
                name="user"
                size={20}
                color={tabInfo.focused ? 'rgba(81,125,162,255)' : '#8e8e93'}
              />
            );
          },
          headerShown: false,
        }}
        component={ProfileStackNavigator}
      />
    </BottomNav.Navigator>
  );
};

export default BottomNavigator;
