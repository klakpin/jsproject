import * as actionsTypes from '../actionTypes'
import {combineReducers} from 'redux';
import _ from 'lodash';
import {setLoadingStatus} from "./loadingStatus";

const defaultState = [];

function formatDate(date) {
    const hours = date.getHours();
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? '0'+minutes : minutes;
    const strTime = hours + ':' + minutes;
    return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + " " + strTime;
}

function transformRating(rating) {
    return _(rating).takeRight(20).map(e => {
        return {rank: e.competitive_rank, time: formatDate(new Date(e.time))}
    });

}



const reducer = function reducer(state = defaultState, {type, payload}) {
    switch (type) {
        case actionsTypes.SET_RATING_HISTORY:
            return transformRating(payload);
        default:
            return state;
    }
};


export const ratingReducer = combineReducers({
    history: reducer,
    loadingStatus: setLoadingStatus
});
