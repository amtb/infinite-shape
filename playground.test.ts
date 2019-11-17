import { Playground } from "./playground"

describe('Playground', () => {

  it('says hello world with no name', () => {
    expect(Playground.hello()).toEqual('Hello, World!')
  })

  it('says hello to bob', () => {
    expect(Playground.hello('Bob')).toEqual('Hello, Bob!')
  })

  it('says hello to sally', () => {
    expect(Playground.hello('Sally')).toEqual('Hello, Sally!')
  })
})
