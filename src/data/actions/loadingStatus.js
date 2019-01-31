import {LOADING_STATUSES} from "../actionTypes";

export const setStatusLoadingStarted = () => ({type: LOADING_STATUSES.START_LOADING});
export const setStatusLoaded = () => ({type: LOADING_STATUSES.COMPLETE_LOADING});
export const setStatusError = (message) => ({type: LOADING_STATUSES.ERROR_LOADING, message: message});
export const clear = () => ({type: LOADING_STATUSES.CLEAN});