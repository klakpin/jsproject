import {SET_RATING_HISTORY} from "../actionTypes";
import axios from "axios";
import {setStatusError, setStatusLoaded, setStatusLoadingStarted} from "./loadingStatus";


export const loadRatingHistory = (dispatch, steamId) => {

    dispatch(setStatusLoadingStarted());
    axios
        .get(`${BACKEND_URL}/api/players/${steamId}/ratings`)
        .then((response) => {
            dispatch(setStatusLoaded());
            dispatch(setRatingHistory(response.data));
        })
        .catch((e) => {
            dispatch(setStatusError(e));
            console.log("Error while loading rating" + e + ", trying to get " + `${BACKEND_URL}/api/players/${steamId}/ratings`);
        });
};


export function setRatingHistory(history) {
    return {
        type: SET_RATING_HISTORY,
        payload: history

    }
}