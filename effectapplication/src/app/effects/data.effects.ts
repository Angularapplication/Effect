/*
https://stackoverflow.com/questions/45490368/ngrx-oftype-ngrx-effects  //ofType
*/

import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

import { DataService } from "../service/data.service";
import * as DataActions from "../actions/data.actions";

@Injectable()
export class DataEffects {
  constructor(private actions: Actions, private dataService: DataService) {
      console.log("Effects");
      console.log(this.actions);
      console.log(this.dataService);
  }

  @Effect()
  loadData = this.actions.pipe(
    ofType(DataActions.ActionTypes.LoadDataBegin),//filter
    switchMap(() => {
      return this.dataService.loadData().pipe(
        map(data => new DataActions.LoadDataSuccess({ data: data })),//trigger the action
        catchError(error =>
          of(new DataActions.LoadDataFailure({ error: error }))
        )
      );
    })
  );
}