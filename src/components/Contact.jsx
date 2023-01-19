import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#000000] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/34aeda76-21f3-4679-9c69-f511781c6dcc" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold text-gray-200'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below to connect with me</p>
            </div>
            <input className='bg-[#ffffff] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ffffff]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ffffff] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-gray-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect</button>
        </form>
    </div>
  )
}

export default Contact