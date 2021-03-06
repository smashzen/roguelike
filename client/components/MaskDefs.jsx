import React from 'react'

export default class MaskDefs extends React.Component {
  render () {
    return (
      <defs>
        <mask
          id='lightAroundHero'
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='1176'
          height='588'
        >
          <rect
            className='anticandle'
            x='0'
            y='0'
          />
          <circle
            className={this.props.candle}
            cx={this.props.hero.x * 14 + 7}
            cy={this.props.hero.y * 14 + 7}
            r='84'
          />
        </mask>
      </defs>
    )
  }
}

MaskDefs.propTypes = {
  candle: React.PropTypes.string.isRequired,
  hero: React.PropTypes.shape({
    x: React.PropTypes.number,
    y: React.PropTypes.number,
    visible: React.PropTypes.bool
  }).isRequired
}
