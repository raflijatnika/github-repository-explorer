import type { ReduxAction, SetReposAction, SetUsersAction } from "@/interfaces/redux.interfaces";
import type { InitialStateTypes } from "@/interfaces/github.interfaces";

const initialState: InitialStateTypes = {
  users: [],
  repos: {},
};

const githubReducer = (state: InitialStateTypes = initialState, action: ReduxAction) => {
  switch (action.type) {
  case "SET_USERS":
    { const setUsersAction = action as SetUsersAction;
    return {
      ...state,
      users: setUsersAction.payload,
    }; }

  case "SET_REPOS":
    { const setReposAction = action as SetReposAction;
    const newRepos = {
      ...state.repos,
      [setReposAction.payload.key as string]: setReposAction.payload.value,
    };
    return {
      ...state,
      repos: newRepos,
    }; }

  case "CLEAR_REPOS":
    return {
      ...state,
      repos: {},
    };

  case "CLEAR_USERS":
    return {
      ...state,
      users: [],
    };

  case "CLEAR_ALL":
    return initialState;

  default:
    return state;
  }
};

export default githubReducer;
