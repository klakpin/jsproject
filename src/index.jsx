import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {App} from './pages/App'
import {store} from "./data/store";

import axios from 'axios';
import {connectAxiosWithMockAdapter} from './tests/axiosMocking';

// connectAxiosWithMockAdapter(axios);


render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('application')
);

