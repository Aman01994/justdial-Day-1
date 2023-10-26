import swal from 'sweetalert'

export const Register = () => {
  // const [email,setEmail] = useState([])
  // const [userName,setUserName] = useState([])
  // const [pass,setPass] = useState()

  function submitRegister(){
    // let u = document.getElementById('InputUsername').value
    // let e = document.getElementById('InputEmail1').value
    // let p = document.getElementById('InputPassword1').value
    // console.log(u)
    // console.log(e)
    // console.log(p)

    fetch("http://localhost:1337/api/auth/local/register",{method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
                            "username": document.getElementById('InputUsername').value,
                            "email": document.getElementById('InputEmail1').value,
                            "password": document.getElementById('InputPassword1').value
                          })
  }).then((res)=>{
    return res.json()
  }).then((data)=>{
    if(data.data === null){
      swal(`Error, ${data.error.message}`)
      console.log(data.error.message)
    }else
    swal('Good Job!, User Created Successfully')
    console.log(data.data)
  }).catch((err)=>{

    console.log(err)
  }).finally(()=>{
    
  })
  }
  return (<>
    <form className='container bg-secondary rounded p-3 w-50 pt-5 pb-5'>
        <h1 className='text-center '>Register</h1>
        
        <div className="mb-3 ">
          <label htmlFor="InputUsername" className="form-label">Username</label>
          <input type="text" className="form-control" id="InputUsername"  aria-describedby="usernameHelp" />
          <div id="usernameHelp" className="form-text">Write your username here.</div>
        </div>

        <div className="mb-3 ">
          <label htmlFor="InputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="InputEmail1"  aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3 ">
          <label htmlFor="InputPassword1" className="form-label" >Password</label>
          <input type="password" className="form-control" id="InputPassword1" />
        </div>
        
        <button type="button" className="btn btn-primary" onClick={()=>{submitRegister()}} >Submit</button>
      </form>
  </>
  )
}
