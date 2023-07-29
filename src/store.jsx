import React from "react";
import {createStore} from 'redux';
import CounterReducer from './reducer/counterReducer';

const store= createStore(CounterReducer);

export default store;