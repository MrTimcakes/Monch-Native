import * as React from "react"
import Svg, { G, Circle, Rect } from "react-native-svg"

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
    <Svg width={45.75} height={64.569} viewBox="0 0 45.75 64.569" {...props}>
      <G
        id="Profile"
        transform="translate(-679.813 -122.082)"
        fill={fillColor}
        stroke={strokeColor}
        strokeMiterlimit={10}
        strokeWidth={4}
      >
        <Circle
          id="Ellipse_33"
          data-name="Ellipse 33"
          cx={12.37}
          cy={12.37}
          r={12.37}
          transform="translate(690.318 124.082)"
        />
        <Rect
          id="Rectangle_110"
          data-name="Rectangle 110"
          width={41.75}
          height={26.164}
          rx={13.082}
          transform="translate(681.813 158.486)"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
