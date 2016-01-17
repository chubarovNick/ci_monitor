import expect from 'expect.js'
import * as actions from './SettingsActions'
import * as types from '../constants/ActionTypes'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)


describe('SettingsActions', () => {
  describe('addProvider', () => {
    it('should allo add provider of data', () => {
      const expectedAction = {
        type: types.ADD_PROVIDER,
        provider: {
          providerType: 'SEMAPHORE',
          providerKey: 'xxx'
        }
      }
      expect(actions.addProvider('SEMAPHORE', 'xxx')).to.eql(expectedAction)
    })
  })

  describe('cancelAddProvider', () => {
    it('should trow action cancel', () => {
      const expectedAction = {
        type: types.CANCEL_ADD_PROVIDER
      }
      expect(actions.cancelAddProvider()).to.eql(expectedAction)
    })
  })

  describe('testRequest', () => {

    it('should return action test request', () => {
      const expectedAction = {
        type: types.TEST_REQUEST
      }
      expect(actions.testRequest()).to.eql(expectedAction)
    })

  })

  describe('testRejected', () => {
    it('should return action testRejected', () => {
      const expectedAction = {
        type: types.TEST_REJECTED
      }
      expect(actions.testRejected()).to.eql(expectedAction)
    })
  })

  describe('testAccepted', () => {
    it('should return testAccepted action', () => {
      const expectedAction = {
        type: types.TEST_ACCEPTED
      }
      expect(actions.testAccepted()).to.eql(expectedAction)
    })
  })

  describe('selectProvider', () => {
    it('shold return selectProvider action', () => {
      const expectedAction = {
        type: types.SELECT_PROVIDER,
        providerType: 'SEMAPHORE'
      }
      expect(actions.selectProvider('SEMAPHORE')).to.eql(expectedAction)
    })
  })

  describe('removeProvider', () => {
    it('should return removeProvider action', () => {
      const expectedAction = {
        type: types.REMOVE_PROVIDER,
        providerKey: 'xxx'
      }
      expect(actions.removeProvider({
        providerKey: 'xxx'
      })).to.eql(expectedAction)
    })
  })

  describe('changeApiKey', () => {
    it('should return changeApiKey action', () => {
      const expectedAction = {
        type: types.INPUT_API_KEY,
        apiKey: 'xxx'
      }
      expect(actions.changeApiKey('xxx')).to.eql(expectedAction)
    })
  })

  describe('showAddProviderModal', () => {
    it('should return showAddProviderModal action', () => {
      const expectedAction = {
        type: types.SHOW_PROVIDER_ADD_MODAL
      }
      expect(actions.showAddProviderModal()).to.eql(expectedAction)
    })
  })

  describe('testProvider', () => {


    afterEach(() => {
      nock.cleanAll()
    })


    describe('when test passed', () => {
      it('should send request and test provider', (done) => {
        nock('https://semaphoreci.com')
          .get('/api/v1/projects?auth_token=xxx')
          .reply(200, [])

        const expectedActions = [
          {
            type: types.TEST_REQUEST
          },
          {
            type: types.TEST_ACCEPTED
          }
        ]

        const store = mockStore({}, expectedActions, done)
        store.dispatch(actions.testProvider('SEMAPHORE', 'xxx'))
      })

    })

    describe('when test failed', () => {

      it('should send request and test provider')
    })
  })

})
