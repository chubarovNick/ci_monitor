import {
  PROJECTS_LOADING,
  PROJECTS_LOADED,
  PROJECTS_LOADING_FAILED,
  BRANCHES_LOADING,
  BRANCHES_LOADED
} from '../constants/ActionTypes';
import SempahoreAdapter from '../utils/adapters/SemaphoreCiAdapter';
import providerFactory from '../utils/providerFactory';

export function projectLoading(){
  return {
    type: PROJECTS_LOADING
  }
}

export function branchesLoaded(branches){
  return {
    type: BRANCHES_LOADED,
    branches
  }
}

export function loadBranches(provider, project){
  return (dispatch)=>{
    dispatch({type: BRANCHES_LOADING});
    providerFactory.deduceProvider(provider.providerType)
      .branches(provider.providerKey).then((response)=>{
        return dispatch(branchesLoaded(response))
    })
  }
}

export function projectsLoaded(provider, projects){
  return {
    type: PROJECTS_LOADED,
    provider, projects
  }
}

export function projectLoadingFailed(){
  return {
    type: PROJECTS_LOADING_FAILED
  }
}

export function requestProjects(settings){
  return (dispatch)=> {
    dispatch(projectLoading());
    settings.providers.forEach((p)=>{
      providerFactory.deduceProvider(p.providerType).projects(p.providerKey).then((response)=>{
        return dispatch(projectsLoaded(p,response))
      })
    })
  }
}
