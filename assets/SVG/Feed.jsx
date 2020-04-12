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
        <G id='FeedGroup' transform='translate(-739.9 -101.2)'>
          {P.isActive ? <Circle id='ActiveHighlight' cx={72} cy={72} r={72} fill='url(#radial-gradient)' opacity={0.35} transform='translate(739.9 101.2)' /> : null }
          <Path id='Feed' fill={fillColor} stroke={strokeColor} strokeWidth={4} d='M797.1,198.2a10,10,0,1,1-10-10A10.029,10.029,0,0,1,797.1,198.2Zm27.5,7.4a47.6,47.6,0,0,0-45-45A2.419,2.419,0,0,0,777,163v7.6a2.506,2.506,0,0,0,2.3,2.5A35.085,35.085,0,0,1,812,205.8a2.506,2.506,0,0,0,2.5,2.3H822a2.476,2.476,0,0,0,2.5-2.5C824.6,205.7,824.6,205.7,824.6,205.6Zm22.6.1a70.24,70.24,0,0,0-67.6-67.6,2.543,2.543,0,0,0-2.6,2.4v7.6a2.456,2.456,0,0,0,2.4,2.5,57.766,57.766,0,0,1,55.3,55.3,2.454,2.454,0,0,0,2.5,2.4h7.5a2.562,2.562,0,0,0,2.5-2.6Z' />
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
