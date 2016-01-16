import * as ActionTypes from '../constants/ActionTypes';


export default function (state = {providers:{}, loading: false, favoriteProjects: []}, action) {
  switch (action.type){
    case ActionTypes.PROJECTS_LOADING:
      return {...state, loading: true};
    case ActionTypes.PROJECTS_LOADING_FAILED:
      return {...state, loading: false, loading_failed: true};
    case ActionTypes.PROJECTS_LOADED:
      var providers = state.providers || {};
      providers[action.provider.providerType] = action.projects;
      return {...state, providers: providers, loading: false}
    case ActionTypes.FAVOR_PROJECT:
      let favoriteProjects = [...state.favoriteProjects, action.project.id];
      return {...state, favoriteProjects};
    case ActionTypes.UNFAVOR_PROJECT:
      return {...state, favoriteProjects: state.favoriteProjects.filter((i)=> i != action.project.id)}
    default:
      return state;
  }
}
