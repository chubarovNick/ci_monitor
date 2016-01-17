import reducer from './SettingsReducers'
import * as types from '../constants/ActionTypes'
import expect from 'expect.js'

describe('SettingsReducers', () => {
  it('should initial state', () => {
    expect(
      reducer(undefined, {})
    ).to.eql({
      providers: [],
      notificationsEnabled: false
    })
  })

  it('should handle REMOVE_PROVIDER', () => {
    expect(
      reducer({
        providers: [ {
          type: 'SEMAPHORE',
          providerKey: 'xxx'
        } ]
      }, {
        type: types.REMOVE_PROVIDER,
        providerKey: 'xxx'
      })).to.eql({
        providers: []
      })
  })

  it('should handle ADD_PROVIDER', () => {
    expect(reducer({
      providers: []
    }, {
      type: types.ADD_PROVIDER,
      providerKey: 'XXX',
      providerType: 'SEMAPHORE'
    })).to.eql({
      show: false,
      providers: [ { providerKey: 'XXX', providerType: 'SEMAPHORE' } ]
    })
  })
})
