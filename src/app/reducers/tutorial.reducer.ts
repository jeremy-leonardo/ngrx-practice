import { Action } from '@ngrx/store'
import { Tutorial } from './../models/tutorial.model'
import * as TutorialActions from './../actions/tutorial.actions'

const initialState: Tutorial = {
  name: 'Initial Tutorial',
  url: 'http://google.com'
}

export function tutorialReducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {
  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];
    case TutorialActions.REMOVE_TUTORIAL:
      const newState = [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
      return newState;
    default:
      return state;
  }
}
