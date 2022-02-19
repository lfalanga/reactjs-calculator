import React from 'react';

function Buttons(props) {
  // console.log('PROPS:', props);

  const divStyle = {
      display: 'block',
  };

  const clearStyle = {
      background: '#999999'
    };
  const operatorStyle = {
      background: '#666666'
    };
  const equalsStyle = {
      background: '#999999',
      position: 'absolute',
      height: 130,
      bottom: 5
    };

  return (
    <div style={ divStyle }>
        <button 
            className='jumbo' 
            id='clear' 
            onClick={ props.initialize } 
            style={ clearStyle } 
            value='AC'
        >
            AC
        </button>
        <button 
            id='divide' 
            onClick={ props.operators } 
            style={ operatorStyle } 
            value='/'
        >
            /
        </button>
        <button 
            id='multiply' 
            onClick={ props.operators } 
            style={ operatorStyle } 
            value='x'
        >
            x
        </button>
        <button id='seven' value='7' onClick={ props.numbers}>
          7
        </button>
        <button id='eight' value='8' onClick={ props.numbers}>
          8
        </button>
        <button id='nine' value='9' onClick={ props.numbers}>
          9
        </button>
        <button 
            id='subtract' 
            onClick={ props.operators } 
            style={ operatorStyle } 
            value='‑'
        >
            ‑
        </button>
        <button id='four' value='4' onClick={ props.numbers}>
          4
        </button>
        <button id='five' value='5' onClick={ props.numbers}>
          5
        </button>
        <button id='six' value='6' onClick={ props.numbers}>
          6
        </button>
        <button 
            id='add' 
            onClick={ props.operators } 
            style={ operatorStyle } 
            value='+'
        >
            +
        </button>
        <button id='one' value='1' onClick={ props.numbers}>
            1
        </button>
        <button id='two' value='2' onClick={ props.numbers}>
            2
        </button>
        <button id='three' value='3' onClick={ props.numbers}>
            3
        </button>
        <button 
            className='jumbo' 
            id='zero' 
            onClick={ props.numbers} 
            value='0'
        >
            0
        </button>
        <button id='decimal' onClick={ props.decimal } value='.'>
            .
        </button>
        <button 
            id='equals' 
            onClick={ props.evaluate } 
            style={ equalsStyle } 
            value='='
        >
            =
        </button>
    </div>
  );
}

export default Buttons;
