import React from 'react';
import {View} from 'react-native';
import 'react-native-gesture-handler';

const ChatScreen = ({route, navigation}) => {
  const {User} = route.params;
  navigation.setOptions({headerTitle: User.firstName});
  return (
    <View>{/* <Text style={{color: 'black'}}>{User.nickname}</Text> */}</View>
  );
};

export default ChatScreen;
