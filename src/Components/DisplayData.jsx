import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const DisplayData = (props) => {
    // console.log('props in displaydata() = ', props.passwords);
    const passwordsArray = props.passwords
    // console.log('pa = ', passwordsArray);
    const handleCopy = (text) => {
        toast('Copied to Clipboard!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        navigator.clipboard.writeText(text)
    }

    const handleEdit = (e) => {
        // alert("Edit clicked")
    //   console.log('uuid == ', uuidv4());
    }
    

    return (

        <div className='pt-2'>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className='p-1'>
                <hr className='w-11/12 mx-auto border-purple-500' />
                <hr className='w-11/12 mx-auto  border-purple-500' />
            </div>

            <div className='flex justify-center p-1  overflow-x-auto'>
                {passwordsArray.length === 0 ? <div>No Data to Show!</div> :
                    <table className="table-fixed w-full border-1">
                        <thead>
                            <tr>
                                <th className='border-1 w-[40%]'>Website</th>
                                <th className='border-1'>Email</th>
                                <th className='border-1'>Password</th>
                                <th className='border-1 w-[10%]'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {passwordsArray.map((item, index) => (
                                <tr key={index}>
                                    <td className='border-1'>
                                        <div className='flex items-center justify-between'>
                                            <span className='w-11/12'><a href={item.site} target="_blank" rel="noopener noreferrer" className="">{item.site}</a></span>
                                            <div className='hover:cursor-pointer' onClick={() => { handleCopy(item.site) }}><img src="icons/copy.svg" alt="copy.svg" /></div>
                                        </div>
                                    </td>
                                    <td className='border-1'>
                                        <div className='flex items-center justify-between'>
                                            <div className='w-[85%]'>{item.username}</div>
                                            <div className='hover:cursor-pointer' onClick={() => { handleCopy(item.username) }}><img src="icons/copy.svg" alt="copy.svg" /></div>
                                        </div>
                                    </td>
                                    <td className='border-1'>
                                        <div className='flex items-center justify-between'>
                                            <div className='w-[85%]'>{item.password}</div>
                                            <div className='hover:cursor-pointer' onClick={() => { handleCopy(item.password) }}><img src="icons/copy.svg" alt="copy.svg" /></div>
                                        </div>
                                    </td>
                                    <td className='border-1'>
                                        <div className='flex justify-around'>
                                            <div className='hover:cursor-pointer' onClick={() => { handleEdit() }}><img src="icons/edit.svg" alt="edit.svg" /></div>
                                            <div className='hover:cursor-pointer'><img src="icons/delete.svg" alt="delete.svg" /></div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
            </div>

        </div>
    )
}

export default DisplayData
