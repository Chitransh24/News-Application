import React from 'react'

export default function ButtonCounter(props) {
  let {Operation , method } = props;
  return (
    <div className='container'>
      <button onClick={method} >
      {Operation}
      </button>
    </div>
  )
}
