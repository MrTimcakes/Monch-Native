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
        <G id='ProfileGroup' transform='translate(-630.213 -82.647)'>
          {P.isActive ? <Circle id='ActiveHighlight' cx={72} cy={72} r={72} fill='url(#radial-gradient)' opacity={0.35} transform='translate(630.213 82.647)' /> : null }
          <G id='Profile' fill={fillColor} stroke={strokeColor} strokeWidth={4} strokeMiterlimit={10}>
            <Circle id='Head' cx={12.4} cy={12.4} r={12.4} transform='translate(690.3 124.1)' />
            <Path id='Body' d='M694.9,158.5h15.6a13.1,13.1,0,0,1,0,26.2H694.9a13.1,13.1,0,0,1,0-26.2Z' />
          </G>
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
