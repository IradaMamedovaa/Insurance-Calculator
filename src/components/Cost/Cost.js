import React from 'react';
import './style.scss'

const Cost = ({cost}) => {
  return (
    <div className='cost'>
        <p>Your cost of insurance: €{cost}</p>
    </div>
  )
}

export default Cost