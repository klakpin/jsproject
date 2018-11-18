import TestRenderer from 'react-test-renderer';
import React from "react";
import {App} from "../../src/pages/app";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store'

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

describe('App component testing', () => {

    it('component renders header, footer and content', () => {
        const component = TestRenderer.create(
            <Provider store={store}>
                <App/>
            </Provider>
        );

        const testInstance = component.root;

        expect(testInstance.findAllByType('header').length).toBe(1);
        expect(testInstance.findAllByType('footer').length).toBe(1);
        expect(testInstance.findAllByProps({"className": "content"}).length).toBe(1);

    });
});