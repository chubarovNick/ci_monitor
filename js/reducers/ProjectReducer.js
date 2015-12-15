import * as ActionTypes from '../constants/ActionTypes';


export default function (state = {branches:[], builds:[], braches_loading: false, loading: false}, action) {
  switch (action.type){
    case ActionTypes.BRANCHES_LOADING:
      return {...state, braches_loading: true}
    case ActionTypes.BRANCHES_LOADED:
      let braches = action.branches;
      return {...state, branches: braches}
    case ActionTypes.BUILDS_LOADING:
      return {...state, loading: true}
    case ActionTypes.BUILDS_LOADED:
      let builds = action.builds;
      return {...state, builds, loading: false}
    default:
      return state;
  }
}
