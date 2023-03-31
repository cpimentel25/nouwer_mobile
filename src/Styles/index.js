import { StyleSheet } from 'react-native';

export const Colors = {
  primary: '#222831',
  secundary: '#393E46',
  text: '#FFF1DC',
  textUp: '#E5BA73',
  button: '#E5BA73',
  input: 'white',
  option: 'white',
  alert: '#F90716',
  accept: '#9CFF2E',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 10,
  },
  inputs: {
    backgroundColor: '#E4DCCF',
    color: '#fff',
    fontSize: 17,
    height: 70,
    width: 300,
    margin: 12,
    padding: 10,
    borderRadius: 3,
    marginTop: 5,
  },
});

export default styles;
