import React, {useState, useContext} from 'react';
import {
  Alert,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import {UserContext} from './user';
import countries from './countries';

const countriesItems = countries.map(i => {
  return (
    <Picker.Item
      key={i}
      label={
        i.label.toString() +
        (i.callCode !== -1 ? ' (+' + i.callCode.toString() + ')' : '')
      }
      value={i.callCode.toString()}
    />
  );
});
const LoginScreen = () => {
  const [selectedCountry, setSelectedCountry] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [userName, setUserName] = useState();

  const {setUser} = useContext(UserContext);

  const login = async () => {
    if (
      firstName != null &&
      lastName != null &&
      userName != null &&
      phoneNumber != null &&
      selectedCountry != null
    ) {
      var info = {
        firstName: firstName.toString(),
        lastName: lastName.toString(),
        userName: userName.toString(),
        phoneNumber: phoneNumber.toString(),
        selectedCountry: selectedCountry.toString(),
      };
      setUser(info);
      await AsyncStorage.setItem('user', JSON.stringify(info));
      Alert.alert('Account created');
    } else {
      Alert.alert('Fill in the missing sections');
    }
  };

  return (
    <View style={styles.loginView}>
      <View style={styles.view}>
        <Text style={styles.loginTitleText}>Your phone number</Text>
        <Text style={styles.loginInfoText}>
          Please confirm your country code and enter your phone number.
        </Text>
      </View>
      <View style={styles.card}>
        <Picker
          selectedValue={selectedCountry}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedCountry(itemValue)
          }>
          {countriesItems}
        </Picker>
      </View>
      <View style={styles.card}>
        <TextInput
          placeholder="5XX XXX XX XX"
          onChangeText={newText => setPhoneNumber(newText)}
          marginHorizontal={11}
          height={'100%'}
          width={'100%'}
          keyboardType="number-pad"
          placeholderTextColor={'white'}
          fontSize={14}
          label="Phone number"
        />
      </View>
      <View
        style={{
          height: 2,
          backgroundColor: 'white',
          width: 120,
          marginVertical: 20,
        }}></View>
      <View style={styles.card}>
        <TextInput
          placeholder="First Name"
          onChangeText={newText => setFirstName(newText)}
          marginHorizontal={11}
          height={'100%'}
          width={'100%'}
          // keyboardType="number-pad"
          placeholderTextColor={'white'}
          fontSize={14}
          label="firstName"
        />
      </View>
      <View style={styles.card}>
        <TextInput
          placeholder="Last Name"
          onChangeText={newText => setLastName(newText)}
          marginHorizontal={11}
          height={'100%'}
          width={'100%'}
          // keyboardType="number-pad"
          placeholderTextColor={'white'}
          fontSize={14}
          label="lastName"
        />
      </View>
      <View style={styles.card}>
        <TextInput
          placeholder="@username"
          onChangeText={newText => setUserName(newText)}
          marginHorizontal={11}
          height={'100%'}
          width={'100%'}
          // keyboardType="number-pad"
          placeholderTextColor={'white'}
          fontSize={14}
          label="username"
        />
      </View>
      <TouchableOpacity
        onPress={login}
        style={{
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.2)',
          alignItems: 'center',
          justifyContent: 'center',
          width: 67,
          height: 67,
          backgroundColor: '#5fa3de',
          borderRadius: 50,
          marginTop: 21,
        }}>
        <AntDesign name={'arrowright'} size={25} color="white" />
      </TouchableOpacity>
      {/* <Pressable>
        <Text style={{color: 'white'}} onPress={login}>
          Login button
        </Text>
      </Pressable> */}
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
  },
  loginView: {
    backgroundColor: '#1d2733',
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
  plusPhoneText: {
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
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
});
export default LoginScreen;
