import * as ActionTypes from '../constants/ActionTypes'


export default function (state = { providers:[], notificationsEnabled: false }, action) {
  switch (action.type) {
    case ActionTypes.REMOVE_PROVIDER:
      return { ...state, providers: state.providers.filter((i)=> i.providerKey !== action.providerKey) }
    case ActionTypes.ADD_PROVIDER:
      return { ...state,show: false, providers: [ ...state.providers, { providerType: action.providerType, providerKey: action.providerKey } ] }
    case ActionTypes.TOGGLE_NOTIFICATIONS:
      return { ...state, notificationsEnabled: action.value }
    default:
      return state
  }
}
