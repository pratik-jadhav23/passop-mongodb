import React from 'react'

const ButtonWithImage = (props) => {
  return (
    <>
       <button className='m-1 p-1 rounded-md border-1 border-purple-500 hover:cursor-pointer   flex justify-center items-center gap-1'>
       <img src={props.imgSrc} alt="google.svg" />
        {props.text}
       </button>
    </>
  )
}

export default ButtonWithImage