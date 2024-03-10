const Component = require('../lib/component')

describe('Component', () => {
  it('should return error when render() is directly called', () => {
    const component = new Component();
    expect(component.render).toThrowError('Child class must implement a render() method.')
  })
})