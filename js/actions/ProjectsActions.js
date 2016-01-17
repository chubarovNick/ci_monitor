import * as ActionTypes from '../constants/ActionTypes'
import providerFactory from '../utils/providerFactory'

export function projectLoading() {
  return {
    type: ActionTypes.PROJECTS_LOADING
  }
}

export function branchesLoaded(branches) {
  return {
    type: ActionTypes.BRANCHES_LOADED,
    branches
  }
}

export function loadBranches(provider, project) {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.BRANCHES_LOADING
    })

    providerFactory.deduceProvider(provider.providerType)
      .branches(provider.providerKey, project.id).then((response) => {
        return dispatch(branchesLoaded(response))
      })
  }
}

export function projectsLoaded(provider, projects) {
  return {
    type: ActionTypes.PROJECTS_LOADED,
    provider,
    projects
  }
}

export function faviorProject(project) {
  return {
    type: ActionTypes.FAVOR_PROJECT,
    project
  }
}

export function unfavorPorject(project) {
  return {
    type: ActionTypes.UNFAVOR_PROJECT,
    project
  }
}

export function projectLoadingFailed() {
  return {
    type: ActionTypes.PROJECTS_LOADING_FAILED
  }
}

export function requestProjects(settings) {
  return (dispatch) => {
    dispatch(projectLoading())
    settings.providers.forEach((p) => {
      providerFactory.deduceProvider(p.providerType).projects(p.providerKey).then((response) => {
        return dispatch(projectsLoaded(p, response))
      })
    })
  }
}
