import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ListSelected from './ListSelected';
import ListnotDefined from './ListnotDefined';
import { useParams } from 'react-router-dom';
import { setList } from '../../Redux/List';
import { setLoading } from '../../Redux/CommonVariables';

const List = () => {   
    const {id} = useParams();
    const isLoaded=useSelector((state)=>state.list);

    let dispatch = useDispatch()
    useEffect(()=>{
      dispatch(setList(id));
    },[id])

  return isLoaded && isLoaded.list?<ListSelected />:<ListnotDefined/>
}

export default List