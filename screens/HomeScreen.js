import React, {useEffect, useState, useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import {Text} from 'react-native-elements';

import { useIsFocused} from '@react-navigation/native';
import {TransactionContext} from '../context/TransactionContext';


const HomeScreen = () => {

  const {getContextTransactions} = useContext(TransactionContext);
  const isFocused = useIsFocused();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getData  = async () => {
      try{
        const getTransactions = await getContextTransactions();
        const sum = getTransactions.reduce((a, b) => a + (+b.amount || 0), 0);
        setTotal(sum)
      }catch(err){
        console.info(err)
      }
    }
    getData()
  },[isFocused])


  return (
    <View style={styles.container}>
      <Text h3 > Current Expense Total </Text>
      <Text h3 style={styles.title}> ${total.toFixed(2)} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "green",
    fontSize: 20,
    fontWeight: 'bold',
  },
 
});

export const screenOptions = navData => {
  return {
      headerTitle: "Anasayfa",
  }
}



export default HomeScreen;