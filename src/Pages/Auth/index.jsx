import { View } from 'react-native';
import Login from '../../Components/Auth/Login';

import styles from '../../Styles';

const Auth = () => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
};

export default Auth;
