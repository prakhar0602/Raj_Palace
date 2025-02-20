import React, { useEffect } from 'react'
import { setLoading } from '../../Redux/CommonVariables'
import { useDispatch } from 'react-redux'

const ListnotDefined = () => {
  const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(setLoading(true));
      console.log('entered')
        dispatch(setLoading(false))
      },[])
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF8E5]">
    <p className="text-2xl text-gray-700 font-semibold">
      Page not Available
    </p>
  </div>
  )
}

export default ListnotDefined