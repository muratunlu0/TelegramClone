// import React from 'react';
// import {Text, View} from 'react-native';
// import 'react-native-gesture-handler';
// import {useNavigation} from '@react-navigation/native';

// const ProfileScreen = () => {
//   const {navigate} = useNavigation();
//   return (
//     <View>
//       <Text
//         style={{color: 'black'}}
//         onPress={() => navigate('ThemeProfileScreen')}>
//         Change Theme
//       </Text>
//       <Text
//         style={{color: 'black'}}
//         onPress={() => navigate('EditProfileScreen')}>
//         Edit Profile
//       </Text>
//     </View>
//   );
// };

import {UserContext} from './user';
import React, {useContext} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import 'react-native-gesture-handler';

const ProfileScreen = () => {
  const {navigate} = useNavigation();
  const {setUser} = useContext(UserContext);

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
  };

  return (
    <View style={styles.View}>
      <View style={styles.card}>
        <Text
          style={styles.Text}
          onPress={() => navigate('ThemeProfileScreen')}>
          Theme
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.Text} onPress={() => navigate('EditProfileScreen')}>
          Edit Profile
        </Text>
      </View>
      <TouchableOpacity onPress={logout} style={styles.logout}>
        <AntDesign name={'export2'} size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    width: 314,
    height: 58,
    borderColor: 'gray',
    borderRadius: 10,
    marginHorizontal: 4,
    marginVertical: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  View: {
    // backgroundColor: '#1d2733',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  view: {
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 8,
  },
  phoneNumberRow: {
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 8,
  },
  Text: {
    color: 'rgba(81,125,162,255)',
    alignSelf: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    height: '100%',
    width: '100%',
  },
  loginTitleText: {
    width: 300,
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
  },
  loginInfoText: {
    width: 260,
    color: 'gray',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 16,
  },
  logout: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 67,
    height: 67,
    backgroundColor: 'red',
    borderRadius: 50,
    marginTop: 21,
  },
});

export default ProfileScreen;
