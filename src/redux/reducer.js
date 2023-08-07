import { GET_LOADING_DATA, GET_DATA, POST_LOADING_DATA, POST_DATA, PARAM_LOADING_DATA, PARAM_DATA } from "./actionType.js";

const init = {
    data: [],
    loading: false,
};

export const productReducer = (store = init, { type, payload }) => {
    switch (type) {
        case GET_DATA:
            return {
                ...store,
                data: payload,
                loading: false,
            };

        case GET_LOADING_DATA:
            return {
                ...store,
                loading: true,
            };

        case PARAM_DATA:
            return {
                ...store,
                data: payload,
                loading: false,
            };

        case PARAM_LOADING_DATA:
            return {
                ...store,
                loading: true,
            };



        case POST_DATA:
            return {
                ...store,
                loading: false,
            };

        case POST_LOADING_DATA:
            return {
                ...store,
                loading: true,
            };

        default:
            return { ...store };
    }
};
