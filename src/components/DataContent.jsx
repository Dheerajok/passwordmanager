import React, { useRef } from 'react'



const DataContent = (props) => {



  const handelDelete = (e, i) => {

    props.setData(props.data.filter((item, index) => {

      return index != i;

    }))
    
    
  }


  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-4 mx-auto">

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 flex-col">


          {
            props.data.map((item, index) => {


              return (<div className="p-2 sm:w-full w-full" key={index}>
                <div className="bg-gray-100 rounded flex p-4 h-full items-center flex-wrap justify-center">

                  <span className="title-font font-medium">
                    {item.mail}
                  </span>
                  <span className="title-font font-medium mx-7">
                    {"*".repeat(item.password.length)}
                  </span>

                



                </div>

                <span className="title-font font-medium mx-7 flex justify-center items-center">

                  <button onClick={(e) => {
                    
                    if(props.form.mail=="" && props.form.password==""){

                      props.setForm({ mail: props.data[index].mail, password: props.data[index].password });
                    handelDelete(e, index)

                    }else{
                      alert("Input field contain values")
                    }
                    
          

                  }}>
                    <span className="material-symbols-outlined text-green-600">edit</span>
                  </button>

                  <button onClick={(e) => {
                    handelDelete(e, index)
                  }}>
                    <span className="material-symbols-outlined text-red-600">
                      delete
                    </span>

                  </button>




                </span>

              </div>)
            })
          }




        </div>

      </div>
    </section>

  )
}

export default DataContent
