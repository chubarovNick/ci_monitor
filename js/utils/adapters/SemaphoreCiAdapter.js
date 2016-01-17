import 'isomorphic-fetch'

const BASE_URL ='https://semaphoreci.com'

function projectMapper(project) {
  return { title: project.name, id: project.id }
}

export default class SemaphoreCiAdapter {

  static projects(token) {
    return fetch(`${BASE_URL}/api/v1/projects?auth_token=${token}`)
    .then((response)=>response.json())
    .then((projects)=>projects.map(projectMapper))
  }
  static project(projectId) {
    fetch(`${BASE_URL}/api/v1/projects/${projectId}`)
  }
  static branches(token, projectId) {
    return fetch(`${BASE_URL}/api/v1/projects/${projectId}/branches`)
  }

  static branchStatus(projectId, branchId) {
    return fetch(`${BASE_URL}/api/v1/projects/${projectId}/${branchId}/status`)
  }

  static builds(projectId, branchId, token ) {
    return fetch(`${BASE_URL}/api/v1/projects/${projectId}/${branchId}?auth_token=${token}`)
  }
}
