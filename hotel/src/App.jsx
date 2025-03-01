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
import Navbar_Component from "./Components/Navbar/Navbar_Component";
import History from "./Pages/History/History";
import Accomodation from "./Pages/Accomodation";
import Meetings_and_Buisness from "./Pages/Meetings_and_Buisness";
import Wedding from "./Pages/Wedding/Wedding";
import RoomNotSelected from "./Pages/Room/RoomNotSelected";
import ListnotDefined from "./Pages/List/ListnotDefined";
import PrivacyPolicy from "./Pages/PrivacyPolicy";


const ExternalRedirect = () => {
  useEffect(() => {
    window.location.href =
      'https://be.synxis.com/?adult=1&arrive=2025-01-26&chain=22402&child=0&currency=USD&depart=2025-01-27&hotel=78522&level=hotel&locale=en-US&productcurrency=USD&rooms=1&src=24C';
  }, []);

  return <div className="w-screen h-screen flex justify-center items-center">Redirecting...</div>; // Optional loading message
};



function App() {
  const loading = useSelector((state)=>state.variables.loading)
  useEffect(() => {
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
          <Route path='/room' element={<RoomNotSelected />} />
          <Route path='/list/:id' element={<List />} />
          <Route path='/list' element={<ListnotDefined />} />
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
          <Route path='/privacyPolicy' element={<PrivacyPolicy/>} />
        </Routes>
      <Footer />
      </div>
      )
}

export default App;
