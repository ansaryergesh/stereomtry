import { createStore, combineReducers, applyMiddleware} from 'redux';
import {Reducer,initialState} from './reducer';
import { createForms } from 'react-redux-form';
import {Comments} from './Comments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';


export const ConfigureStore = () => {
  const store = createStore(
      combineReducers({
          comments: Comments,
          ...createForms({feedback: InitialFeedback})
      }),
      applyMiddleware(thunk, logger)
  );

  return store;
};