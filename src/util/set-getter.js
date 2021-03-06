const defineGetter = Object.prototype.__defineGetter__

function setGetter(object, key, getter) {
  defineGetter.call(object, key, getter)
  return object
}

export default setGetter
