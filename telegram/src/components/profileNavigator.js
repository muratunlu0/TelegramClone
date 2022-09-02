import React from 'react';
import 'react-native-gesture-handler';
import ThemeProfileScreen from './themePanel';
import EditProfileScreen from './editProfile';
import ProfileScreen from './profile';
import {createStackNavigator} from '@react-navigation/stack';

const ProfileStackNav = createStackNavigator();
const ProfileStackNavigator = () => {
  return (
    <ProfileStackNav.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <ProfileStackNav.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerTitle: 'Profile',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'rgba(81,125,162,255)',
          },
        }}
      />
      <ProfileStackNav.Screen
        name="ThemeProfileScreen"
        component={ThemeProfileScreen}
        options={{
          headerTitle: 'Theme',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'rgba(81,125,162,255)',
          },
        }}
      />
      <ProfileStackNav.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{
          headerTitle: 'Edit',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'rgba(81,125,162,255)',
          },
        }}
      />
    </ProfileStackNav.Navigator>
  );
};

export default ProfileStackNavigator;
