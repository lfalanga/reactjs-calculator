import React from 'react';

function Formula(props) {
  // console.log('PROPS:', props);

  return (
    <div className='formulaScreen'>
        { props.formula }
    </div>
  );
}

export default Formula;
