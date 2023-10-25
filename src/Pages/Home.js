import React, { useEffect, useState } from 'react'

export const Home = () => {
  const [busData,setBusdata] = useState([])
  useEffect(()=>{
    fetch("http://localhost:1337/api/business-categories?populate=*")
    .then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data.data)
      setBusdata(data.data)
    }).catch((err)=>{
      console.log(err)
    }).finally(()=>{
      console.log('Finally image fetch done')
    })
  },[])
  return (<>
      <ul className='nav'>
       {
        busData.map((cv,index,arr)=>{
          return <li key={index} className='me-3 mt-5'>
                    <a href='#' className='business-category'>
                      <img src={`http://localhost:1337${cv.attributes.image.data.attributes.url}`}/>
                      {cv.attributes.name}
                    </a>
                  </li>
        })
         
       }
      </ul>
    </>
  )
}

