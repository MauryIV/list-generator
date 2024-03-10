const Header = require('../lib/header')
const { formatDate } = require('../lib/date')

describe('Header', () => {
  test('should return the appropriate html header when render() is called.', () => {
    const header = new Header();
    const today = new Date()
    expect(header.render()).toEqual(`<header class="header"><h1>Todo Today</h1><p>${formatDate(today)}</p></header>`)
  })
})