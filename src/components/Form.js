import React from 'react'
import './Form.css'
import Features from './Features'

class Form extends React.Component {

  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <Features 
          state={this.props.state}
          features={this.props.features}
          currency={this.props.currency}
          updateFeature={this.props.updateFeature}
        />
      </form>
    )
  }
}

export default Form
