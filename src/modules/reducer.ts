import { combineReducers } from 'redux';
import exchange, { State as ExchangeState } from '../modules/exchange/reducer';

export type RootState = {
    exchange: ExchangeState;
};

export default combineReducers<RootState>({
    exchange
});
