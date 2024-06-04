import React,{ useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function github() {
//https://api.github.com/users/Harmanpawar15
const data = useLoaderData()
    
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>User Name :{data.name} 
    <p>
    Location:{data.location} 
    <br/>
    Repo:{data.public_repos}               
    </p>
   
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Harmanpawar15')
    return response.json()
}