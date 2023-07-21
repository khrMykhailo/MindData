import {State, Selector, Action, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {GetMediaBreakpoint} from "./app.actions";

export interface AppStateModel {
  mediaBreakpoint: string
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    mediaBreakpoint: 'desktop'
  }
})

@Injectable()
export class AppState{
  @Selector()
  static mediaBreakpoint(state: AppStateModel){
    return state.mediaBreakpoint
  }

  @Action(GetMediaBreakpoint)
  GetMediaBreakpoint({ patchState }: StateContext<AppStateModel>, { payload }: GetMediaBreakpoint): void {
    patchState({
      mediaBreakpoint: payload
    })
  }
}
