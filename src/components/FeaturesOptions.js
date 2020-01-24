import React from 'react'
import slugify from 'slugify'
import FeaturesRender from './FeaturesRender'

class FeaturesOptions extends React.Component {
	render() {
		const options = this.props.features[this.props.feature].map(item => {
			const itemHash = slugify(JSON.stringify(item));
			return (
				<FeaturesRender 
					itemHash={itemHash}
					item={item}
					state={this.props.state}
					updateFeature={this.props.updateFeature}
					currency={this.props.currency}
					feature={this.props.feature}
				/>
			);
		});
		return options
	}
}

export default FeaturesOptions
