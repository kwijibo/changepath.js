//:: Object -> Object
const clone = (source) => 
  Array.isArray(source)? 
    Array.from(source) : 
    Object.assign(Object.create(Object.getPrototypeOf(source)), source)


//:: [path] -> val -> Source -> Target
export const changePath = (path, val, dict) => {
  const result = clone(dict) 
  const end = path.reduce((accum, k, i)=>{
    if(path.length-1 === i){
      accum[k] = val
    } else {
      const blank = (typeof k == "number")? [] : {}
      accum[k] = accum[k]? clone(accum[k]) : blank 
    }
    return accum[k]
  }, result)
  return result
}
