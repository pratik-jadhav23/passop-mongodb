import React from 'react'

const SubmitButton = (props) => {
  return (
    <>
    <button type='submit' className='m-1 p-1 rounded-md border-1 border-purple-500 hover:cursor-pointer bg-purple-500 text-white '>{props.text}
    </button>
  </>
  )
}

export default SubmitButton