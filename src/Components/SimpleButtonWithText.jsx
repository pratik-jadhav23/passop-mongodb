import React from 'react'

const SimpleButtonWithText = (props) => {
  return (
    <>
     <button onClick={props.FunctionName} className='text-purple-500 hover:cursor-pointer'>{props.text}</button> 
    </>
  )
}

export default SimpleButtonWithText
