import {SET_STEAM32_ID} from "../actionTypes";
import _ from 'lodash';

const defaultState = {
    value: "107519813"
};

export function setSteamId(state = defaultState, {type, steamId}) {
    switch (type) {
        case SET_STEAM32_ID:
            return _({}).assign(state, {value: steamId}).value();
        default:
            return state;
    }
}