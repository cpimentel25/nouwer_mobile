import { StyleSheet } from "react-native";
import { Colors } from "../../../Styles";

const styles = StyleSheet.create({
  selectRoster: {
    width: 400,
    height: 40,
    marginTop: 30,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    // width: '15%',
    color: Colors.text,
    fontSize: 15,
  },
  selectOption: {
    width: '85%',
    flexDirection: 'row',
    // borderBottomColor: Colors.textUp,
    // borderBottomWidth: 1,
  },
  option: {
    width: '100%',
    color: Colors.textUp,
  }
});

export default styles;
