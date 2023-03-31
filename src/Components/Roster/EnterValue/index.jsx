import { Pressable, Text, TextInput, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

import styles from './style';

const EnterValue = () => {
  const [selectCategorie, setSelectCategorie] = useState();

  const listCategories = useSelector(
    (state) => state?.counter?.currentRoster?.categories
  );

  return (
    <View>
      <TextInput style={styles.input} inputMode='numeric' />
      <View>
        <Picker
          selectedValue={selectCategorie}
          onValueChange={(value, index) => setSelectCategorie(value)}
          style={styles.categorie}
        >
          {/* {listCategories[0]?.map((data, index) => (
            <Picker.Item label={data} key={data}/>
          ))} */}
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
