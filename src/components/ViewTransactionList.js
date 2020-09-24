import React, { useContext, useState } from 'react';
import { TransactionContext } from '../context/TransactionContext';

function ViewTransactionList(props) {

    let {transactions, deleteTransaction, updateTransaction} = useContext(TransactionContext)
    let [newName, setName] = useState('');
    let today = Date();
    let [newAmount, setAmount] = useState('');
    let [edit, setEdit] = useState(true)
    let [newIndex, setIndex] = useState(0);

    function handleTransactionDelete(transactionName) {
        deleteTransaction(transactionName)
    }

    function handleTransactionEdit(name, amount, index) {
        setName(name)
        setAmount(amount)
        setIndex(index)
        setEdit(false)
    }

    function handleTransactionUpdate(){
        setEdit(true)
        updateTransaction(newIndex, {
            name: newName,
            amount: newAmount,
            time: today.slice(16,24)
        })
    };

    return(
        <div>
            <ul className={`${props.mode ? 'LighttransactionList' : 'DarktransactionList'} `}>
                {
                    transactions.map((transactionObj, index) => {
                        return(
                            <li key={index} className={` ${Number(transactionObj.amount) > 0 ? 'incomeBorder' : 'expenseBorder'}`}>
                                <span className="transactionListName">{transactionObj.name}</span>
                                <small>{transactionObj.time}</small>
                                <span className="transactionListAmount">${transactionObj.amount}</span>
                                <span>
                                    <button onClick={(event) => {
                                        event.preventDefault();
                                        handleTransactionEdit(transactionObj.name, transactionObj.amount, index)
                                    }}>
                                        EDIT
                                    </button>
                                    <button onClick={(event) => {
                                        event.preventDefault();
                                        handleTransactionDelete(transactionObj.name)
                                    }}>
                                        DELETE
                                    </button>
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
            <div className={`${edit ? 'hidden' : ''}`}>
                <div className={`${props.mode ? 'LighttransactionListEdit' : 'DarktransactionListEdit'}`}>
                    <form>
                        <h4>EDIT TRANSACTION</h4>
                        <div className={`${props.mode ? 'Lightaddtransaction' : 'Darkaddtransaction'}`}>
                            <input required type="text" placeholder="Update Name" value={newName} onChange={(event) => setName(event.target.value)}/>
                        </div>

                        <div className={`${props.mode ? 'Lightaddtransaction' : 'Darkaddtransaction'}`}>
                            <input required type="number" placeholder="Update Cost" value={newAmount} onChange={(event) => setAmount(event.target.value)}/>
                        </div>

                        <div className={`${props.mode ? 'Lightaddtransaction' : 'Darkaddtransaction'}`}>
                            <button onClick={(event) => {
                                event.preventDefault();
                                handleTransactionUpdate()
                            }}> Update Transaction </button>
                        </div>
                    </form>
            
                </div>
            </div>
        </div>
    )
};


export default ViewTransactionList;