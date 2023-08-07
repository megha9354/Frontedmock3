import { GET_LOADING_DATA, GET_DATA, POST_LOADING_DATA, POST_DATA, PARAM_DATA, PARAM_LOADING_DATA } from "./actionType";
import axios from "axios";
export const getData = (payload) => ({
    type: GET_DATA,
    payload,
});

export const getLoadingData = (payload) => ({
    type: GET_LOADING_DATA,
    payload,
});

export const postData = (payload) => ({
    type: POST_DATA,
    payload,
});

export const getPostLoading = (payload) => ({
    type: POST_LOADING_DATA,
    payload,
});



export const paramData = (payload) => ({
    type: PARAM_DATA,
    payload,
});

export const getParamLoading = (payload) => ({
    type: PARAM_LOADING_DATA,
    payload,
});




export const fetchApi = () => (dispatch) => {
    dispatch(getLoadingData());
    axios.get("http://localhost:3001/products").then(({ data }) => {
        dispatch(getData(data));
    });
};



export const sortAPI = (param) => (dispatch) => {
    dispatch(getParamLoading());
    axios.get("http://localhost:3001/products", {
        params: param
    }).then(({ data }) => {
        dispatch(paramData(data));
    });
};



export const postApi = (data) => (dispatch) => {
    dispatch(getPostLoading());
    axios.post("http://localhost:3001/products").then(({ data }) => {
        dispatch(postData());
    });
};
