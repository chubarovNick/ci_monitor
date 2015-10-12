import * as ActionTypes from '../constants/ActionTypes';


export default function (state = {providers:[]}, action) {
  switch (action.type){
    case ActionTypes.PROVIDER_ADDED:
      return {...state,show: false, providers: [...state.providers, {providerType: action.providerType, providerKey: action.providerKey}]}
    default:
      return state;
  }
}
