import {LOADING_STATUSES} from "../actionTypes";

export const STATUSES = {
    ready: "ready",
    loading: "loading",
    completed: "completed",
    error: "error"
};

const defaultState = {
    status: STATUSES.ready
};

export const setLoadingStatus = (state = defaultState, payload) => {
    switch (payload.type) {
        case LOADING_STATUSES.START_LOADING:
            return {status: STATUSES.loading};
        case LOADING_STATUSES.COMPLETE_LOADING:
            return {status: STATUSES.completed};
        case LOADING_STATUSES.ERROR_LOADING:
            return {status: STATUSES.error, message: payload.message};
        case LOADING_STATUSES.CLEAN:
            return defaultState;
        default:
            return state;
    }
};