import Navbar from "./components/Navbar"
import Form from "./components/Form"
import DataContent from "./components/DataContent"
import { useState } from "react"

function App() {

  // check local storage has passwords or not 
  if (localStorage.passwords == undefined) {

    // setting passwords in loca; storage as emty array
    localStorage.setItem("passwords", "[]")
  }

  // fetching passwords from local storage by parsing it 
  const [data, setData] = useState(JSON.parse(localStorage.getItem("passwords")))

  // input form object
  const [form, setForm] = useState({ mail: "", password: "" })

  // setting changed data in passwords
  localStorage.setItem("passwords", JSON.stringify(data))




  return (
    <>
      <Navbar />
      <Form data={data} setData={setData} form={form} setForm={setForm} />
      <DataContent data={data} setData={setData} form={form} setForm={setForm} />

    </>
  )
}

export default App
