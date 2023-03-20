import {
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
} from 'react-native';
import { useState } from 'react';

import styles from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.text}>Email</Text>
      <TextInput
        inputMode='email'
        style={styles.inputs}
        placeholder='Email'
        onChangeText={(email) => setEmail(email)}
      />
      <Text style={styles.text}>Password</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.inputs}
        placeholder='Password'
        onChangeText={(password) => setPassword(password)}
      />
      <Pressable
        style={styles.buttonLogin}
        title='Login'
        onPress={() => console.log('email: ', email, 'password:', password)}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Login;
