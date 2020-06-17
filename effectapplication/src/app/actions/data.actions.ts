import { Action } from "@ngrx/store";

export enum ActionTypes {
  LoadDataBegin = "[Data] Load data begin",
  LoadDataSuccess = "[Data] Load data success",
  LoadDataFailure = "[Data] Load data failure"
}

export class LoadDataBegin implements Action {  
  readonly type = ActionTypes.LoadDataBegin;
  constructor(){
    console.log("Action LoadDataBegin");
  }
}

export class LoadDataSuccess implements Action {
  readonly type = ActionTypes.LoadDataSuccess;

  constructor(public payload: { data: any }) {
   console.log("Action LoadDataSuccess");
   console.log("payload"+ payload);
  }
}

export class LoadDataFailure implements Action {
  readonly type = ActionTypes.LoadDataFailure;

  constructor(public payload: { error: any }) {
    console.log("Action LoadDataFailure");
    console.log("payload"+ payload);

  }
}

export type ActionsUnion = LoadDataBegin | LoadDataSuccess | LoadDataFailure;