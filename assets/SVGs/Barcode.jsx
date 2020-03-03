import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={73.86} height={56.874} {...props}>
      <G
        data-name="Barcode"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={5.682}
      >
        <Path
          data-name="LeftBracket"
          d="M14.204 2.84l-6.534.059a4.9 4.9 0 00-4.829 5.126v40.884a4.894 4.894 0 004.829 5.124l6.534-.059"
        />
        <Path data-name="Line1" d="M14.204 17.044V39.77" />
        <Path data-name="Line2" d="M25.567 11.363v34.089" />
        <Path data-name="Line3" d="M36.93 14.203v28.408" />
        <Path data-name="Line4" d="M48.293 11.363v34.089" />
        <Path data-name="Line5" d="M59.656 17.044V39.77" />
        <Path
          data-name="RightBracket"
          d="M59.656 54.033l6.237-.059a5.149 5.149 0 005.126-5.126V7.966a5.149 5.149 0 00-5.126-5.126l-6.237.059"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
