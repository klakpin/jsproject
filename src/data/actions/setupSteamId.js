import {SET_STEAM32_ID} from "../actionTypes";


export const setUpSteamId = (steamId) => (
    {
        type: SET_STEAM32_ID,
        steamId:steamId
    }
);