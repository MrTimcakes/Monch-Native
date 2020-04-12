import React, { useState, useEffect, Fragment } from 'react';
import Svg, {
  Defs,
  RadialGradient,
  Stop,
  G,
  Circle,
  Path,
} from 'react-native-svg';

function SvgComponent(P) {
  const [fillColor, setFillColor] = useState('');
  const [strokeColor, setStrokeColor] = useState('#6E7FAA');
  // Change colours when isActive changes
  useEffect(() => { P.isActive ? (setFillColor("#5663FF"), setStrokeColor("")) : (setFillColor("#FFFFFF"), setStrokeColor("#6E7FAA")); }, [P.isActive]);

  const SvgPath = ()=>{
    return(
      <Fragment>
        <Defs>
          <RadialGradient id='radial-gradient' cx={72} cy={720.037} r={72} gradientTransform='translate(0 -648.037)' gradientUnits='userSpaceOnUse'>
            <Stop offset={0} stopColor='#5663ff' />
            <Stop offset={0.523} stopColor='#5663ff' stopOpacity={0.322} />
            <Stop offset={0.736} stopColor='#5663ff' stopOpacity={0.102} />
            <Stop offset={0.954} stopColor='#5663ff' stopOpacity={0.012} />
            <Stop offset={1} stopColor='#5663ff' stopOpacity={0} />
          </RadialGradient>
        </Defs>
        <G id='InventoryGroup'>
          {P.isActive ? <Circle id='ActiveHighlight' cx={72} cy={72} r={72} style={{ isolation: 'isolate', }} fill='url(#radial-gradient)' opacity={0.35} /> : null }
          <Path id='Inventory' fill={fillColor} stroke={strokeColor} strokeWidth={4} d='M109.3 65.355v2.639c0 2.216-1.4 3.905-3.092 3.905h-1l-3.291 29.87c-.4 3.905-2.992 6.755-6.084 6.755h-46.77c-3.092 0-5.685-2.85-6.084-6.755l-3.391-29.87h-1c-1.7 0-3.092-1.794-3.092-3.905v-2.639c0-2.216 1.4-3.905 3.092-3.905h8.577l13.663-23.959a3.543 3.543 0 0 1 4.68-1.79q.1052.0469.207.1007a1.5618 1.5618 0 0 1 .8.633 6.1789 6.1789 0 0 1 .9 7.283L57.243 61.555H87.26L77.088 43.718a6.1789 6.1789 0 0 1 .9-7.283 3.5129 3.5129 0 0 1 4.9676.07q.1149.1182.2184.2468a5.8351 5.8351 0 0 1 .6.844L97.437 61.555h8.577c1.895-.211 3.291 1.583 3.291 3.8zM75.492 94.064v-18.26c0-2.216-1.4-3.905-3.092-3.905s-3.092 1.794-3.092 3.905v18.26c0 2.216 1.4 3.905 3.092 3.905s3.092-1.689 3.092-3.905zm14.361 0v-18.26c0-2.216-1.4-3.905-3.092-3.905s-3.092 1.794-3.092 3.905v18.26c0 2.216 1.4 3.905 3.092 3.905s3.092-1.689 3.092-3.905zm-28.722 0v-18.26c0-2.216-1.4-3.905-3.092-3.905s-3.092 1.794-3.092 3.905v18.26c0 2.216 1.4 3.905 3.092 3.905s3.092-1.689 3.092-3.905z' transform='translate(0 .001)' />
        </G>
      </Fragment>
    )
  }

  if(P.pathOnly){ return <SvgPath /> }

  return (
    <Svg viewBox="0 0 144 144" {...P}>
      <SvgPath />
    </Svg>
  )
}

export default SvgComponent;
