import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
// import Hello from './components/Hello';

import Hello from './containers/Hello';
import { Provider } from 'react-redux';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { IStoreState } from './types/index';
import {EnthusiasmAction} from './actions/index';

const store = createStore<IStoreState,EnthusiasmAction,null,null>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});


ReactDOM.render(
  // <App />,
  // <Hello name="TypeScript" enthusiasmLevel={2} />,
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
