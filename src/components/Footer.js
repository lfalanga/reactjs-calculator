import React from 'react';

function Footer(props) {
  // console.log('PROPS:', props);
  let aFreepik = <a href='https://www.freepik.com' title='Freepik' target='_blank' rel='noreferrer'>Freepik</a>;
  let aFlaticon = <a href='https://www.flaticon.com/' title='Flaticon' target='_blank' rel='noreferrer'>www.flaticon.com</a>;

  return (
    <div id='footer'>
      <div id='credits'>
        Icons made by {aFreepik} from {aFlaticon}
      </div>
    </div>
  );
}

export default Footer;
