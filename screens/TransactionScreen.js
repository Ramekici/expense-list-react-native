import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { Text, ListItem } from 'react-native-elements';

import { useIsFocused } from '@react-navigation/native';
import { TransactionContext } from '../context/TransactionContext';


const TransactionScreen = ({navigation}) => {

    const { getContextTransactions } = useContext(TransactionContext);
    const [transactions, setTransactions] = useState([]);

    const isFocused = useIsFocused();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const getData = async () => {
            try {
                const getTransactions = await getContextTransactions();
                setTransactions(getTransactions)
            } catch (err) {
                console.info(err)
            }
        }
        getData()
    }, [isFocused])


    const renderItem = ({ item }) => {
        return (
            <ListItem
                title={
                    <View style={styles.transactionsContainer} >
                        <Text>{item.title} </Text>
                        <Text style={styles.transactionsText}> {item.amount} </Text>
                    </View>
                }
                subtitle={<Text> {item.date} </Text>}
                bottomDivider
                chevron
                onPress = {() => navigation.navigate('Transaction Details', {item})}

            />
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={transactions}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    transactionsContainer: {
       flex: 1,
       justifyContent: 'space-between',
       flexDirection:'row'
    },
    transactionsText:{
        color: 'red'
    }

});
export default TransactionScreen;