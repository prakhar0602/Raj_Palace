import React, { useEffect } from "react";
import iv from "../assets/Images/IndoorVenues/Baithak Hall.jpg";
import ov from "../assets/Images/Outdoor/Moti Chowk.jpg";
import Speciality from "../Components/Speciality";
import { setLoading } from "../Redux/CommonVariables";

import { content } from "../Components/Navbar/HoveredMenu_Data";
import { setList } from "../Redux/List";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Fade from "../Components/Fade";
import LeftEnter from "../Components/LeftEnter";
import RightEnter from "../Components/RightEnter";
import VenueTable from "../Components/VenueTable";

const Meetings_and_Buisness = () => {
  let navigate = useNavigate();
  let list = useSelector((state) => state.list);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true))
    const allMedia = document.querySelectorAll('img'); // Select images and videos

    if (allMedia.length === 0) {
      setTimeout(()=>dispatch(setLoading(false)),1000);
      return;
    }

    let mediaLoaded = 0;

    const handleMediaLoad = () => {
      mediaLoaded++;
      console.log("Media Loaded",allMedia.length)
      if (mediaLoaded == allMedia.length) {
        setTimeout(()=>dispatch(setLoading(false)),1000);
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

  function setlist(x) {
    dispatch(setLoading(true))
    navigate(`/list/${x}`);
  }
  function linkFunction(item) {
    if (
      item == "Reservation" ||
      window.location.pathname == content["mb"][item].link
    )
      return;
    dispatch(setLoading(true));
    if (content["mb"][item].function) setlist(content["mb"][item].function);
    else if (item == "Download MICE Brochure")
      window.open(content["mb"][item].link);
    else navigate(content["mb"][item].link);
  }

  return (
    <div className="flex flex-col w-full h-full justify-center items-center pt-32">
      <Fade>
        <h2 className="text-3xl lg:text-5xl font-garamond font-bold text-center text-[#001F54] tracking-wider">
          MEETINGS & BUISNESS
        </h2>
      </Fade>
      <div className="w-full flex flex-col lg:flex-row gap-10 justify-center items-center p-5">
        <LeftEnter extraCss="w-fit h-fit">
          <button onClick={() => linkFunction("Indoor Venues")}>
            <Speciality
              heading={"Indoor Venues"}
              imageSrc={iv}
              description={""}
              height="lg:h-[400px] h-[200px]"
            />
          </button>
        </LeftEnter>
        <RightEnter extraCss="w-fit h-fit">
          <button onClick={() => linkFunction("Outdoor Venues")}>
            <Speciality
              heading={"Outdoor Venues"}
              imageSrc={ov}
              description={""}
              height="lg:h-[400px] h-[200px]"
            />
          </button>
        </RightEnter>
      </div>
      <VenueTable />
    </div>
  );
};

export default Meetings_and_Buisness;
