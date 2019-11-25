import { AnyAction } from 'redux';
import {
    LOADING,
    SUCCESS,
    ERROR,
    SELECTED_CURRENCY
} from '../../modules/actionTypes';

export type State = {
    items: any;
    isLoading: boolean;
    isError: boolean;
    currency: string;
};

export const initialState: State = {
    items: [],
    isLoading: false,
    isError: false,
    currency: 'USD'
};

const exchange = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case ERROR:
            return {
                ...state,
                isError: action.payload
            };

        case LOADING:
            return {
                ...state,
                isLoading: action.payload
            };

        case SUCCESS:
            return {
                ...state,
                items: action.payload
            };

        case SELECTED_CURRENCY:
            return {
                ...state,
                currency: action.payload
            };

        default:
            return state;
    }
};

export default exchange;
