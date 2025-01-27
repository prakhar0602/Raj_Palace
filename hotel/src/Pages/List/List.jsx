import React from 'react'
import { useSelector } from 'react-redux';
import ListSelected from './ListSelected';
import ListnotDefined from './ListnotDefined';

const List = () => {   
    
    const isLoaded=useSelector((state)=>state.list);


  return isLoaded?<ListSelected />:<ListnotDefined />
}

export default List