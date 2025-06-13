import { combineReducers } from "redux";
import githubReducer from "@/redux/reducers/github.reducers";

const rootReducer = combineReducers({
  githubReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;