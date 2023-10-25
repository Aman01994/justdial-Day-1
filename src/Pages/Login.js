import React, { useState } from 'react'
//1. import Area
export const Login = () => {
  //2.1 Hooks Area 
  const [email,setEmail] = useState()
  const [pass,setPass] = useState()
  //2.2 Method Area 
  function loginSubmit(){
    fetch("http://localhost:1337/api/auth/local",{method: "POST",
    headers: {
      "accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
                          {
                            "identifier": email,
                            "password": pass
                          }
                        )
  }).then((res)=>{
    return res.json()
  }).then((data)=>{
    console.log(data.data)
  }).catch((err)=>{
    console.log(err)
  }).finally(()=>{
    alert('finnally Login done')
  })
  }
  //2.3 Return Area 
  return (<>
      <form className='container bg-secondary rounded p-3 w-50 pt-5 pb-5'>
        <h1 className='text-center '>Login</h1>
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1"  aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>setPass(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={()=>{loginSubmit()}}>Submit</button>
      </form>
    </>)
}
// 3.export 