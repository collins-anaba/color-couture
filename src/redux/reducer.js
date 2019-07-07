const initialState = {
    user: {},
    admin: []
}

//constants
const UPDATE_USER = 'UPDATE_USER'
const ADMIN_USER = 'ADMIN_USER'


//action creators
export function updateUser(user) {
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export const adminUser = (admin) => {
    return {
        type: ADMIN_USER,
        payload: admin
    }
}
export default function reducer(state = initialState, action) {
    const {type, payload} = action 
    switch (type) {
        case UPDATE_USER:
            return {
                ...state,
                user: action.payload
            }
        case ADMIN_USER:
            return {
                ...state,
                user: payload
            }
        default: return state
    }
}