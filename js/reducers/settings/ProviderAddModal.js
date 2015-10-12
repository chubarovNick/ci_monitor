import * as ActionTypes from '../../constants/ActionTypes';


export default function (state = {show: false}, action) {
  switch (action.type){
    case ActionTypes.SHOW_PROVIDER_ADD_MODAL:
      return {...state, show: true};
    case ActionTypes.SELECT_PROVIDER:
      return {...state, selectedProvider: action.providerType};
    case ActionTypes.PROVIDER_ADDED:
      return {...state,show: false};
    default:
      return state;
  }
}
