import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

function MainTransaction (props) {
    let transactions = useContext(TransactionContext)

    function getIncome() {
        let income = 0
        transactions.transactions.forEach(transaction => {
            if (transaction.amount > 0) {
                income += Number(transaction.amount)
            }
        });
        return income;
    };

    function getExpense() {
        let expense = 0
        transactions.transactions.forEach(transaction => {
            if (transaction.amount < 0){
                expense += Number(transaction.amount)
            }
        });
        return expense
    };

    return (
        <div>
            <div className={` ${props.mode ? 'LightMainTotal' : 'DarkMainTotal'} `}>    
            <h3 className={` ${(getIncome() + getExpense()) < 0 ? 'Danger' : 'Normal'} `}>Total Balance {getIncome() + getExpense()}$</h3>
            </div>
            <div className={` ${props.mode ? 'LightMainDisplay' : 'DarkMainDisplay'} `}>
                <div className={` ${props.mode ? 'LightMainDisplayBox' : 'DarkMainDisplayBox'} `}>
                    <div>Income</div>
                    <div>${getIncome()}</div>
                </div>
                <div className={` ${props.mode ? 'LightMainDisplayBox' : 'DarkMainDisplayBox'} `}>
                    <div>Expense</div>
                    <div>${getExpense()}</div>
                </div>
            </div>
        </div>
    )
}

export default MainTransaction;