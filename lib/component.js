class Component {
  constructor(children = []) {
    this.children = children
  }
  render() {
    throw new Error('Child class must implement a render() method.')
  }
  renderInnerHTML() {
    return this.children.map((child) => {
      return typeof child === 'string' ? child : child.render();
    }).join('')
  }
}

module.exports = Component