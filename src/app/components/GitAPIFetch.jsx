"use client"
import React,{useState} from 'react'
import UsernameEntry from '@/app/components/UsernameEntry'
import UserDetails from './UserDetails'

export default function GitAPIFetch() {
    
    //function to fetch the api 
    //in which we are passing the argument ,which is username
    const [apiData,setApiData] = useState(null) 
    const fetchAPI=async(username)=>{
        try{
            const rawData = await fetch(`https://api.github.com/users/${username}`)
            const parsedData = await rawData.json()
            setApiData(parsedData)
            
        }catch(e){
            alert("network error")
        }
    }


  return (
    <>
      <UsernameEntry fetchAPI={fetchAPI}/>
      {apiData && <UserDetails name ={apiData.name}/> }
    </>
  )
}
