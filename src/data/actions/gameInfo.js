import {ADD_GAME_INFO} from "../actionTypes";
import axios from "axios";

export const loadGameInfo = (dispatch, gameId, steamId) => {
    const link = `https://api.opendota.com/api/matches/${gameId}/`;
    axios.get(link)
        .then((response) => {
            dispatch(setGameInfo(response.data, steamId));
        })
        .catch((e) => {
            console.log(e + " Error address: "  + link);
        });
};

export const setGameInfo = (gameInfo, steamId) => ({
    type: ADD_GAME_INFO,
    payload: {
        gameInfo: gameInfo,
        steamId: steamId
    }
});

