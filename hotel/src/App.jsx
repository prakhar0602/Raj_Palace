import { Route, Routes } from "react-router-dom";
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

function App() {
  const dispatch = useDispatch()
  const loading = useSelector((state)=>state.variables.loading)
  useEffect(() => {
    dispatch(setLoading(false));
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
          <Route path='/room' element={<Room />} />
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
        </Routes>
      <Footer />
      </div>
      )
}

export default App;
