const Component = require('./component')
const { formatDate } = require('./date')

class Header extends Component{
  render() {
    const today = new Date();
    return `<header class="header"><h1>Todo Today</h1><p>${formatDate(today)}</p></header>`
  }
}

module.exports = Header
