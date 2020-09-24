import React, { useState } from 'react';
import MainTransaction from './components/MainTransaction';
import ViewTransaction from './components/ViewTransaction';
import AddTransaction from './components/AddTransaction';
import { TransactionProvider } from './context/TransactionContext';
import './App.css';

function App() {

    let[mode, setMode] = useState(true);

    return (
        <TransactionProvider>
            <div className={` ${mode ? 'LightApp' : 'DarkApp'}`}>
                <div className={` ${mode ? 'LightAppToggle' : 'DarkAppToggle'}`}>
                    <button onClick={() => setMode(!mode)}> {` ${mode ? 'Light Mode' : 'Dark Mode'} `}</button>
                </div>

                <div className={`${mode ? 'LightAppMain' : 'DarkAppMain'}`}>
                    <MainTransaction mode={mode}/>
                </div>

                <div className={`${mode ? 'LightAppMain' : 'DarkAppMain'}`}>
                    <ViewTransaction mode={mode}/>
                </div>

                <div className={`${mode ? 'LightAppMain' : 'DarkAppMain'}`}>
                    <AddTransaction mode={mode}/>
                </div>
            </div>
        </TransactionProvider>
    );
};

export default App;