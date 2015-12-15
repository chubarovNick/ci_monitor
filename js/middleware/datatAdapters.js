export default store => next => action => {
  let result = next(action);
  console.log(action);
  return result;
}
