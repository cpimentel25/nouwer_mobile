import { StyleSheet } from "react-native";
import { Colors } from "../../../Styles";

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    marginBottom: 35,
    // borderWidth: 2,
    // borderRadius: 10,
    // borderColor: Colors.textUp,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  select: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.textUp,
    marginBottom: 5,
  },
  textSection: {
    width: 90,
    color: Colors.text,
    fontSize: 14,
  },
  input: {
    width: 280,
    height: 50,
    padding: 10,
    color: Colors.text,
    fontSize: 20,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: Colors.textUp,
  },
  categorie: {
    width: 280,
    height: 50,
    padding: 10,
    color: Colors.text,
  },
  sectionButton: {
    width: 400,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  submit: {
    width: 150,
    height: 60,
    backgroundColor: Colors.button,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  discard: {
    width: 150,
    height: 60,
    backgroundColor: Colors.discard,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  textButton: {
    color: 'black',
    fontSize: 17,
  }
});

export default styles;
