import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  display: {
    height: 100,
    width: 400,
    padding: 10,
    borderRadius: 3,
    backgroundColor: '#1E212D',
    alignContent: 'flex-end',
    justifyContent: 'center',
    marginBottom: 30,
  },
  totalValue: {
    fontSize: 30,
    color: '#FAF3E0',
  },
  lastValuePositive: {
    color: '#16FF00',
  },
  lastValueNegative: {
    color: '#FF1700',
  }
});

export default styles;
