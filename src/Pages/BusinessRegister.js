import React, { useEffect, useState } from 'react'

export const BusinessRegister = () => {
  // Hooks Area 
  const [businessCat, setBusinessCat] = useState([])
  const [city,setCity] = useState([])
  // Method Area 
  useEffect(()=>{
    // Business Category Fetch 
    fetch("http://localhost:1337/api/business-categories")
    .then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data.data)
      setBusinessCat(data.data)
    }).catch((err)=>{
      console.log(err)
    })

    fetch("http://localhost:1337/api/cities")
    .then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data.data)
      setCity(data.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])


  // Return Area 
  return (
    <> <form className='container bg-secondary rounded p-3 w-50 pt-5 pb-5'>
            <h1 className='text-center '>Register Your Business</h1>
            <div className="mb-3 ">
            <label htmlFor="exampleInputBusiness" className="form-label">Business Name</label>
            <input type="text" className="form-control" id="exampleInputBusiness" />
            </div>

            <label className="form-label" htmlFor="BusinessSelection">Business Category</label>
            <select class="form-select" aria-label="Select Your Business Category" id='BusinessSelection'>
                <option defaultValue >Select Business Category</option>
                {
                  businessCat.map((cv,index,arr)=>{
                    return <option  key={index} value={cv.id}>{cv.attributes.name}</option>
                  })
                }
            </select>
            <br></br>
            <label className="form-label" htmlFor="CitySelection"> Select Your City</label>
            <select class="form-select" aria-label="Select Your Business City Location" id='CitySelection'>
                <option defaultValue >Select City</option>
                {
                  city.map((cv,index,arr)=>{
                    return <option key={index} value={cv.id}>{cv.attributes.name}</option>
                  })
                }
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <br/>
            <button type="button" className="btn btn-primary" onClick={()=>{}}>Submit Business</button>
        </form>
  </>
  )
}
