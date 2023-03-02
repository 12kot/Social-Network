import { combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import toDoListReducer from "./toDoListReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    toDoList: toDoListReducer,
    friendsPage: friendsReducer,
})

let store = createStore(reducers);

export default store;