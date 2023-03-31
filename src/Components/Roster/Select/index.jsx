import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from 'react';
import { setCurrentRoster } from '../../../features/counter/counterSlice';

import styles from './style';

const SelectRoster = () => {
  const [selectRoster, setSelectRoster] = useState();

  const dispatch = useDispatch();

  const rosterData = useSelector((state) => state.counter?.roster);
  const newRoster = rosterData?.filter((data) => data._id === selectRoster);

  const titleRoster = newRoster[0]?.title;
  const idRoster = newRoster[0]?._id;
  const createByRoster = newRoster[0]?.createdBy?._id;
  const createdAtRoster = newRoster[0]?.createdAt;
  const rosterGuets = newRoster[0]?.guests;
  const rosterCategorie = newRoster[0]?.categories;

  useEffect(() => {
    if (selectRoster?.length) {
      dispatch(
        setCurrentRoster({
          title: titleRoster,
          roster: idRoster,
          createdBy: createByRoster,
          createdAt: createdAtRoster,
          guests: rosterGuets,
          categories: [rosterCategorie],
        })
      );
    }
  }, [selectRoster]);

  // const currentRoster = useSelector((state) => state.counter?.currentRoster);
  // console.log('Select roster: ', selectRoster);
  // console.log('Current roster: ', currentRoster);
  console.log('roster Data: ', rosterData.length);

  return (
    <SafeAreaView>
      <View style={styles.selectRoster}>
        <Text>Select Roster:</Text>
        <Picker
          selectedValue={selectRoster}
          onValueChange={(value, index) => setSelectRoster(value)}
          style={styles.option}
        >
          {rosterData?.map((data, index) => (
            <Picker.Item label={data?.title} value={data?._id} key={data._id} />
          ))}
        </Picker>
      </View>
    </SafeAreaView>
  );
};

export default SelectRoster;
