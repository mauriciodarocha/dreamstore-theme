import { Component } from 'react'
import { Link, ExtensionPoint } from 'render'
import ReactDOM from 'react-dom'

class ComponentTeste extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ExtensionPoint id="meu-logo" />
        <ExtensionPoint id="meu-footer" />
      </div>
    )
  }
}

export default ComponentTeste

