import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index";

export const signin = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.signin(formData);

        dispatch({ type: AUTH, data });

        router.push("/admin");
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.signup(formData);

        dispatch({ type: AUTH, data });

        router.push("/admin");
    } catch (error) {
        console.log(error);
    }
};
