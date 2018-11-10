import MockAdapter from 'axios-mock-adapter'

import {ratingResponse} from './responces/ratingResponse';
import {recentMatchesResponse} from "./responces/recentMatcherResponse";
import {matchResponse} from "./responces/matchResponse";

export function connectAxiosWithMockAdapter(axios) {
    const mock = new MockAdapter(axios);


    mock
        .onGet('https://api.opendota.com/api/players/107519813/ratings')
        .reply(200, ratingResponse);
    mock
        .onGet('https://api.opendota.com/api/players/107519813/recentMatches')
        .reply(200, recentMatchesResponse);
    mock
        .onGet('https://api.opendota.com/api/matches/4211302152/')
        .reply(200, matchResponse);
}