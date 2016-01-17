import * as ActionTypes from '../../constants/ActionTypes'


export default function (state = { show: false, apiKey: '', selectedProvider: 'SEMAPHORE', testPassed: true }, action) {
  switch (action.type) {
    case ActionTypes.CANCEL_ADD_PROVIDER:
      return { ...state, show: false, apiKey: '' }
    case ActionTypes.SHOW_PROVIDER_ADD_MODAL:
      return { ...state, show: true, testPassed: true, isTesting: false }
    case ActionTypes.SELECT_PROVIDER:
      return { ...state, selectedProvider: action.providerType }
    case ActionTypes.PROVIDER_ADDED:
      return { ...state,show: false, apiKey: '', selectedProvider: 'SEMAPHORE' }
    case ActionTypes.TEST_REQUEST:
      return { ...state, isTesting: true }
    case ActionTypes.TEST_ACCEPTED:
      return { ...state, testPassed: true, isTesting: false }
    case ActionTypes.TEST_REJECTED:
      return { ...state, testPassed: false, isTesting: false }
    case ActionTypes.INPUT_API_KEY:
      return { ...state, apiKey: action.apiKey }
    default:
      return state
  }
}
