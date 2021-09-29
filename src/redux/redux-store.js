import { combineReducers, createStore } from "redux";
import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";




let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messageReducer,
  sideBar: sidebarReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;
