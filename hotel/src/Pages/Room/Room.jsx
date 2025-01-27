import React from 'react';
import { useSelector } from 'react-redux';
import RoomSelected from './RoomSelected';
import RoomNotSelected from './RoomNotSelected';

const Room = () => {
  const roomS= useSelector((state) => state.room)
  
  return (
    roomS?(<RoomSelected />) : (<RoomNotSelected />)
  );
};

export default Room;
