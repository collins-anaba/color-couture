import { createStore } from 'redux';
import reducer from './reducer';
import reducer from './userReducer';

createStore(reducer)
export default createStore(reducer);