import {ADD_HERO_BENCHMARK} from "../actionTypes";
import axios from "axios";
import _ from "lodash";


const extractUserIdFromRankings = (query) => {
    return query.rankings[0].account_id;
};

const extractMatchIdFromMatches = (query) => {
        return query[0].match_id;
    }
;

const extractHeroInformation = (query, heroId) => {
    const players = _(query).pick(["players"]).value();

    const ourPlayer = _(players.players).find(o => (o.hero_id.toString() === heroId.toString()));

    return {
        heroId: heroId,
        gameInfo: _(ourPlayer).pick(["kda", "benchmarks", "account_id", "last_hits", "hero_id"]).value()
    };
};


export const parseHeroBenchmarks = (dispatch, heroId) => {
    axios.get(`https://cors-anywhere.herokuapp.com/api.opendota.com/api/rankings?hero_id=${heroId}`)
        .then((response) =>
            axios.get(`https://cors-anywhere.herokuapp.com/api.opendota.com/api/players/${extractUserIdFromRankings(response.data)}/matches?limit=1&hero_id=${heroId}`)
        )
        .then((response) =>
            axios.get(`https://cors-anywhere.herokuapp.com/api.opendota.com/api/matches/${extractMatchIdFromMatches(response.data)}`))
        .then((response) => {
            dispatch(setHeroBenchmarks(extractHeroInformation(response.data, heroId)));
        })
        .catch((e) => {
            console.log("Error while fetching hero benchmarks: " + e);
        });
};

export const setHeroBenchmarks = (benchmarks) => (
    {
        type: ADD_HERO_BENCHMARK,
        payload: benchmarks
    }
);
