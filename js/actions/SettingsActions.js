import {PROVIDER_ADDED, SHOW_PROVIDER_ADD_MODAL, SELECT_PROVIDER} from '../constants/ActionTypes';

export function addProvider(providerType, providerKey){
  debugger;
  return {
    type: PROVIDER_ADDED,
    providerType: providerType,
    providerKey: providerKey
  }
}

export function showAddProviderModal(){
  return {
    type: SHOW_PROVIDER_ADD_MODAL
  }
}

export function selectProvider(providerType){
  return {
    type: SELECT_PROVIDER,
    providerType
  }
}
