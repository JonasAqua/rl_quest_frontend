import {UPDATE_MY_LOCATION} from './actionTypes'

export const updateMyLocation = location => {
    return {
        type: UPDATE_MY_LOCATION,
        payload: {location}
    }
}