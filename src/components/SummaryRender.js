import React from 'react'
import './SummaryOptions.css'
import SummaryOptions from './SummaryOptions'

class SummaryRender extends React.Component {
  render() {
    const summary = Object.keys(this.props.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.props.state.selected[feature];
      return (
        <SummaryOptions 
          feature={feature}
          featureHash={featureHash}
          selectedOption={selectedOption}
          currency={this.props.currency}
        />
      )
    });
    return summary
  }
}

export default SummaryRender