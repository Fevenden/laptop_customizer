import React from 'react'
import './Summary.css'
import Total from './Total'
import SummaryRender from './SummaryRender'

class Summary extends React.Component {
  render() {
    return (
      <section className="main__summary">
      <h2>Your cart</h2>
      <SummaryRender 
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