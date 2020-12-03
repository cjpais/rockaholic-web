import React from 'react';
import QRCode from 'easyqrcodejs';

import mesa_rim from '../../mm_black.jpg'

export class GymRouteQRCode extends React.Component<{}, {qrcode: any}> {

  qrcode: any
 
  constructor(props: any) {
      super(props);
      this.qrcode = React.createRef();
  }

  componentDidMount() {
      // Options
      var options = {
          text: "https://digitaldirtbag.xyz/route/5",
          logo: mesa_rim
      }
      // Create new QRCode Object
      new QRCode( this.qrcode.current, options);
  }
  render() {
      return ( 
      <div className = "App">
          <div ref={this.qrcode}></div> 
      </div>
      );
  }
}
