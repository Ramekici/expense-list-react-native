import React, { createContext, Component } from 'react';
import { Alert, AsyncStorage } from 'react-native'


const today = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "numeric",
    day: "numeric"
})


export const initialExpense = {
    title: "",
    date: today,
    amount: 0,
    notes: "",
    created: today,
    updated: today
}


export const transactionReducer = (state, action) => {
    switch (action.type) {
        case "title":
            return { ...state, title: action.field };
        case "date":
            return { ...state, date: action.field };
        case "amount":
            return { ...state, amount: action.field };
        case "notes":
            return { ...state, notes: action.field };
        case "clear":
            return initialExpense;
        default:
            return state;
    }
}

export const TransactionContext = createContext({});


class TransactionProvider extends Component {

    constructor(props) {

        super(props);

        this.addContextTransaction = (newTransaction) => {
            const { contextTransactions } = this.state;
            newTransaction.id = Math.floor(Math.random() * 1000000 + 1).toString();
            this.setState({ ...contextTransactions, newTransaction })
        }

        this.getContextTransactions = () => this.state.contextTransactions;

        this.updateContextTransactions = (transaction) => {

            const { contextTransactions } = this.state;
            const transactionIndex = this.state.contextTransactions.findIndex(item => item.id === transaction.id)

            contextTransactions[transactionIndex].title = transaction.title;
            contextTransactions[transactionIndex].date = transaction.date;
            contextTransactions[transactionIndex].amount = transaction.amount;
            contextTransactions[transactionIndex].notes = transaction.notes;
            this.setState({ contextTransactions });
        }

        this.deleteContextTransactions = (id) => {

            const { contextTransactions: oldTransactions } = this.state;
            const contextTransactions = oldTransactions.filter(
                transaction => transaction.id !== id
            )
            this.setState({ contextTransactions });
        }

        this.state = {
            contextTransactions: [],
            addContextTransaction: this.addContextTransaction,
            getContextTransactions: this.getContextTransactions,
            updateContextTransactions: this.updateContextTransactions,
            deleteContextTransactions:this.deleteContextTransactions
        }
    }

    render() {
        return (
            <TransactionContext.Provider value={this.state}>
                {this.props.children}
            </TransactionContext.Provider>
        )
    }
}

export default TransactionProvider;