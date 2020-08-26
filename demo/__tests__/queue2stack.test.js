const Stack = require('../queue2stack')

let stack = new Stack()
test('Stack', () => {
  expect(stack.push("1")).toBe(true)
  expect(stack.push("2")).toBe(true)
  expect(stack.push("3")).toBe(true)
  expect(stack.push("4")).toBe(true)
  expect(stack.push("5")).toBe(true)
  expect(stack.top()).toBe("5")
  expect(stack.size()).toBe(5)
  expect(stack.isEmpty()).toBe(false)
  expect(stack.pop()).toBe("5")
  expect(stack.pop()).toBe("4")
  expect(stack.top()).toBe("3")
  expect(stack.size()).toBe(3)
  expect(stack.clear()).toBe(true)
  expect(stack.isEmpty()).toBe(true)
})