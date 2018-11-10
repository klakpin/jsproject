import {SET_RATING_HISTORY} from "../actionTypes";
import axios from "axios";

export const loadRatingHistory = (dispatch, steamId) => {
    axios.get(`https://api.opendota.com/api/players/${steamId}/ratings`)
        .then((response) => {
            dispatch(setRatingHistory(response.data));
        })
        .catch((e) => {
            console.log(e);
        });
};


export function setRatingHistory(history) {
    return {
        type: SET_RATING_HISTORY,
        payload: history

    }
}