import React from 'react'
import './Summary.css'
import Total from './Total'

class Summary extends React.Component {
  render() {
    const summary = Object.keys(this.props.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.props.state.selected[feature];

      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {this.props.currency.format(selectedOption.cost)}
          </div>
        </div>
      );
    });
    
    return (
      <section className="main__summary">
      <h2>Your cart</h2>
      {summary}
      <Total 
        state={this.props.state}
        currency={this.props.currency}
      />
    </section>
    )
  }
}

export default Summary