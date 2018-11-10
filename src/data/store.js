import {applyMiddleware, combineReducers, createStore} from "redux";
import ReduxThunk from 'redux-thunk'
import {ratingReducer} from "./reducers/rating";
import {composeWithDevTools} from 'redux-devtools-extension';
import {matchesListReducer} from "./reducers/matchesList";
import {setSteamId} from "./reducers/steamId";
import {addGameInfo} from "./reducers/gameInfoReducer";
import { reducer as formReducer } from 'redux-form';
import {addHeroInfoReducer} from "./reducers/heroInfo";

const reducer = combineReducers({
    ratingHistory: ratingReducer,
    recentMatches: matchesListReducer,
    steamId: setSteamId,
    savedGames: addGameInfo,
    heroBenchmarks: addHeroInfoReducer,
    form: formReducer
});

export const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(ReduxThunk)));
