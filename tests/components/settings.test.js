import TestRenderer from 'react-test-renderer';
import React from "react";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store'
import {Settings} from "../../src/pages/settings";
import {SET_STEAM32_ID} from "../../src/data/actionTypes";
const middlewares = [];
const mockStore = configureStore(middlewares);
const initialState = {
    ratingHistory: {
        history: [],
        loadingStatus: {
            status: ""
        }
    },
    steamId: {
        value: ""
    }
};
const store = mockStore(initialState);

describe('Settings component testing', () => {

    it('component renders form', () => {
        const component = TestRenderer.create(
            <Provider store={store}>
                <Settings/>
            </Provider>
        );

        const testInstance = component.root;
        expect(testInstance.findAllByType('form').length).toBe(1);
    });

    it('form should dispatch action on submit', () => {
        const component = TestRenderer.create(
            <Provider store={store}>
                <Settings/>
            </Provider>
        );

        const testInstance = component.root;
        testInstance.findByType('form').props.onSubmit();
        const action = store.getActions().find(e => (e.type === SET_STEAM32_ID));
        expect(action.type).toBe(SET_STEAM32_ID);
    });
});

