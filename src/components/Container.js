import React, { useState } from 'react';
import Formula from './Formula';
import Output from './Output';
import Buttons from './Buttons';

function Container(props) {
  // console.log('PROPS:', props);
  
  const [currentValue, setCurrentValue] = useState('0');
  const [previousValue, setPreviousValue] = useState('0');
  const [formula, setFormula] = useState('');
  const [evaluated, setEvaluated] = useState(null);
  const isOperator = /[x/+‑]/;
  const endsWithOperator = /[x+‑/]$/;
  const endsWithNegativeSign = /\d[x/+‑]{1}‑$/;

  let aCodedBy = <a href="https://unfinited.work" target="_blank" rel='noreferrer'>unfinited.work</a>;

  function handleEvaluate() {
    if (!currentValue.includes('Limit')) {
      let expression = formula;
      while (endsWithOperator.test(expression)) {
        expression = expression.slice(0, -1);
      }
      expression = expression
        .replace(/x/g, '*')
        .replace(/‑/g, '-')
        .replace('--', '+0+0+0+0+0+0+');
      let answer = Math.round(1000000000000 * eval(expression)) / 1000000000000;
      setCurrentValue(answer.toString());
      setFormula(
        expression
          .replace(/\*/g, '⋅')
          .replace(/-/g, '‑')
          .replace('+0+0+0+0+0+0+', '‑-')
          .replace(/(x|\/|\+)‑/, '$1-')
          .replace(/^‑/, '-') +
        '=' +
        answer
      );
      setPreviousValue(answer);
      setEvaluated(true);
    }
  }

  function handleOperators(e) {
    if (!currentValue.includes('Limit')) {
      const value = e.target.value;
      setCurrentValue(value);
      setEvaluated(false);
      if (evaluated) {
        setFormula(previousValue + value);
      } else if (!endsWithOperator.test(formula)) {
        setPreviousValue(formula);
        setFormula(formula + value);
      } else if (!endsWithNegativeSign.test(formula)) {
        setFormula(
          (endsWithNegativeSign.test(formula + value) ? formula : previousValue) + value
        );
      } else if (value !== '‑') {
        setFormula(previousValue + value);
      }
    }
  }

  function handleNumbers(e) {
    if (!currentValue.includes('Limit')) {
      const value = e.target.value;
      setEvaluated(false);
      if (currentValue.length > 21) {
        maxDigitWarning();
      } else if (evaluated) {
        setCurrentValue(value);
        setFormula(value !== '0' ? value : '');
      } else {
        setCurrentValue(
          currentValue === '0' || isOperator.test(currentValue)
            ? value
            : currentValue + value
        );
        setFormula(
          currentValue === '0' && value === '0'
            ? formula === ''
              ? value
              : formula
            : /([^.0-9]0|^0)$/.test(formula)
            ? formula.slice(0, -1) + value
            : formula + value
        );
      }
    }
  }

  function handleDecimal() {
    if (evaluated === true) {
      setCurrentValue('0');
      setFormula('0.');
      setEvaluated(false);
    } else if (
      !currentValue.includes('.') && 
      !currentValue.includes('Limit')
    ) {
      setEvaluated(false);
      if (currentValue.length > 21) {
        maxDigitWarning();
      } else if (
        endsWithOperator.test(formula) ||
        (currentValue === '0' && formula === '')
      ) {
        setCurrentValue('0.');
        setFormula(formula + '0.');
      } else {
        setCurrentValue(formula.match(/(-?\d+\.?\d*)$/)[0] + '.');
        setFormula(formula + '.');
      }
    }
  }

  function maxDigitWarning() {
    setCurrentValue('Digit Limit Met');
    setPreviousValue(currentValue);
    setTimeout(() => setCurrentValue(previousValue), 1000);
  }

  function initialize() {
    setCurrentValue('0');
    setPreviousValue('0');
    setFormula('');
    setEvaluated(false);
  }

  return (
    <div id='container'>
        <div className="calculator">
            <Formula formula={ formula.replace(/x/g, '⋅') } />
            <Output currentValue={ currentValue } />
            <Buttons 
              numbers={ handleNumbers } 
              initialize={ initialize } 
              decimal={ handleDecimal }
              operators={ handleOperators } 
              evaluate={ handleEvaluate }
            />
        </div>
        <div className="author">
          Coded By { aCodedBy }
        </div>
    </div>
  );
}

export default Container;
