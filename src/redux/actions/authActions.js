import {
    START_LOGIN_AUTH,
    LOGIN_AUTH_SUCCESS,
    LOGIN_AUTH_FAILURE
} from '../types';

import clientAxios from '../../services/config/axios';
import Swal from 'sweetalert2';


//Funcion que descarga los pacientes
export function loginAuthAction(email,password){
    return async (dispatch)=>{
        dispatch(startLoginAuth());
        try{
            const body={
                email,
                password
            }
            const response = await clientAxios.post('/api/auth',body);
            localStorage.setItem('token',response.data.token);
            dispatch(loginAuthSuccess(response.data));
        }catch(err){
            console.log(err);
            dispatch(loginAuthFailure());
        }
    }
}
const startLoginAuth = () =>({
    type: START_LOGIN_AUTH,
    payload:true
});

const loginAuthSuccess = providers =>({
    type: LOGIN_AUTH_SUCCESS,
    payload: providers
});

const   loginAuthFailure = () =>({
    type: LOGIN_AUTH_FAILURE,
    payload: true
});