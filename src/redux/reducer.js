import axios from 'axios';

const initialState = {
    productDescription: '',
    girlsShirt: [],
    boysShirt: [],
    user: [],
}

const GET_BOYSSHIRT = 'GET_BOYSSHIRT';
const GET_GIRLSSHIRT = 'GET_GIRLSSHIRT';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const GET_USER = 'GET_USER';

export default function reducer (state = initialState, action){
    console.log(action);
    switch(action.type){
        case `{GET_BOYSSHIRT}_FULFILLED`:
            return {...state, boysShirt: action.payload.data};
        
        case `{GET_GIRLSSHIRT}_FULFILLED`:
            return {...state, girlsShirt: action.payload.data};
       
        case `{LOGIN}_FULFILLED`:
            return {...state, user: action.payload.data};

        case `{LOGOUT}`:
            return {...state, user: action.payload.data};
        
        case `{GET_USER}`:
            return {...state,user: action.payload.data};
        
        default:
            return state;
    }
}

export function getBoysShirt () {
    return {
        type: GET_BOYSSHIRT,
        payload: axios.get('/api/admin/getBoysShirt')
    };
}
export function getGirlsShirt (){
    return {
        type: GET_GIRLSSHIRT,
        payload: axios.get('/api/admin/getGirlShirt')
    };
}
export function logIn (){
    return {
        type: LOGIN,
        payload: axios.post('/api/auth/login', {
            username: username,
            email: email,  
        })
    }
}
export function logOut (){
    return {
        type: LOGOUT,
        payload: axios.get('/api/auth/logout')
    }
}
export function getUser (){
    return {
        type: GET_USER,
        payload: axios.get('/api/auth/user')
    };
}
