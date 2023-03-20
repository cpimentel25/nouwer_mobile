import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text } from 'react-native';
import { Pressable } from 'react-native';

import styles from '../../Styles';

const Home = ({ logOut }) => {
  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem('@storage_token');
      console.log('remove user data');
      logOut(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <Pressable onPress={removeToken}>
        <Text>Log Out</Text>
      </Pressable>
    </View>
  );
};

export default Home;
