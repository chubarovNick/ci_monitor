import * as ActionTypes from '../constants/ActionTypes'
import SempahoreAdapter from '../utils/adapters/SemaphoreCiAdapter'

export function toggleNotifcations(newValue) {
  return {
    type: ActionTypes.TOGGLE_NOTIFICATIONS,
    value: newValue
  }

}

export function addProvider(providerType, providerKey) {
  return {
    type: ActionTypes.ADD_PROVIDER,
    provider: {
      providerType,
      providerKey
    }
  }
}

export function cancelAddProvider() {
  return {
    type: ActionTypes.CANCEL_ADD_PROVIDER
  }
}

export function testRequest() {
  return {
    type: ActionTypes.TEST_REQUEST
  }
}

export function testRejected() {
  return {
    type: ActionTypes.TEST_REJECTED
  }
}

export function testAccepted() {
  return {
    type: ActionTypes.TEST_ACCEPTED
  }
}

export function testProvider(providerType, providerKey) {
  return (dispatch) => {
    dispatch(testRequest())
    SempahoreAdapter.projects(providerKey)
      .then(() => dispatch(testAccepted()), () => dispatch(testRejected()))
  }
}

export function showAddProviderModal() {
  return {
    type: ActionTypes.SHOW_PROVIDER_ADD_MODAL
  }
}

export function changeApiKey(apiKey) {
  return {
    type: ActionTypes.INPUT_API_KEY,
    apiKey
  }
}

export function removeProvider(provider) {
  return {
    type: ActionTypes.REMOVE_PROVIDER,
    providerKey: provider.providerKey
  }
}

export function selectProvider(providerType) {
  return {
    type: ActionTypes.SELECT_PROVIDER,
    providerType
  }
}
