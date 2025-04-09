import React from 'react'

const ContactForm = () => {
  return (
    <>
  <div className='mt-5'>
    <p className='font-bold text-center text-3xl'>
        Contact Us

    </p>
    <form className='w-[50%]max-auto'>
        <label>
            Name
        </label>
        <input type='text' className='w-[100%] border border-gray-950 p-1'/>
        <label>
            Email
        </label>
        <input type='email' className='w-[100%] border border-gray-950 p-1'/>

        <label>
            Message
        </label>
        <textarea className='w-[100%] border   border-gray-950  p-1'/>

        <input type='submit' className='bg-gray-800 text-white px-3 py-1 '/>
        </form>

  </div>
      
    </>
  )
}

export default ContactForm
