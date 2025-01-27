import React, { useEffect } from 'react';
import { setLoading } from '../Redux/CommonVariables';
import { useDispatch } from 'react-redux';

const NotDefined = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(setLoading(false))
    },[])
  return (
    <div className="min-h-screen bg-[#FFF8E5] flex flex-col pt-40 pb-5">
      {/* Content Wrapper */}
      <div className="mx-10 mt-6 bg-white shadow-lg rounded-lg p-8">
        {/* Heading Section */}
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Page Not Defined
        </h2>

        {/* Description Section */}
        <p className="text-gray-600 leading-relaxed mt-4 text-center">
          We're sorry, but the page you're looking for hasn't been defined yet.
        </p>
      </div>
    </div>
  );
};

export default NotDefined;
