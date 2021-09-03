import { ActionTypes } from "../constants/action-types";

export const setContacts = (contacts) =>{
    return {
        type:ActionTypes.SET_CONTACT,
        payload:contacts,
    }
} 

export const selectedContact = (contact)=>{
    return{
        type:ActionTypes.SELECTED_CONTACT,
        payload:contact,
    }
}

export const removeSelectedContact = () =>{
    return{
        type:ActionTypes.REMOVE_SELECTED_CONTACT,
    }
}