import React from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import chatList from './chatList';

const UserChatButton = ({user, message, Date}) => {
  const {navigate} = useNavigation();

  return (
    <ScrollView
      alwaysBounceVertical={false}
      showsVerticalScrollIndicator={false}
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <Pressable
        style={styles.Pressable}
        onPress={() => {
          navigate('Chat', {
            User: user,
          });
        }}>
        <View style={styles.view}>
          <View style={styles.view2}>
            <View style={styles.row}>
              <Image
                style={styles.image}
                source={{
                  uri: user.imageUrl,
                }}
              />
              <View style={styles.column}>
                <Text style={styles.nickname}>{`${
                  user.firstName + ' ' + user.lastName
                }`}</Text>
                <Text style={styles.lastMessage}>{`${message}`}</Text>
              </View>
            </View>
            <Text style={styles.date}>{Date}</Text>
          </View>
        </View>
      </Pressable>
    </ScrollView>
  );
};

const Chats = () => {
  return (
    <View style={styles.view13}>
      {chatList[0].messages != null ? (
        <UserChatButton
          user={chatList[0]}
          Date="7:27 PM"
          message={chatList[0].messages[chatList[0].messages.length - 1].text}
        />
      ) : null}
      {chatList[1].messages != null ? (
        <UserChatButton
          user={chatList[1]}
          Date="5:38 PM"
          message={chatList[1].messages[chatList[1].messages.length - 1].text}
        />
      ) : null}
      {chatList[2].messages != null ? (
        <UserChatButton
          user={chatList[2]}
          Date="3:36 PM"
          message={chatList[2].messages[chatList[2].messages.length - 1].text}
        />
      ) : null}
      {chatList[3].messages != null ? (
        <UserChatButton
          user={chatList[3]}
          Date="1:17 PM"
          message={chatList[3].messages[chatList[3].messages.length - 1].text}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  Pressable: {
    display: 'flex',
    flexDirection: 'column',
    borderBottomColor: 'rgba(0,0,0,0.3)',
  },
  view: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  view2: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 18,
    paddingLeft: 18,
    marginHorizontal: 2,
    justifyContent: 'space-between',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  row2: {
    paddingLeft: 12,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  image: {
    alignSelf: 'center',
    width: 37,
    height: 37,
    borderRadius: 32,
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginRight: 8,
  },
  nickname: {
    marginLeft: 12,
    fontWeight: '600',
    fontSize: 14,
    color: 'black',
  },
  lastMessage: {
    marginLeft: 12,
    fontWeight: '600',
    fontSize: 14,
    color: 'gray',
  },
  view13: {
    fontWeight: '600',
    fontSize: 19,
    backgroundColor: 'black',
  },
  date: {fontSize: 11, marginRight: 16, color: 'gray', alignSelf: 'center'},
});

export default Chats;
