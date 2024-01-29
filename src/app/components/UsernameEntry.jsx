"use client"
import React, { useState } from 'react'
import styled from 'styled-components';
export default function UsernameEntry({fetchAPI}) {
  const [input,setInput] = useState();
  const passToParent =(e)=>{
    e.preventDefault();
    fetchAPI(input)
  }

  
  return (
    <>
      <div className='main-container'>
        <div>
          <h1>GITHUB USER FINDER</h1>
        </div>
        <form onSubmit={passToParent}>
          <input type="text" placeholder="Enter your github username..." name="github username" value={input} onChange={(e)=>(setInput(e.target.value))} />
          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  )
}
