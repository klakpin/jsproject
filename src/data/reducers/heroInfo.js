import {ADD_HERO_BENCHMARK} from "../actionTypes";

const defaultState = [];

export function addHeroInfoReducer(state = [], {type, payload}) {
    switch (type) {
        case ADD_HERO_BENCHMARK:
            return Object.assign({}, state, payload);
        default:
            return state;
    }
}