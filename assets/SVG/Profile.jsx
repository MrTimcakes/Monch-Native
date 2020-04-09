import * as React from "react"
import Svg, {
  Defs,
  RadialGradient,
  Stop,
  G,
  Circle,
  Rect,
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
        <RadialGradient id="radial-gradient" cx={0.5} cy={0.5} r={0.5} gradientUnits="objectBoundingBox" >
          <Stop offset={0.000} stopColor="#5663ff" />
          <Stop offset={0.523} stopColor="#5663ff" stopOpacity={0.322} />
          <Stop offset={0.736} stopColor="#5663ff" stopOpacity={0.102} />
          <Stop offset={0.954} stopColor="#5663ff" stopOpacity={0.012} />
          <Stop offset={1.000} stopColor="#5663ff" stopOpacity={0.000} />
        </RadialGradient>
      </Defs>
      <G id="Profile" transform="translate(-631.259 -84.739)">
        {props.isActive ? <Circle id="ActiveHighlight" cx={72.054} cy={72.054} r={72.054} fill="url(#radial-gradient)" opacity={0.35} transform="translate(631.259 84.739)" /> : null }
        <Circle id="Head" cx={12.37} cy={12.37} r={12.37} fill={fillColor} stroke={strokeColor} strokeWidth={4} transform="translate(690.318 124.082)" />
        <Rect id="Body" width={41.75} height={26.164} fill={fillColor} stroke={strokeColor} strokeWidth={4} rx={13.082} transform="translate(681.813 158.486)" />
      </G>
    </Svg>
  )
}

export default SvgComponent
