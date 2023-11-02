import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'

export const SearchFilter = () => {
  return (<>

    <img src="https://images.jdmagicbox.com/delhi/n2/011pxx11.xx11.151017213110.g2n2/cbnr/00faacfa08dbb5b102fa0006744bcaaf.jpg" className="card-img-bottom" alt="..." />

    {/* Card Area Start  */}
    <div className='d-flex'>
    <div className="card col-sm-9 mt-5 border border-1" >
      <div className="row g-0 p-2">
        <div className="col-sm-3">
          <img src="https://content.jdmagicbox.com/comp/delhi/c8/011pxx11.xx11.220218184741.w2c8/catalogue/hotel-decent-vikaspuri-delhi-hotels-1csk768t3v.jpg" className="img-fluid rounded-start p-2 rounded img-fuild" alt="..." />
        </div>
        <div className="col-sm-8">
          <div className="card-body">
            <h5 className="card-title w-bold ">Paradise Living</h5>
            <p className="card-text"><span className="badge text-bg-success p-1">4.4</span> <span> 
              <FontAwesomeIcon className='text-warning' icon={faStar} />
              <FontAwesomeIcon className='text-warning' icon={faStar} />
              <FontAwesomeIcon className='text-warning' icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              </span> <span className='text-body-secondary'>24 Rating</span></p>
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            <button className='btn btn-success sm'>Show Number</button>
          </div>
        </div>
      </div>
    </div>
    {/* Card Area End  */}
    <div className='col-sm-3'>
      <div className="list-group mt-5 ms-2">
        <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small>3 days ago</small>
          </div>
          <p className="mb-1">Some placeholder content in a paragraph.</p>
          <small>And some small print.</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small className="text-body-secondary">3 days ago</small>
          </div>
          <p className="mb-1">Some placeholder content in a paragraph.</p>
          <small className="text-body-secondary">And some muted small print.</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small className="text-body-secondary">3 days ago</small>
          </div>
          <p className="mb-1">Some placeholder content in a paragraph.</p>
          <small className="text-body-secondary">And some muted small print.</small>
        </a>
      </div>
      </div>
      </div>
    </>
  )
}
