import {ADD_GAME_INFO} from "../actionTypes";
import _ from 'lodash';


const defaultState = [];


const transformGameInfo = function (gameInfo, steamId) {

        const players = _(gameInfo).pick(["players"]).value();
        const ourPlayer = _(players.players).find(o => (o.account_id.toString() === steamId));

        return {
            gameId: gameInfo.match_id,
            gameInfo: _(ourPlayer).pick(["kda", "benchmarks", "account_id", "last_hits", "hero_id"]).value()
        };
};

export function addGameInfo(state = defaultState, {type, payload}) {
    switch (type) {
        case ADD_GAME_INFO:
            return _(state).concat(transformGameInfo(payload.gameInfo, payload.steamId));
        default:
            return state;

    }
}
