import expect from 'expect.js';
import * as actions from './ProjectsActions';
import * as types from '../constants/ActionTypes';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('ProjectsActions', ()=>{
  it('should create an action that projects loaded', ()=>{
    const projects = [];
    const provider = {type: 'PROVIDER'};
    const expectedAction ={
      type: types.PROJECTS_LOADED,
      provider,
      projects
    }
    expect(actions.projectsLoaded(provider, projects)).to.eql(expectedAction);
  })

  describe('requestProjects', ()=>{
    afterEach(()=>{nock.cleanAll()});

    describe('when provider is SemaphoreCiAdapter', (done)=>{
      it('shold load projects', ()=>{
        nock('https://semaphoreci.com')
        .get('/api/v1/projects?auth_token=xxx')
        .reply(200, []);

        const Settings = {
          providers: [{providerType: 'SEMAPHORE', providerKey: 'xxx'}]
        }
        const expectedActions =[
          {type: types.PROJECTS_LOADING},
          {type: types.PROJECTS_LOADED, projects: []}
        ];

        const store = mockStore({projects:[{id: 1}]}, expectedActions, done);
        store.dispatch(actions.requestProjects(Settings));
        expect(store.getState()).to.eql({projects:[{id: 1}]})
      })
    })

  });

})
