import { Link, Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Dining from "./Pages/Dining";
import Awards from "./Pages/Awards";
import ContactUs from "./Pages/ContactUs";
import WorkingForUs from "./Pages/WorkingForUs";
import Room from "./Pages/Room/Room";
import NotDefined from "./Pages/NotDefined";
import List from "./Pages/List/List";
import LoadingPage from "./Pages/LoadingPage";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "./Redux/CommonVariables";
import Navbar_Component from "./Components/Navbar/Navbar_Component";
import History from "./Pages/History/History";
import Accomodation from "./Pages/Accomodation";
import Meetings_and_Buisness from "./Pages/Meetings_and_Buisness";
import Wedding from "./Pages/Wedding/Wedding";
import PageTransition from "./Components/PageTransition";


const ExternalRedirect = () => {
  useEffect(() => {
    window.location.href =
      'https://be.synxis.com/?adult=1&arrive=2025-01-26&chain=22402&child=0&currency=USD&depart=2025-01-27&hotel=78522&level=hotel&locale=en-US&productcurrency=USD&rooms=1&src=24C';
  }, []);

  return <div className="w-screen h-screen flex justify-center items-center">Redirecting...</div>; // Optional loading message
};



function App() {
  const dispatch = useDispatch()
  const loading = useSelector((state)=>state.variables.loading)
  useEffect(() => {
    const allMedia = document.querySelectorAll('img'); // Select images and videos

    if (allMedia.length === 0) {
      dispatch(setLoading(false));
      return;
    }

    let mediaLoaded = 0;

    const handleMediaLoad = () => {
      mediaLoaded++;
      console.log("Media Loaded",allMedia.length)
      if (mediaLoaded == allMedia.length) {
        dispatch(setLoading(false));
      }
    };
    
    allMedia.forEach(mediaElement => {
        if (mediaElement.complete) { // Check if already loaded (for images)
        handleMediaLoad();
      } else if (mediaElement.readyState === 4) { //check if video is loaded
        handleMediaLoad();
      }
      else {
          mediaElement.onload = handleMediaLoad;
          mediaElement.onerror = handleMediaLoad; // Handle errors for both
        }
      });
  }, []);

  return (
      <div className="text-black max-w-full w-full min-h-screen h-fit bg-[#fff]">
        {
          loading?(
            <LoadingPage />
          ):(<span></span>)
        }
        <Navbar_Component />
        <Routes>
          <Route path='/' element={<Home  />} />
          <Route path='/history' element={<History/>} />
          <Route path='/room/:id' element={<Room />} />
          <Route path='/list' element={<List />} />
          <Route path='/dining' element={<Dining />} />
          <Route path='/awards' element={<Awards />} />
          <Route path='/iv_ov' element={<Meetings_and_Buisness />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/workforUs' element={<WorkingForUs />} />
          <Route path='/notDefined' element={<NotDefined />} />
          <Route path='/accomodation' element={<Accomodation />} />
          <Route path='/loading' element={<LoadingPage />} />
          <Route path='/wedding' element={<Wedding />} />
          <Route path='/booking' element={<ExternalRedirect/>} />
        </Routes>
      <Footer />
      </div>
      )
}

export default App;
