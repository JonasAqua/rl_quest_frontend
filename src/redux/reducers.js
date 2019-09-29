import {UPDATE_MY_LOCATION, UPDATE_ALL_LOCATIONS} from './actionTypes'
import io from 'socket.io-client'
import { statement } from '@babel/template';

const initialState = {
    location: [0, 0],
    socket: io.connect('165.227.184.33')
}

export default function(state = initialState, action) {
    switch (action.type) {
        case UPDATE_MY_LOCATION:
            const location = action.payload.location
            return {
                ...state,
                location
            }
        case UPDATE_ALL_LOCATIONS:
            const users = action.payload.users
            return {
                ...state,
                users
            }
        default:
            return state
    }
}
