var recipes = {};
function updateObjectWithKeyAndValue(Object, Key, Value) {
  return Object.assign({}, Object, {[Key]:Value});
}
function destructivelyUpdateObjectWithKeyAndValue (Object, Key, Value) {
  Object[Key] = Value;
  return Object;
}
