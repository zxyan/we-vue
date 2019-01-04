import { isDef, isObj } from './'

const { hasOwnProperty } = Object.prototype

function assignKey (to: object, from: object, key: string | number): void {
  const val = from[key]

  if (!isDef(val) || (hasOwnProperty.call(to, key) && !isDef(to[key]))) {
    return
  }

  if (!hasOwnProperty.call(to, key) || !isObj(val)) {
    to[key] = val
  } else {
    to[key] = assign(Object(to[key]), from[key])
  }
}

export default function assign (to: object, from: object): object {
  for (const key in from) {
    if (hasOwnProperty.call(from, key)) {
      assignKey(to, from, key)
    }
  }
  return to
}
