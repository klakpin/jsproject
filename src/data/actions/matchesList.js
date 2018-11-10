import {SET_MATCHES_HISTORY} from "../actionTypes";
import axios from "axios";
import {setRatingHistory} from "./rating";


export const setMatchesHistory = (history) => {
    return ({
        type: SET_MATCHES_HISTORY,
        payload: history
    });
};

export const loadMatches = (dispatch, steamId) => {
    const link = `https://api.opendota.com/api/players/${steamId}/recentMatches`;
    axios.get(link)
        .then((response) => {
            dispatch(setMatchesHistory(response.data));
        })
        .catch((e) => {
            console.log(e + " Error address: "  + link);
        });
};
