import { combineReducers } from "redux";
import { contactsReducer, selectedContactReducer } from "./ContactsReducer";
const reducers = combineReducers({
    allContacts : contactsReducer,
    contact : selectedContactReducer,   
})

export default reducers