import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../jdlogosvg.svg'    

export const Navigation = () => {
    // Hook Area 


    // Method Area 
    const Logout=()=>{
        window.localStorage.removeItem('Token')
        window.location.href = '/login'
    }

    // Return Area 

  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid ">
                <nav className="navbar bg-body-tertiary">
                    <div className="container">
                        <Link className="navbar-brand" to="#">
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
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    </>
  )
}
