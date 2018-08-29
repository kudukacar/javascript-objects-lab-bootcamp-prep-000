var recipes = {};
function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]:value});
}
function destructivelyUpdateObjectWithKeyAndValue (obj, key, value) {
  Object[key] = value;
  return Object;
}
function deleteFromObjectByKey(obj, key) {
  var newObj = Object.assign({}, obj)
  delete newObj.key
  return newObj
}