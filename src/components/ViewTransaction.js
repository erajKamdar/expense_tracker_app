import React from 'react';
import ViewTransactionList from './ViewTransactionList';

function ViewTransaction(props) {
    return(
        <div>
            <p>HISTORY</p>
            <hr />
            <ViewTransactionList mode={props.mode}/>
        </div>
    )
};

export default ViewTransaction;