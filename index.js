var recipes = {};
function updateObjectWithKeyAndValue(Obj, Key, Value) {
  return Object.assign({}, Obj, {[Key]:Value});
}
function destructivelyUpdateObjectWithKeyAndValue (Object, Key, Value) {
  Object[Key] = Value;
  return Object;
}
function deleteFromObjectByKey(obj, key) {
  var newObj = Object.assign({}, obj)
  delete newObj.key
  return newObj
}