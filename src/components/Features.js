import React from 'react'
import slugify from 'slugify'
import './Features.css'
import FeaturesOptions from './FeaturesOptions'

class Features extends React.Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {/* {options} */}
          <FeaturesOptions 
            feature={feature}
            state={this.props.state}
            features={this.props.features}
            updateFeature={this.props.updateFeature}
            currency={this.props.currency}
          />
        </fieldset>
      );
    });
    return features
  }
}

export default Features