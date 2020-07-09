const operations = require('./operations.js')
const assert = require('assert')

it('correctly calculates the sum of 1 and 3', () => {
    assert.equal(operations.add(1, 3), 4)
})

it('correctly calculates the difference of 5 and 3', () => {
    assert.equal(operations.subtract(5, 3), 2)
})

it('correctly calculates the product of 10 and 10', () => {
    assert.equal(operations.multiply(10, 10), 100)
})

it('correctly calculates the quotient of 24 and 12', () => {
    assert.equal(operations.divide(24, 12), 2)
})

//validation
it('indicates failure when a string is used instead of a number', () => {
    assert.equal(operations.validateNumbers('sammy', 5), false)
})
  
it('indicates failure when two strings are used instead of numbers', () => {
    assert.equal(operations.validateNumbers('sammy', 'sammy'), false)
})
  
it('successfully runs when two numbers are used', () => {
    assert.equal(operations.validateNumbers(5, 5), true)
})