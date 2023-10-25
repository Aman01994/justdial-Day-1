import React, { useState } from 'react'

export const Register = () => {
  const [email,setEmail] = useState([])
  const [userName,setUserName] = useState([])
  const [pass,setPass] = useState()

  function submitRegister(){
    fetch("http://localhost:1337/api/auth/local/register",{method:"POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
                            "username": userName,
                            "email": email,
                            "password": pass
                          })
  }).then((res)=>{
    return res.json()
  }).then((data)=>{
    console.log(data.data)
  }).catch((err)=>{
    console.log(err)
  }).finally(()=>{
    console.log('fetching Done')
  })
  }
  return (<>
    <form className='container bg-secondary rounded p-3 w-50 pt-5 pb-5'>
        <h1 className='text-center '>Register</h1>
        
        <div className="mb-3 ">
          <label htmlFor="InputUsername" className="form-label">Username</label>
          <input type="text" className="form-control" id="InputUsername"  aria-describedby="usernameHelp" onChange={(e)=>setUserName(e.target.value)} />
          <div id="usernameHelp" className="form-text">Write your username here.</div>
        </div>

        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1"  aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)}/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3 ">
          <label htmlFor="exampleInputPassword1" className="form-label" onChange={(e)=>{setPass(e.target)}}>Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        
        <button type="button" className="btn btn-primary" onClick={()=>{submitRegister()}} >Submit</button>
      </form>
  </>
  )
}
