import { Pressable, Text, TextInput, View } from 'react-native';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

import styles from './style';

const EnterValue = () => {
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
      setList(listCategories[0]);
    }
  }, [rosterId])

  // console.log('list categories: ', listCategories);
  console.log('list: ', list);
  console.log('rosterId: ', rosterId);

  return (
    <View>
      <TextInput style={styles.input} inputMode='numeric' />
      <View>
        <Picker
          selectedValue={selectCategorie}
          onValueChange={(value, index) => setSelectCategorie(value)}
          style={styles.categorie}
        >
          {list.map((data, index) => (
            <Picker.Item label={data} key={data}/>
          ))}
        </Picker>
      </View>
      <View>
        <Pressable style={styles.submit}>
          <Text style={styles.textButton}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default EnterValue;
