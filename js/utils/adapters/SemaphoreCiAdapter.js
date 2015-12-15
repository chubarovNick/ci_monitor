import 'isomorphic-fetch';

const BASE_URL ='https://semaphoreci.com';

function projectMapper(project){
  return {title: project.name}
}

export default class SemaphoreCiAdapter {

  static projects(token){
    return fetch(`${BASE_URL}/api/v1/projects?auth_token=${token}`)
    .then((response)=>response.json())
    .then((projects)=>projects.map(projectMapper))
  }
  static project(projectId){

  }
  static branches(projectId){
    return fetch(`${BASE_URL}/api/v1/projects/${projectId}/branches`)
  }

  static branchStatus(projectId, branchId){
    return fetch(`${BASE_URL}/api/v1/projects/${projectId}/${branchId}/status`)
  }

  static builds(projectId, branchId){

  }
}
