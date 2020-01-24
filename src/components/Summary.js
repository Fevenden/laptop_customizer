import React from 'react'
import './Summary.css'
import Total from './Total'
import Features_summary from './Features_summary'

class Summary extends React.Component {
  render() {
    return (
      <section className="main__summary">
      <h2>Your cart</h2>
      <Features_summary 
        state={this.props.state}
        currency={this.props.currency}
      />
      <Total 
        state={this.props.state}
        currency={this.props.currency}
      />
    </section>
    )
  }
}

export default Summary