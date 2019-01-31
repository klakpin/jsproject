import {SET_MATCHES_HISTORY} from "../actionTypes";
import {combineReducers} from "redux";

import {getHeroNamesById} from '../common/heroes';

import _ from 'lodash';
import {getGameModeNameById} from "../common/gameModes";
import moment from "moment";

import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);
const defaultState = [];


const isWinner = function (player_slot, radiant_win) {
    return radiant_win && player_slot >= 127;
};

const transformMatches = function (payload) {
    return _(payload).map(e => {
        return {
            isWinner: isWinner(e.player_slot, e.radiant_win),
            date: moment.unix(e.start_time).format("D/M/Y H:mm"),
            heroName: getHeroNamesById(e.hero_id),
            length: moment.duration(e.duration, "seconds").format("mm:ss"),
            kda: e.kills + " " + e.deaths + " " + e.assists,
            id: e.match_id,
            type: getGameModeNameById(e.game_mode)
        }
    }).value()

};

const reducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case SET_MATCHES_HISTORY:
            return transformMatches(payload);
        default:
            return state;
    }
};

export const matchesListReducer = combineReducers({
    history: reducer,
    // loadingStatus: loadingStateReducer
});