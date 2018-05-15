import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/style.scss';

ReactDOM.render(<IndecisionApp /*options={['Opt 1', 'Opt 2']}*//>, document.getElementById('app'));