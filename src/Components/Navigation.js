import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../jdlogosvg.svg'    
import { RequestType, fromLatLng, geocode, setKey, setLanguage, setRegion } from 'react-geocode'

export const Navigation = () => {
    // Hook Area 
    const [ geoAddress,setGeoAddress ] = useState()

    // Method Area 
    const Logout=()=>{
        window.localStorage.removeItem('Token')
        window.location.href = '/login'
    }

    const GetGeoLocation=()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showPosition)
        }else{
            alert('Please Allow to located your location')
        }
    }
    const showPosition=(Position)=>{
        setKey(your api);
        setLanguage("en");
        setRegion("es");
        window.localStorage.setItem('latitude',Position.coords.latitude)
        window.localStorage.setItem('longitude',Position.coords.longitude)
        geocode(RequestType.LATLNG, `${Position.coords.latitude},${Position.coords.longitude}`)
            .then(({ results }) => {
                const address = results[0].formatted_address;
                setGeoAddress(address);
                window.localStorage.setItem('Geo Location', address)
            })
            .catch(console.error);


    }

    // Return Area 

  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid ">
                <nav className="navbar bg-body-tertiary">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="Justdial" width={102} height={24} />
                        </Link>
                    </div>
                    
                </nav>
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            window.localStorage.getItem('Token') == null &&
                            <>
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                            </li>
                            </>
                            
                        }
                        {
                            window.localStorage.getItem('Token') !== null &&
                            <li className="nav-item">
                            <Link className="nav-link" onClick={()=>{Logout()}}>Logout</Link>
                            </li>
                        }
                        <button className='text-bg-primary ms-5 rounded ' onClick={()=>{GetGeoLocation()}}>Get Geo Location</button>
                        <li className="nav-item ms-2">
                            <input type="text" readOnly disabled className="form-control" placeholder="Your Location"  defaultValue={geoAddress} />
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="button">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    </>
  )
}
