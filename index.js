var recipes = {};
function updateObjectWithKeyAndValue(Obj, Key, Value) {
  return Object.assign({}, Obj, {[Key]:Value});
}
function destructivelyUpdateObjectWithKeyAndValue (Object, Key, Value) {
  Object[Key] = Value;
  return Object;
}
