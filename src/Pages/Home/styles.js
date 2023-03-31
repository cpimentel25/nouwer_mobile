import { StyleSheet } from "react-native";
import { Colors } from "../../Styles";

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    paddingTop: 50,
    // justifyContent: 'space-around',
  },
  userInfo: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 20,
    marginBottom: 20,
  },
  userContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: Colors.text,
  },
  user: {
    color: Colors.textUp,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: Colors.button,
    borderWidth: 2,
    marginRight: 10,
  },
  icon: {
    color: Colors.button,
    marginRight: 20,
  }
});

export default styles;
