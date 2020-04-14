import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={100} height={100} viewBox='0 0 100 100' {...props}>
      <G id='MFIcons4' transform='translate(-355 -1285)'>
        <G id='Barcode' fill='none' stroke='#fff' strokeLinecap='round' strokeLinejoin='round' strokeWidth={4} transform='translate(361.979 1302.818)'>
          <Path id='Path_436' d='M623.8,73.4l7.9-.1a6.552,6.552,0,0,0,6.5-6.5V15.3a6.552,6.552,0,0,0-6.5-6.5l-7.9.1' transform='translate(-552.09 -8.8)' />
          <Path id='Path_437' d='M566.4,8.8l-8.2.1a6.17,6.17,0,0,0-6.1,6.3V67a6.236,6.236,0,0,0,5.9,6.5h.2l8.2-.1' transform='translate(-552.09 -8.8)' />
          <Path id='Line_99' d='M623.8,26.8V55.4' transform='translate(-552.09 -8.8)' />
          <Path id='Line_100' d='M609.4,19.6v43' transform='translate(-552.09 -8.8)' />
          <Path id='Line_101' d='M595.1,23.2V59' transform='translate(-552.09 -8.8)' />
          <Path id='Line_102' d='M580.8,19.6v43' transform='translate(-552.09 -8.8)' />
          <Path id='Line_103' d='M566.4,26.8V55.4' transform='translate(-552.09 -8.8)' />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
