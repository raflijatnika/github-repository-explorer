import type { UsersTypes, UserRepository } from "@/interfaces/github.interfaces";
import type {
  ClearAllAction,
  ClearReposAction,
  ClearUsersAction,
  SetReposAction,
  SetUsersAction
} from "@/interfaces/redux.interfaces";

export const setUsers = (users: UsersTypes[]): SetUsersAction => ({
  type: "SET_USERS",
  payload: users
});

export const setRepos = (userRepository: UserRepository): SetReposAction => ({
  type: "SET_REPOS",
  payload: userRepository
});

export const clearUsers = (): ClearUsersAction => ({
  type: "CLEAR_USERS",
});

export const clearRepos = (): ClearReposAction => ({
  type: "CLEAR_REPOS",
});

export const clearAll = (): ClearAllAction => ({
  type: "CLEAR_ALL",
});
