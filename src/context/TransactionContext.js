import React, { createContext, useReducer } from 'react';
import TransactionReducer from './TransactionReducer';

const initialTransactions = [
    {
        name : 'Cash',
        amount : '3000',
        time : '01:51:58'
    },
];

export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({children}) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions)

    function addTransaction(transactionObj) {
        dispatch({
            type : 'ADD_TRANSACTION',
            payload: {
                name: transactionObj.name,
                amount: transactionObj.amount,
                time: transactionObj.time
            }
        })
    }

    function deleteTransaction(name) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            transactionName : name
        })
    }

    function updateTransaction(index, transactionObj) {
        dispatch({
            type: 'UPDATE_TRANSACTION',
            index: index,
            payload : {
                name: transactionObj.name,
                amount: transactionObj.amount,
                time: transactionObj.time
            }
        })
    }

    return (
        <TransactionContext.Provider value = {{
            transactions: state,
            addTransaction,
            deleteTransaction,
            updateTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}