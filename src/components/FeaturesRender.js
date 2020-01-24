import React from 'react'
import slugify from 'slugify'
import'./FeaturesRender.css'

class FeaturesRender extends React.Component {
  render () {            
    return (
      <div key={this.props.itemHash} className="feature__item">
        <input
          type="radio"
          id={this.props.itemHash}
          className="feature__option"
          name={slugify(this.props.item.name)}
          checked={this.props.item.name === this.props.state.selected[this.props.feature].name}
          onChange={e => this.props.updateFeature(this.props.feature, this.props.item)}
        />
        <label htmlFor={this.props.itemHash} className="feature__label">
          {this.props.item.name} ({this.props.currency.format(this.props.item.cost)})
        </label>
      </div>
    )
  }
}

export default FeaturesRender