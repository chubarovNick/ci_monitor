import reducer from './ProjectReducer';
import * as types from '../constants/ActionTypes';
import expect from 'expect.js';


describe('ProjectReducer', ()=>{

  it('should have initial state', ()=> {
    expect(
      reducer(undefined, {})
    ).to.eql(
      {builds_loading: false, builds: [], branches: [], branches_loading: false}
    );
  });

  it('should handle BRANCHES_LOADED',()=>{
    expect(
      reducer(
        {},
        {type: types.BRANCHES_LOADED, branches: [{id: 1}]}
      )).to.eql(
        {branches: [{id: 1}]}
      );
  });

  it('should handle BRANCHES_LOADING', ()=>{
    expect(reducer({},{type: types.BRANCHES_LOADING})).to.eql({branches_loading: true});
  });

  it('should handle BUILDS_LOADED',()=>{
    expect(reducer(
      {},
      {type: types.BUILDS_LOADED, builds: [{id: 1}]}
    )).to.eql({builds: [{id: 1}],builds_loading: false})
  });

  it('should handle BUILDS_LOADING', ()=>{
    expect(
      reducer(
        {},
        {type: types.BUILDS_LOADING}
      )
    ).to.eql(
      {
        builds_loading: true
      }
    )
  })

})
