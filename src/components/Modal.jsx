import React from 'react'
import { ImCross } from "react-icons/im";

const Modal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed login-bg top-0 left-0 w-full h-full flex items-center justify-center ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div className="modal-container">
        <div className="backdrop-blur border-2 text-center p-5 h-80 w-[400px] rounded shadow-md">
          {/* Modal content, including login form */}
          <h2 className="text-xl font-semibold mt-5 mb-5 uppercase">Please Login Here!</h2>
          <form className='px-4'>
            {/* email */}
             <div className="mb-5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@domain.com"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>
            {/* password */}
            <div className="mb-5">
                <input
                  type="password"
                  name="emapasswordil"
                  id="password"
                  placeholder="type your password"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>

            {/* submit btn */}
            <button
                  className="rounded-md bg-orange-500 hover:bg-white hover:text-orange-500 mt-2 py-3 px-8 text-base font-semibold text-white outline-none"
                >
                  Login
            </button>
          </form>
          
          {/* Add your login form here */}
          <div className='login-close'>
            <button
              onClick={onClose}
              className="bg-orange-500 hover:bg-white text-white hover:text-orange-400 py-2 px-3 rounded-bl-xl items-center"
            >
              <ImCross />

            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal