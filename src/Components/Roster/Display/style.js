import { StyleSheet } from "react-native";
import { Colors } from "../../../Styles";

const styles = StyleSheet.create({
  display: {
    height: 130,
    width: 400,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  infoText: {
    color: '#FAF3E0',
  },
  totalValue: {
    fontSize: 45,
    color: Colors.textUp,
  },
  lastValuePositive: {
    color: Colors.accept,
  },
  lastValueNegative: {
    color: Colors.alert,
  }
});

export default styles;
