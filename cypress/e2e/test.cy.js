import {JustDoSomething} from '@utils'

describe('template spec', () => {
  it('passes', () => {
    cy.visit("http://localhost:3000");
    JustDoSomething();
  })
})
