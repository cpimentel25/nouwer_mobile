import { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLastValue, fetchTotal } from '../../../features/counter/counterSlice';

import styles from './style';

const DisplayTotal = () => {
  const rosterId = useSelector(
    (state) => state?.counter?.currentRoster?.roster
  );
  const values = useSelector((state) => state?.counter?.totalValues?.total);
  const lastValue = useSelector((state) => state?.counter?.lastValue?.value);

  const totalValues = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(values);

  const value = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(lastValue);

  const dispatch = useDispatch();

  useEffect(() => {
    if (rosterId?.length) {
      dispatch(fetchTotal(rosterId));
      dispatch(fetchLastValue(rosterId));
    }
  }, [rosterId]);

  // console.log('rosterId (display total): ', rosterId);

  return (
    <SafeAreaView>
      <View key={rosterId} style={styles.display}>
        <Text style={styles.infoText}>TOTAL BALANCE</Text>
        <Text style={styles.totalValue}>{totalValues}</Text>
        <Text style={lastValue > 0 ? styles.lastValuePositive : styles.lastValueNegative}>{value}</Text>
      </View>
    </SafeAreaView>
  );
};

export default DisplayTotal;
