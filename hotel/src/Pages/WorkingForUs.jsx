import { useEffect } from "react";
import { setLoading } from "../Redux/CommonVariables";
import { useDispatch } from "react-redux";
import Fade from "../Components/Fade";
import LeftEnter from "../Components/LeftEnter";
import RightEnter from "../Components/RightEnter";

const WorkingForUs = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(setLoading(false))
    },[])
    return (
      <div className="min-h-screen font-sans pt-24 lg:pt-44">
        <Fade extraCss="bg-[#b2ceff] text-[#1A1A1A] text-center py-6 shadow-lg">
          <h1 className="text-3xl lg:text-5xl font-extrabold tracking-wide">Working for Us</h1>
        </Fade>
  
        <main className="py-16 px-8 space-y-10">
          <LeftEnter extraCss="bg-[#d5d5d5] max-w-4xl mx-auto p-6 rounded-lg shadow-md text-[#1A1A1A]">
            <p className="lg:text-lg text-md leading-relaxed">
              Welcome to The Raj Palace. Opened in 1997 as a deluxe hotel, The Raj Palace has
              constantly upgraded every year to be recognized as a Top Luxury Palace Hotel Brand in India today.
            </p>
            <p className="lg:text-lg text-md leading-relaxed mt-4">
              In our constant endeavor to cater to the needs of our most discerning and pampered guests, we are always
              working towards retaining the best talent and getting in new talent.
            </p>
            <p className="lg:text-lg text-md leading-relaxed mt-4">
              The Hotel has positions in all Departments for Internship programmes and Job positions. Talented people looking for making
              a career or who would feel like being associated with Luxury products can apply for a position.
            </p>
          </LeftEnter>
  
          <RightEnter extraCss="bg-[#d5d5d5] max-w-4xl mx-auto p-6 rounded-lg shadow-md text-[#1A1A1A]">
            <h2 className="lg:text-3xl text-2xl font-bold text-[#1A1A1A]">How to Apply</h2>
            <p className="lg:text-lg text-md mt-4 leading-relaxed">
              If you are interested in a particular position or internship, please send a complete application with a covering letter
              addressed to:
            </p>
            <address className="lg:text-lg text-md mt-4 leading-relaxed">
              <strong>The HR Manager</strong><br />
              The Raj Palace, Amber Road<br />
              Jaipur (302002) INDIA<br />
              Email:{" "}
              <a href="mailto:hr@rajpalace.in" className="text-[#1A73E8] hover:underline">
                hr@rajpalace.in
              </a>
              ,{" "}
              <a href="mailto:gm@rajpalace.in" className="text-[#1A73E8] hover:underline">
                gm@rajpalace.in
              </a>
              ,{" "}
              <a href="mailto:ceo@gkvgroup.com" className="text-[#1A73E8] hover:underline">
                ceo@gkvgroup.com
              </a>
              <br />
              Please attach your photograph with your CV.
            </address>
          </RightEnter>
        </main>
      </div>
    );
  };
  
  export default WorkingForUs;
  