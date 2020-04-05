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
    <Svg width={60.717} height={73.806} viewBox="0 0 60.717 73.806" {...props}>
      <Path
        id="Recipies"
        d="M30.345 4.072c.109.641 2.2 12.884 2.2 17.561 0 7.131-3.79 12.216-9.394 14.261l1.759 32.462a3.28 3.28 0 01-3.277 3.445h-8.726a3.281 3.281 0 01-3.272-3.449l1.759-32.458C5.777 33.849 2 28.75 2 21.633c0-4.69 2.086-16.92 2.2-17.561.431-2.771 6.171-2.808 6.526.15v19.251c.177.464 2.059.436 2.181 0C13.1 20.024 13.984 4.495 14 4.14c.45-2.836 6.094-2.836 6.531 0 .027.368.9 15.884 1.091 19.333.123.436 2.018.464 2.181 0V4.222c.354-2.945 6.108-2.918 6.544-.15zM46.6 43.024l-2.048 25.237a3.271 3.271 0 003.258 3.54h7.635a3.264 3.264 0 003.272-3.272V5.272a3.273 3.273 0 00-3.272-3.271C44.2 2.001 25.26 26.336 46.6 43.024z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth={4}
      />
    </Svg>
  )
}

export default SvgComponent
