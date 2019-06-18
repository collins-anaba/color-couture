import { createStore } from 'redux';
import reducer from './productReducer';
import reducer from './userReducer';

createStore(reducer)
export default createStore(reducer);