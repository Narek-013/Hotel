import React from 'react'
import { useLocation } from 'react-router-dom'
import  "./loading.css"
const Loading = () => {

  const location = useLocation()

  return (
    <div className={location.pathname.includes("hotels/room") ? "loader1" : 'loader'}></div>
  )
}

export default Loading
