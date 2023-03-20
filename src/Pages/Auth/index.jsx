import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "../../Styles";
import Login from "../../Components/Auth/Login";

const Auth = () => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  )
}

export default Auth;
