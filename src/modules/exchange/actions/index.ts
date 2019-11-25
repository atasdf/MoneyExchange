import { LOADING, SUCCESS, ERROR, SELECTED_CURRENCY } from '../../actionTypes';
import MoneyExchange from '../../../services/moneyExchange';
import { transformData } from '../../../utils/transformData';
import { AnyAction, Dispatch } from 'redux';

export const setError = (error: boolean) => {
    return {
        type: ERROR,
        payload: error
    };
};

export const setLoading = (loading: boolean) => {
    return {
        type: LOADING,
        payload: loading
    };
};

export const setSuccess = (items: any) => {
    return {
        type: SUCCESS,
        payload: items
    };
};

export const setCurrency = (baseUrl: string) => {
    return {
        type: SELECTED_CURRENCY,
        payload: baseUrl
    };
};

export const selectCurrency = (baseUrl: string) => {
    return (dispatch: any) => {
        dispatch(setCurrency(baseUrl));
    };
};

export const itemsFetchData = (baseUrl: string) => {
    const service = new MoneyExchange();
    return async (dispath: Dispatch<AnyAction>) => {
        try {
            dispath(setLoading(true));
            const result = await service.getRates(baseUrl);
            if (Object.keys(result).length !== 0) {
                dispath(setLoading(false));
                dispath(setSuccess(transformData(result.rates)));
            } else {
                throw new Error(result.statusText);
            }
        } catch {
            dispath(setError(true));
        }
    };
};
