import { Component } from 'react'
import {Link} from 'render'
import ReactDOM from 'react-dom'

class ComponentAmoreira extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Link page="store/teste">Olá Teste!</Link>
  }
}

export default ComponentAmoreira

