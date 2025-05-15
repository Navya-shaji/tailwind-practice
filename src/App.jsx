
import { useState } from 'react'
import './App.css'
import { useRef } from 'react'
import { useEffect } from 'react'

function App() {
  const inputRef=useRef({})
  const [otp,setOtp]=useState({
    first:"",
    second:"",
    third:"",
    fourth:"",
    fifth:"",
    sixth:""
  })
  

  useEffect(()=>{
    inputRef.current[0].focus()
  },[])

  const handleChange=(event,index)=>{
   const {name,value}=event.target
   if (/[a-z]/i.test(value)) return;
   
   if (value.length > 1) return;
   setOtp((prev)=>({
    ...prev,
    [name]:value.slice(-1)
   }));

   if(value && index<5){
    inputRef.current[index+1].focus()
   }else if(!value && index>0){
    inputRef.current[index-1].focus()
   }
  }

  function renderInput(){
   return Object.keys(otp).map((keys,index)=>(
    <input key={index} value={otp[keys]} ref={(element)=>(inputRef.current[index]=element)} type="text" name={keys} className='w-10 h-13 rounded-md mr-2 border border-solid border-[black] bg-white text-center text-xl text-black' onChange={(event)=>handleChange(event,index)} />

   ))
    
  }
  return (
    <>
     <form action="">
      <h3 className='text-2xl  mb-5 font-serif'>Fill The OTP Form</h3>
      <div>
   {renderInput()}


      </div>

      <button className="mt-4 bg-blue-950 text-amber-50 rounded-sm  w-18 h-6 hover:bg-[#6875]">Submit</button>
     </form>
    </>
  )
}

export default App
