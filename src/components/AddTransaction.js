import React, { useContext, useState } from 'react';
import { TransactionContext } from '../context/TransactionContext';

function AddTransaction(props) {
    let { addTransaction } = useContext(TransactionContext)
    let today = Date();
    let [ newName, setName ] = useState('');
    let [ newAmount, setAmount] = useState('');
    const handleTransactionAdd = (event) => {
        event.preventDefault();
        addTransaction({
            name: newName,
            amount: newAmount,
            time: today.slice(16, 24)
        })
        setName('')
        setAmount('')
    }

    return(
        <div>
            <p>ADD TRANSACTION</p>
            <hr />
            <div>
                <form onSubmit={handleTransactionAdd}>
                    <div className={` ${props.mode ? 'Lightaddtransaction' : 'Darkaddtransaction'} `}>
                        <input required type="text" placeholder="Add Name" value={newName} onChange={(event) => setName(event.target.value)}/>
                    </div>
                    <div className={` ${props.mode ? 'Lightaddtransaction' : 'Darkaddtransaction'} `}>
                        <input required type="number" placeholder="Add Cost" value={newAmount} onChange={(event)=> setAmount(event.target.value)}/>
                    </div>
                    <div className={` ${props.mode ? 'Lightaddtransaction' : 'Darkaddtransaction'} `}> 
                    <button>Add Transaction</button>
                    </div>
                </form>
            </div>
        </div>
    )
};


export default AddTransaction;