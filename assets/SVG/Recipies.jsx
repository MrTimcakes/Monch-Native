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
    fillColor = '';
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
      <G id="RecipiesGroup" transform="translate(-285.946 -101.292)">
        {props.isActive
          ? <Circle id="ActiveHighlight" cx={72.054} cy={72.054} r={72.054} fill="url(#radial-gradient)" opacity={0.35} transform="translate(285.946 101.292)" />
          : null
        }
        <Path
          id="Recipies"
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={4}
          d="M357.508 140.522c.109.641 2.2 12.884 2.2 17.561 0 7.131-3.79 12.216-9.394 14.261l1.759 32.462a3.28 3.28 0 01-3.277 3.445h-8.726a3.281 3.281 0 01-3.272-3.449l1.759-32.458c-5.617-2.045-9.394-7.144-9.394-14.261 0-4.69 2.086-16.92 2.2-17.561.431-2.771 6.171-2.808 6.526.15v19.251c.177.464 2.059.436 2.181 0 .193-3.449 1.077-18.978 1.093-19.333.45-2.836 6.094-2.836 6.531 0 .027.368.9 15.884 1.091 19.333.123.436 2.018.464 2.181 0v-19.251c.354-2.945 6.108-2.918 6.544-.15zm16.255 38.952l-2.048 25.237a3.271 3.271 0 003.258 3.54h7.635a3.264 3.264 0 003.272-3.272v-63.257a3.273 3.273 0 00-3.272-3.271c-11.245 0-30.185 24.335-8.845 41.023z"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
