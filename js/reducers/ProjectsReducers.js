import * as ActionTypes from '../constants/ActionTypes';


export default function (state = {providers:{}, loading: false}, action) {
  console.log(action);
  console.log(state);
  switch (action.type){
    case ActionTypes.PROJECTS_LOADING:
      return {...state, loading: true};
    case ActionTypes.PROJECTS_LOADING_FAILED:
      return {...state, loading: false, loading_failed: true};
    case ActionTypes.PROJECTS_LOADED:
      var providers = state.providers || {};
      providers[action.provider.providerType] = action.projects;
      return {...state, providers: providers, loading: false}
    default:
      return state;
  }
}
