import {
    START_LOGIN_AUTH,
    LOGIN_AUTH_FAILURE,
    LOGIN_AUTH_SUCCESS
} from '../types';

const initialState = {
    name:null,
    uid:null,
    message:null,
    email:null,
    token:null,
    error:null,
    message:null,
    loading:null
}


export default function (state = initialState, action) {
    switch(action.type){
        case START_LOGIN_AUTH:{
            return {
                ...state,
                loading:true
            }
        }
        case LOGIN_AUTH_FAILURE:{
            return {
                ...state,
                error: true,
                loading:false,
                message: action.payload.message
            }
        }
        case LOGIN_AUTH_SUCCESS:{
            return {
                ...state,
                error:false,
                loading:false,
                name:action.payload.name,
                uid:action.payload.uid,
                email:action.payload.email,
                token:action.payload.token
            }
        }
        default:{
            return state;
        }
    }
}