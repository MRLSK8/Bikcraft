import React from 'react';
import './quote.css';

export default function Quote(props) {
  return (
    <blockquote className='external-quote'>
      <p>
        {props.text}
      </p>
      <cite>WILLIAM MORRIS</cite>
    </blockquote>
  );
}
