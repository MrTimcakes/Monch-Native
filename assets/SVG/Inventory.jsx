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
          <Stop offset={0.000} stopColor="#5663ff" />
          <Stop offset={0.523} stopColor="#5663ff" stopOpacity={0.322} />
          <Stop offset={0.736} stopColor="#5663ff" stopOpacity={0.102} />
          <Stop offset={0.954} stopColor="#5663ff" stopOpacity={0.012} />
          <Stop offset={1.000} stopColor="#5663ff" stopOpacity={0} />
        </RadialGradient>
      </Defs>
      <G id="Inventory" transform="translate(-63.946 -101.292)">
        {props.isActive
          ? <Circle id="ActiveHighlight" cx={72.054} cy={72.054} r={72.054} fill="url(#radial-gradient)" opacity={0.35} transform="translate(63.946 101.292)" />
          : null
        }
        <Path
          id="Inventory-2"
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={4}
          d="M73.86 60.5v2.478c0 2.053-1.378 3.718-3.077 3.718h-1.026l-3.349 28.312c-.433 3.663-3.03 6.384-6.093 6.384h-46.77c-3.063 0-5.66-2.721-6.093-6.384L4.1 66.695H3.078C1.378 66.695 0 65.03 0 62.977V60.5c0-2.053 1.378-3.718 3.078-3.718h8.635L25.4 34.039a3.669 3.669 0 015.732-1.093 5.654 5.654 0 01.905 6.924L21.86 56.781H52L41.818 39.87a5.654 5.654 0 01.905-6.924 3.668 3.668 0 015.732 1.093l13.692 22.742h8.635c1.7 0 3.078 1.665 3.078 3.719zM40.008 87.761V70.412c0-2.053-1.378-3.718-3.078-3.718s-3.077 1.664-3.077 3.718v17.349c0 2.053 1.378 3.718 3.077 3.718s3.078-1.665 3.078-3.718zm14.362 0V70.412c0-2.053-1.378-3.718-3.078-3.718s-3.077 1.664-3.077 3.718v17.349c0 2.053 1.378 3.718 3.077 3.718s3.077-1.665 3.077-3.718zm-28.723 0V70.412c0-2.053-1.378-3.718-3.077-3.718s-3.078 1.664-3.078 3.718v17.349c0 2.053 1.378 3.718 3.078 3.718s3.076-1.665 3.076-3.718z"
          data-name="Inventory"
          transform="translate(99.5 106.46)"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
