import {changePath} from './index.es6.js'
import expectjs from 'expect.js'
const expect = expectjs

describe("changePath", function(){

  function F(){}
  const f = new F()
  f.b=42
  const before = {a : [f, 2], b: 1}
  const path = ['a', 0, 'b']
  const after = changePath(path, 99, before)

  it("should set the value at the end of the path", function(){
    expect(after.a[0].b).to.be(99)      
  })
  it("should keep the prototype chain", function(){
    expect(after.a[0] instanceof F).to.be(true) 
  })

  it("should not lose other k:v's ", function(){
    expect(after.b).to.be(1)
  })

  it("should preserve arrays as arrays", function(){
    expect(Array.isArray(after.a)).to.be(true)
  })
  it("should preserve objects as objects", function(){
    expect(after.constructor.name).to.be("Object")
  })
})

