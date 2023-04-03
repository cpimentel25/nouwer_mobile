import { Pressable, SafeAreaView, Text, TextInput, View } from 'react-native';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

import styles from './style';

const EnterValue = ({viewNewValue}) => {
  const [selectCategorie, setSelectCategorie] = useState([]);
  const [list, setList] = useState([]);

  const rosterId = useSelector(
    (state) => state?.counter?.currentRoster?.roster
  );

  const listCategories = useSelector(
    (state) => state?.counter?.currentRoster?.categories
  );

  useEffect(() => {
    if (rosterId) {
      console.log('set list categories by current roster');
      return setList(listCategories);
    }
    return setList([]);
  }, [rosterId]);

  // console.log('list categories: ', listCategories);
  // console.log('list: ', list);
  // console.log('select Categorie: ', selectCategorie);
  // console.log('rosterId: ', rosterId);

  return (
    <View>
      <View style={styles.body}>
        <View style={styles.section}>
          <Text style={styles.textSection}>Value:</Text>
          <TextInput style={styles.input} inputMode='numeric' />
        </View>
        <View style={styles.section}>
          <Text style={styles.textSection}>Category:</Text>
          <View style={styles.select}>
            <Picker
              selectedValue={selectCategorie}
              onValueChange={(value, index) => setSelectCategorie(value)}
              style={styles.categorie}
            >
              {list?.map((data, index) => (
                <Picker.Item label={data} key={data} value={data} />
              ))}
            </Picker>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.textSection}>Subcategory:</Text>
          <View style={styles.select}>
            <Picker
              selectedValue={[]}
              onValueChange={(value, index) =>
                console.log('select value: ', value)
              }
              style={styles.categorie}
            >
              {[].map((data, index) => (
                <Picker.Item label={data} key={data} value={data} />
              ))}
            </Picker>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.textSection}>Description:</Text>
          <TextInput style={styles.input} inputMode='text' />
        </View>
      </View>
      <View style={styles.sectionButton}>
        <Pressable style={styles.discard} onPress={viewNewValue}>
          <Text style={styles.textButton}>Discard</Text>
        </Pressable>
        <Pressable style={styles.submit}>
          <Text style={styles.textButton}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default EnterValue;
