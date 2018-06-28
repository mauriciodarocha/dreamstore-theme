import { Component } from 'react'
import {Link} from 'render'
import ReactDOM from 'react-dom'

class ComponentAmoreira extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Link page="store/home">Olá Mundo!</Link>
  }
}

export default ComponentAmoreira

