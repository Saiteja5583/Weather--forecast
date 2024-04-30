import React from 'react'
import Search from './search'

const Header = ({onValue}) => {
    console.log(onValue)
  return (
    <div className='container-fluid text-center py-3' id='g1'>
     <div className="row">
        <div className="col col-sm col-md-3 col-lg-3 "></div>
        <div className="col col-sm-12 col-md-6 col-lg-6"><Search  onValue={onValue}/></div>
        <div className="col  col-sm col-md-3 col-lg-3"></div>
     </div>
    </div>
  )
}

export default Header
