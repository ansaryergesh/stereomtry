import { createStore, combineReducers, applyMiddleware} from 'redux';
import {Reducer,initialState} from './reducer';
import {Comments} from './Comments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
  const store = createStore(
      combineReducers({
          comments: Comments,
      }),
      applyMiddleware(thunk, logger)
  );

  return store;
};