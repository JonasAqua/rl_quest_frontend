import {UPDATE_MY_LOCATION} from './actionTypes'

const initialState = {
    location: [0, 0]
}

export default function(state = initialState, action) {
    switch (action.type) {
        case UPDATE_MY_LOCATION:
            const location = action.payload.location
            return {
                ...state,
                location
            }
        default:
            return state
    }
}
