import React from 'react'

export const BusinessRegister = () => {
  return (
    <> <form className='container bg-secondary rounded p-3 w-50 pt-5 pb-5'>
            <h1 className='text-center '>Register Your Business</h1>
            <div className="mb-3 ">
            <label htmlFor="exampleInputBusiness" className="form-label">Business Name</label>
            <input type="text" className="form-control" id="exampleInputBusiness" />
            </div>

            <label className="form-label" htmlFor="BusinessSelection"> Select Business Category</label>
            <select class="form-select" aria-label="Select Your Business Category" id='BusinessSelection'>
                <option selected >Select Business Category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <br></br>
            <label className="form-label" htmlFor="CitySelection"> Select Your City</label>
            <select class="form-select" aria-label="Select Your Business City Location" id='CitySelection'>
                <option selected >Select City</option>
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
