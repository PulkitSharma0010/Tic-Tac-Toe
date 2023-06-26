import React from 'react'
import "./sqr.css"

export default function Square({value, clicking}) {
  return (
    <>
      <button className='btn' onClick={clicking}>{value}</button>
    </>
  )
}
