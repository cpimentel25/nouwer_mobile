import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import { View, Text, SafeAreaView } from 'react-native';
import { Pressable } from 'react-native';
import SelectRoster from '../../Components/Roster/Select';

import styles from '../../Styles';

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

  console.log('user data: ', userData);

  return (
    <View style={styles.container}>
      <View>
        <Text>Welcome,</Text>
        <Text>
          {userData.firstName} {userData.lastName}
        </Text>
      </View>
      <SafeAreaView>
        <SelectRoster />
      </SafeAreaView>
      <Pressable onPress={removeToken}>
        <Text>Log Out</Text>
      </Pressable>
    </View>
  );
};

export default Home;
