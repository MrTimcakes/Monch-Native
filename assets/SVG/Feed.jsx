import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  let fillColor = props.fill || '',
      strokeColor = props.stroke || '#6E7FAA';

  if(props.isActive){
    fillColor = '#5663FF';
    strokeColor = '';
  }else{
    fillColor = '';
    strokeColor = '#6E7FAA';
  }
  
  return (
    <Svg width={74.238} height={74.238} viewBox="0 0 74.238 74.238" {...props}>
      <Path
        id="Feed"
        d="M22.081 62.201a10.04 10.04 0 11-10.04-10.04 10.04 10.04 0 0110.04 10.04zm27.54 7.4A47.672 47.672 0 004.632 24.618 2.506 2.506 0 002 27.125v7.536a2.51 2.51 0 002.334 2.511 35.13 35.13 0 0132.731 32.729 2.51 2.51 0 002.511 2.334h7.536a2.506 2.506 0 002.509-2.634zm22.615.045A70.286 70.286 0 004.587 2.001 2.506 2.506 0 002 4.512v7.536a2.516 2.516 0 002.423 2.508 57.7 57.7 0 0155.26 55.26 2.516 2.516 0 002.508 2.423h7.536a2.506 2.506 0 002.509-2.588z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth={4}
      />
    </Svg>
  )
}

export default SvgComponent
