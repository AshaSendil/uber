import { combineReducers } from "redux";
//**all components reducers imports */
import loginAndRegisterReducer from "../pages/loginAndRegister/loginAndRegister.reducer";
// import peoples from "../pages/settings/managePersons/poeples.reducer";

const appReducer = combineReducers({ loginAndRegisterReducer });

export default appReducer;
