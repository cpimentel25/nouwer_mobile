import { PermissionsAndroid } from 'react-native';

const requestSmsPermission = async () => {
  console.log('clic request persmission');
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Nouwer App SMS Permission',
        message:
          'Nouwer App needs access to your SMS ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Nouwer App can access your sms');
    } else {
      console.log('Permission denied');
    }
  } catch (error) {
    console.warn(err);
  }
};

export default requestSmsPermission;

export const expoPermission = async function requestReadSMSPermission() {
  console.log('clic request sms persmission by Expo');
  const { status } = await Permissions.askAsync(Permissions.READ_SMS);
  if (status === 'granted') {
    console.log('Read SMS permission granted');
  } else {
    console.log('Read SMS permission denied');
  }
};

// export default expoPermission;
