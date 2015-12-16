import reducer from './ProjectsReducer';
import * as types from '../constants/ActionTypes';
import expect from 'expect.js';

describe('ProjectsReducer', ()=> {

  it('should have initial state', ()=> {
    expect(reducer(undefined, {})).to.eql({loading: false, providers: {}});
  });

  it('should handle PROJECTS_LOADING', ()=> {
    expect(reducer({}, {
      type: types.PROJECTS_LOADING
    })).to.eql({
        loading: true
      });
  })
  ;

  it('should handle PROJECTS_LOADED', ()=> {
    const provider = {
      providerType: 'SEMAPHORE'
    };
    expect(reducer({}, {
      type: types.PROJECTS_LOADED,
      provider: provider,
      projects: [{
        id: 1
      }]
    })).to.eql({
        loading: false,
        providers: {
          'SEMAPHORE': [{
            id: 1
          }]
        }
      });
  });

  it('should handle PROJECTS_LOADING_FAILED', ()=>{
    expect(reducer({},{type: types.PROJECTS_LOADING_FAILED})).to.eql({loading: false, loading_failed: true})
  })

});
