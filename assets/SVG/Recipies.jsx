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
          <RadialGradient id='radial-gradient' cx={71.989} cy={71.982} r={71.954} gradientTransform='matrix(1 0 0 -1 0 143.963)' gradientUnits='userSpaceOnUse'>
            <Stop offset={0} stopColor='#5663ff' />
            <Stop offset={0.523} stopColor='#5663ff' stopOpacity={0.322} />
            <Stop offset={0.736} stopColor='#5663ff' stopOpacity={0.102} />
            <Stop offset={0.954} stopColor='#5663ff' stopOpacity={0.012} />
            <Stop offset={1} stopColor='#5663ff' stopOpacity={0} />
          </RadialGradient>
        </Defs>
        <G id='RecipiesGroup' transform='translate(-285.9 -101.2)'>
          {P.isActive ? <Circle id='ActiveHighlight' cx={72} cy={72} r={72} fill='url(#radial-gradient)' opacity={0.35} transform='translate(285.9 101.2)' /> : null }
          <Path id='Recipies' fill={fillColor} stroke={strokeColor} strokeWidth={4} d='M357.5,140.5c.1.6,2.2,12.9,2.2,17.6,0,7.1-3.8,12.2-9.4,14.3l1.8,32.5a3.246,3.246,0,0,1-3.1,3.4h-8.9a3.329,3.329,0,0,1-3.3-3.3v-.2l1.8-32.5c-5.6-2-9.4-7.1-9.4-14.3,0-4.7,2.1-16.9,2.2-17.6.4-2.8,6.2-2.8,6.5.1v19.3c.2.5,2.1.4,2.2,0,.2-3.4,1.1-19,1.1-19.3.5-2.8,6.1-2.8,6.5,0,0,.4.9,15.9,1.1,19.3.1.4,2,.5,2.2,0V140.5c.3-2.8,6.1-2.7,6.5,0Zm16.3,39-2,25.2a3.257,3.257,0,0,0,3,3.5h7.9a3.329,3.329,0,0,0,3.3-3.3V141.6a3.329,3.329,0,0,0-3.3-3.3c-11.3.2-30.3,24.5-8.9,41.2Z' />
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
