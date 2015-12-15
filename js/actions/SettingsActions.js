import {
  PROVIDER_ADDED,
  SHOW_PROVIDER_ADD_MODAL,
  SELECT_PROVIDER,
  INPUT_API_KEY,
  REMOVE_PROVIDER,
  TEST_REQUEST,
  TEST_REJECTED,
  TEST_ACCEPTED,
  CANCEL_ADD_PROVIDER
  } from '../constants/ActionTypes';
import SempahoreAdapter from '../utils/adapters/SemaphoreCiAdapter';

export function addProvider(providerType, providerKey) {
  return {
    type: PROVIDER_ADDED,
    providerType: providerType,
    providerKey: providerKey
  }
}

export function cancelAddProvider(){
  return {
    type: CANCEL_ADD_PROVIDER
  }
}

export function testRequest() {
  return {
    type: TEST_REQUEST
  }
}

export function testRejected() {
  return {
    type: TEST_ACCEPTED
  }
}

export function testAccepted() {
  return {
    type: TEST_REJECTED
  }
}

export function testProvider(providerType, providerKey) {
  return (dispatch)=> {
    dispatch(testRequest());
    SempahoreAdapter.projects(providerKey)
      .then(()=> dispatch(testAccepted()), ()=>dispatch(testRejected()))
  }
}

export function showAddProviderModal() {
  return {
    type: SHOW_PROVIDER_ADD_MODAL
  }
}

export function changeApiKey(apiKey) {
  return {
    type: INPUT_API_KEY,
    apiKey
  }
}

export function removeProvider(provider) {
  return {
    type: REMOVE_PROVIDER,
    providerKey: provider.providerKey
  }
}

export function selectProvider(providerType) {
  return {
    type: SELECT_PROVIDER,
    providerType
  }
}
