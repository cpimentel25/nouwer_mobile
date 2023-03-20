import AsyncStorage from '@react-native-async-storage/async-storage';

// const API = 'http://localhost:8080';
const API = 'https://dbnouw3r.nouwer.com';
// const API = process.env.REACT_APP_BACKEND;

export async function loginUser(user) {
  const payload = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  };

  try {
    const response = await fetch(`${API}/auth/local/login`, payload);
    const user = await response.json();
    const id = user?.profile?.id;

    // console.log('workin login system');
    // console.log('token: ', user.token);
    // console.log('id: ', id);

    await AsyncStorage.setItem('@storage_token', user.token);
    await AsyncStorage.setItem('@storage_id', id);

    return user;
  } catch (error) {
    await AsyncStorage.removeItem('@storage_token');
    await AsyncStorage.removeItem('@storage_id');
    console.error(error);
  }
}

export async function FetchRoster() {
  const token = await AsyncStorage.getItem('@storage_token');

  const payload = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  };

  try {
    const response = await fetch(`${API}/api/roster`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
