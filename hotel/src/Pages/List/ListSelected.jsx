import React, { useEffect } from 'react'
import Speciality from '../../Components/Speciality';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../Redux/CommonVariables';
import { useNavigate } from 'react-router-dom';
import {setRoomDetails} from '../../Redux/Room'
import Fade from '../../Components/Fade';

const ListSelected = () => {   
    const room = useSelector((state)=>state.room) 
    const heading = useSelector((state)=>state.list.heading);
    const list = useSelector((state)=>state.list.list);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        dispatch(setLoading(false))
    },[list])

    function selectRoom(x) {
        console.log(x)
        console.log(room)
        dispatch(setLoading(true));
        dispatch(setRoomDetails(x));
        navigate('/room');
    }

    return (
        <div className="container mx-auto px-4 lg:pt-32 pt-20 pb-5">
            <Fade>
            <h2 className="lg:text-5xl text-3xl font-poppins-bold text-center text-[#001F54] tracking-wider mb-8">
                {heading}
            </h2>
            </Fade>
            <div className="h-fit flex justify-center">
                <Fade extraCss="grid grid-cols-1 md:grid-cols-2 lg:gap-20 gap-8   w-full max-w-6xl">
                    {Object.keys(list).map((specialty, index) => (
                        <button
                            onClick={() => selectRoom(specialty)}
                            key={index} 
                            className="w-full flex justify-center items-center transform transition-transform duration-300 hover:scale-105"
                        >
                            <Speciality
                                heading={specialty}
                                imageSrc={list[specialty]['img']}
                                description={list[specialty]['desc']}
                                height="lg:h-[400px] h-[250px]"
                            />
                        </button>
                    ))}
                </Fade>
            </div>
        </div>
    )
}

export default ListSelected