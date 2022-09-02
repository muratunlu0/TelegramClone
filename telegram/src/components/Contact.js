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

const chatList = [
  {
    id: 1,
    firstName: 'Esra',
    lastName: 'Yılmaz',
    username: 'esrayilmzz',
    bio: 'last seen 1 minute ago',
    imageUrl:
      'https://img.wattpad.com/04ad7d37f06664571ea6476267ec0fe74e0346da/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f64774f52477064625072726b35673d3d2d38362e313537376134323366373833383934343531323432303631373430342e6a7067?s=fit&w=720&h=720',
  },
  {
    id: 2,
    firstName: 'Berk',
    lastName: 'Deniz',
    username: 'brkdnz',
    bio: 'online',
    imageUrl:
      'https://foto.haberler.com/galeri/2017/11/01/instagram-in-siradisi-fenomenleri-710426_4267_70_b.jpg',
  },
  {
    id: 3,
    firstName: 'Ponçik',
    lastName: 'Bayan',
    username: 'poncikbayn',
    bio: 'last seen 1 hour ago',
    imageUrl:
      'https://galeri13.uludagsozluk.com/726/sozluk-yazarlarinin-asik-oldugu-kiz-tipi_1873752.jpg',
  },
  {
    id: 4,
    firstName: 'Zeynep',
    lastName: 'Çiçek',
    username: 'zynepcek',
    bio: 'online',
    imageUrl:
      'https://i.pinimg.com/736x/bf/f1/1d/bff11de83086515bdf280818ec8c3458.jpg',
  },
];

const UserChatButton = ({user}) => {
  const {navigate} = useNavigation();

  return (
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
              <Text style={styles.lastMessage}>{`${user.bio}`}</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const Chats = () => {
  return (
    <View>
      <ScrollView
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.view13}>
          <UserChatButton user={chatList[0]} />
          <UserChatButton user={chatList[1]} />
          <UserChatButton user={chatList[2]} />
          <UserChatButton user={chatList[3]} />
        </View>
      </ScrollView>
      {/* <Text style={{color: 'black'}}>Welcome {user.firstName}</Text> */}
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
});

export default Chats;
