export default store => next => action => {
  let result = next(action)
  localStorage.setItem('state', JSON.stringify(store.getState()))
  return result
}
