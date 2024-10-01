import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Form = (props) => {

  const eyeRef = useRef()
  const passInput = useRef()

  useEffect(() => {

    props.form.password == "" ? eyeRef.current.style.display = "none" : eyeRef.current.style.display = "flex"


  }, [props.form.password])



  const handelSave = (e) => {

    if (props.form.mail == "" || props.form.password == "") {
      toast('Field is empty', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
        });
    } else {

      props.setData([...props.data, props.form])

      props.setForm({ mail: "", password: "" })

    }


  }

  const handelchange = (e) => {

    props.setForm({ ...props.form, [e.target.name]: e.target.value })


  }

  return (


    <section className="text-gray-600 body-font">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition=" Bounce"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Your Personal Password Manager.
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            This app is created in react and the full data is stored in mongoDB Database
          </p>
        </div>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative flex-grow w-full">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="mail"
              name="mail"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handelchange} value={props.form.mail}
            />


          </div>
          <div className="relative flex-grow w-full">
            <label htmlFor="password" className="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handelchange} value={props.form.password} ref={passInput}
            />
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handelSave}>
            Save
          </button>
          <button onClick={() => {
            if (eyeRef.current.src.includes("closeeye.png")) {

              eyeRef.current.src = "src/assets/openeye.png"
              passInput.current.type = "text"

            } else {
              eyeRef.current.src = "src/assets/closeeye.png"
              passInput.current.type = "password"
            }
          }}><img src="src\assets\closeeye.png" alt="view" ref={eyeRef} className='hidden' /></button>
        </div>
      </div>
    </section>

  )
}

export default Form
