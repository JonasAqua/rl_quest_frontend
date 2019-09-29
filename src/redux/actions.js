import {UPDATE_MY_LOCATION, STORE_NEW_TOKEN, UPDATE_ALL_LOCATIONS} from './actionTypes'

export const updateMyLocation = location => {
    return {
        type: UPDATE_MY_LOCATION,
        payload: {location}
    }
}

export const storeNewToken = token => {
    return {
        type: STORE_NEW_TOKEN,
        payload: {token}
    }
}

export const updateAllLocations = users => {
    return {
        type: UPDATE_ALL_LOCATIONS,
        payload: {users}
    }
}
