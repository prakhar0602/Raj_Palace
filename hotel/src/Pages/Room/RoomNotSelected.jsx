import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLoading } from '../../Redux/CommonVariables'

const RoomNotSelected = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
          dispatch(setLoading(true));
    dispatch(setLoading(false))
  },[])
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF8E5]">
        <p className="text-2xl text-gray-700 font-semibold">
          Selected Room not Found
        </p>
      </div>
  )
}

export default RoomNotSelected