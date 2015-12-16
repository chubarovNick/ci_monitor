import * as ActionTypes from '../constants/ActionTypes';


export default function (state = {branches:[], builds:[], branches_loading: false, builds_loading: false}, action) {
  switch (action.type){
    case ActionTypes.BRANCHES_LOADING:
      return {...state, branches_loading: true}
    case ActionTypes.BRANCHES_LOADED:
      let braches = action.branches;
      return {...state, branches: braches}
    case ActionTypes.BUILDS_LOADING:
      return {...state, builds_loading: true}
    case ActionTypes.BUILDS_LOADED:
      let builds = action.builds;
      return {...state, builds, builds_loading: false}
    default:
      return state;
  }
}
