import {SET_RATING_HISTORY} from "../actionTypes";
import axios from "axios";
import {setStatusError, setStatusLoaded, setStatusLoadingStarted} from "./loadingStatus";


export const loadRatingHistory = (dispatch, steamId) => {
    console.log("getting " + `${BACKEND_URL}/api/players/${steamId}/ratings`);
    dispatch(setStatusLoadingStarted());
    axios
        .get(`${BACKEND_URL}/api/players/${steamId}/ratings`)
        .then((response) => {
            dispatch(setStatusLoaded());
            dispatch(setRatingHistory(response.data));
        })
        .catch((e) => {
            dispatch(setStatusError(e));
            console.log(e);
        });
};


export function setRatingHistory(history) {
    return {
        type: SET_RATING_HISTORY,
        payload: history

    }
}