import type { Action } from "redux";
import type { UsersTypes, UserRepository } from "@/interfaces/github.interfaces";

export interface UserData {
  username: string;
  email: string;
  id: number;
}

export interface SetUsersAction extends Action<"SET_USERS"> {
  payload: UsersTypes[];
}

export interface SetReposAction extends Action<"SET_REPOS"> {
  payload: UserRepository;
}

export type ClearAllAction = Action<"CLEAR_ALL">;

export type ClearUsersAction = Action<"CLEAR_USERS">;

export type ClearReposAction = Action<"CLEAR_REPOS">;

export interface SetUserDataAction extends Action<"SET_USER"> {
  payload: UserData;
}

export type ReduxAction = SetUsersAction | SetReposAction | ClearAllAction | ClearUsersAction | ClearReposAction;
