import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RoomSelected from './RoomSelected';
import RoomNotSelected from './RoomNotSelected';
import { useParams } from 'react-router-dom';
import { setLoading } from '../../Redux/CommonVariables';
import { setRoomDetails } from '../../Redux/Room';

const Room = () => {
  const roomS= useSelector((state) => state.room)
  const {id} = useParams();
  let dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setLoading(false))
    dispatch(setRoomDetails(id));
    console.log(roomS)
    },[id])
  
  return (
    roomS?(<RoomSelected />) : (<RoomNotSelected />)
  );
};

export default Room;
