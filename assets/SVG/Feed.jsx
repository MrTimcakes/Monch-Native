import * as React from "react"
import Svg, {
  Defs,
  RadialGradient,
  Stop,
  G,
  Circle,
  Path,
} from "react-native-svg"

function SvgComponent(props) {
  let fillColor = props.fill || '',
      strokeColor = props.stroke || '#6E7FAA';

  if(props.isActive){
    fillColor = '#5663FF';
    strokeColor = '';
  }else{
    fillColor = '#FFFFFF';
    strokeColor = '#6E7FAA';
  }

  return (
    <Svg viewBox="0 0 144.108 144.108" {...props}>
      <Defs>
        <RadialGradient
          id="radial-gradient"
          cx={0.5}
          cy={0.5}
          r={0.5}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#5663ff" />
          <Stop offset={0.523} stopColor="#5663ff" stopOpacity={0.322} />
          <Stop offset={0.736} stopColor="#5663ff" stopOpacity={0.102} />
          <Stop offset={0.954} stopColor="#5663ff" stopOpacity={0.012} />
          <Stop offset={1} stopColor="#5663ff" stopOpacity={0} />
        </RadialGradient>
      </Defs>
      <G id="FeedGroup" transform="translate(-739.946 -101.292)">
        {props.isActive
          ? <Circle id="ActiveHighlight" cx={72.054} cy={72.054} r={72.054} fill="url(#radial-gradient)" opacity={0.35} transform="translate(739.946 101.292)" />
          : null
        }
        <Path
          id="Feed"
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={4}
          d="M797.081 198.218a10.04 10.04 0 11-10.04-10.04 10.04 10.04 0 0110.04 10.04zm27.54 7.4a47.672 47.672 0 00-44.989-44.983 2.506 2.506 0 00-2.632 2.507v7.536a2.51 2.51 0 002.334 2.511 35.13 35.13 0 0132.731 32.729 2.51 2.51 0 002.511 2.334h7.536a2.506 2.506 0 002.509-2.634zm22.615.045a70.286 70.286 0 00-67.649-67.645 2.506 2.506 0 00-2.587 2.511v7.536a2.516 2.516 0 002.423 2.508 57.7 57.7 0 0155.26 55.26 2.516 2.516 0 002.508 2.423h7.536a2.506 2.506 0 002.509-2.588z"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
