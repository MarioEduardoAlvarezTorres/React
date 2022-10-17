import React from 'react';
//import { FirstApp } from './FirstApp';
//import { App } from './HelloWorldApp';
import ReactDOM from 'react-dom/client'
import{FirstApp} from './FirstApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title='Hola soy vegeta' subTitle='hola'/>
    </React.StrictMode>
);