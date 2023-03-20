import { Pressable, SafeAreaView, Text, TextInput } from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../../features/counter/counterSlice';

import styles from './styles';

const Login = () => {
  const [form, setFrom] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('handleSubmit: ', form);
      dispatch(userLogin(form));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.text}>Email</Text>
      <TextInput
        inputMode='email'
        style={styles.inputs}
        placeholder='Email'
        onChangeText={(email) => setFrom({ ...form, email: email })}
      />
      <Text style={styles.text}>Password</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.inputs}
        placeholder='Password'
        onChangeText={(password) => setFrom({ ...form, password: password })}
      />
      <Pressable
        style={styles.buttonLogin}
        title='Login'
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Login;
