import { createStore, applyMiddleware } from 'redux';
import rootReducer, { RootState } from './reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const configureStore = (initialState?: RootState) => {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, logger)
    );

    return store;
};

export default configureStore;
