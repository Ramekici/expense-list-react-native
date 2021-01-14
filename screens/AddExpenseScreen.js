import React, { useReducer, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import ExpenseInputs from '../components/ExpenseInputs';

import {
    TransactionContext, 
    initialExpense, 
    transactionReducer
} from '../context/TransactionContext';

const AddExpenseScreen = (props) => {
    
    const { addContextTransaction } = useContext(TransactionContext);
    const [state, dispatch] = useReducer(transactionReducer, initialExpense);

    const addExpense = async () => {
        try{
            addContextTransaction(state);
            dispatch({type: "clear", })
        } catch(error) {
            console.info(err)
        }
    }


    return (
        <View style={styles.container}>
            <ExpenseInputs dispatch={dispatch} expense= {state}>
                <Button raised title="Submit Expense" onPress={addExpense} />
            </ExpenseInputs>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: 'white'
    }
})


export const screenOptions = navData => {
    return {
        headerTitle: "Ekleme",
    }
  }
export default AddExpenseScreen;