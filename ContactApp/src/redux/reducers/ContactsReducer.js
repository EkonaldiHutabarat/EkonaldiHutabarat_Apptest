import { ActionTypes } from "../constants/action-types";

const initialState ={
    contacts:[],
}

export const contactsReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ActionTypes.SET_CONTACT:
            return { ...state, contacts: payload};
        default:
            return state;
    }
}

export const selectedContactReducer = (state = {}, {type, payload}) =>{
    console.log(type);
    switch(type){
        case ActionTypes.SELECTED_CONTACT:
            return{...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_CONTACT:
            return {};
        default:
            return state;
    }
}