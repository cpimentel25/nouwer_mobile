import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import { View, Text, SafeAreaView, Image, Button } from 'react-native';
import { Pressable } from 'react-native';
import SelectRoster from '../../Components/Roster/Select';
import DisplayTotal from '../../Components/Roster/Display';
import EnterValue from '../../Components/Roster/EnterValue';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

import styles from './styles';

const Home = ({ logOut }) => {
  const userData = useSelector((state) => state.counter?.user);

  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem('@storage_token');
      console.log('remove user data');
      logOut(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log('run use effect');
    if (!userData.email) {
      console.log('userData not existed: ', userData);
      removeToken()
    }
  }, []);

  const avatar = 'https://robohash.org/nouwermobilapp.png';
  // const avatar = `'https://robohash.org/${userData?.firstName}${userData?.lastName}.png'`;

  console.log('user data: ', userData);

  return (
    <View style={styles.body}>
      <View style={styles.userInfo}>
        <View style={styles.userContent}>
          <Image source={{ uri: avatar }} style={styles.avatar} />
          <View>
            <Text style={styles.text}>Welcome,</Text>
            <Text style={styles.user}>
              {userData?.firstName} {userData?.lastName}
            </Text>
          </View>
        </View>
        <View>
          <Pressable onPress={removeToken}>
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              style={styles.icon}
              size={20}
            />
            {/* <FontAwesomeIcon icon='faArrowRight'/> */}
          </Pressable>
        </View>
      </View>
      <SafeAreaView>
        <SelectRoster />
        <DisplayTotal />
        <EnterValue />
      </SafeAreaView>
      {/* <View>
        <Button
          title='request permissions'
          onPress={() => sendMessage()}
          // onPress={() => requestSmsPermission()}
        />
      </View> */}
    </View>
  );
};

export default Home;
