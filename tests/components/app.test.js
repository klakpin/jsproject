import TestRenderer from 'react-test-renderer';
import React from "react";
import {App} from "../../src/pages/app";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store'

const middlewares = []
const mockStore = configureStore(middlewares)
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

describe('App component testing', () => {

    it('test that component renders', () => {
        const component = TestRenderer.create(
            <Provider store={store}>
                <App/>
            </Provider>
        );

        expect(component.toJSON()).toMatchSnapshot();
    });
});