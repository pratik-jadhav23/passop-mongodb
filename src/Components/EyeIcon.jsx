import React from 'react'

const EyeIcon = () => {
    const showPassword = () => {
        if (eyeIconRef.current.src.includes("icons/eyeClose.svg")) {
            eyeIconRef.current.src = "icons/eyeOpen.svg"
            passwordRef.current.type = "text"
        }
        else {
            eyeIconRef.current.src = "icons/eyeClose.svg"
            passwordRef.current.type = "password"
        }
    }
    return (
        <>
            <span onClick={showPassword} className='pl-1 pr-1 absolute right-0 hover:cursor-pointer'>
                <img ref={eyeIconRef} src="icons/eyeClose.svg" alt="" />
            </span>
        </>
    )
}

export default EyeIcon
