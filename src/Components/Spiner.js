import React from 'react'
import loading from './loading.gif';
export default function Spiner() {
  return (
    <div>
      <div className='text-center'>
        <img src={loading} alt="Loading"/>
      </div>
    </div>
  )
}

