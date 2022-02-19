import React from 'react';

function Output(props) {
  // console.log('PROPS:', props);

  return (
    <div className='outputScreen' id='display'>
        { props.currentValue }
    </div>
  );
}

export default Output;