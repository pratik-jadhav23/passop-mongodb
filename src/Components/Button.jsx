import React from 'react'

const Button = (props) => {
  return (
    <>
      <button className='m-1 p-1 rounded-md border-1 border-purple-500 hover:cursor-pointer bg-purple-500 text-white '>{props.text}
      </button>
    </>
  )
}

export default Button
