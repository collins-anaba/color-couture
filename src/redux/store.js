import { createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware'; //async
import reducer from './reducer';

export default createStore(reducer, applyMiddleware(promiseMiddleware));