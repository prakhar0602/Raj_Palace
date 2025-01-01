import { useDispatch } from "react-redux";
import { setLoading } from "../Redux/CommonVariables";
import { useEffect } from "react";
import Fade from "../Components/Fade";
import LeftEnter from "../Components/LeftEnter";
import RightEnter from "../Components/RightEnter";

const ContactUs = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(setLoading(false))
    },[])
    return (
      <div className=" min-h-screen font-sans pt-24 lg:pt-44">
        <Fade extraCss="bg-[#b2ceff] text-[#1A1A1A] text-center py-6 shadow-lg">
          <h1 className="text-4xl font-poppins-bold tracking-wide">Contact Us</h1>
        </Fade>
  
        <main className="flex flex-col md:flex-row justify-around items-start md:items-center py-16 px-8 space-y-10 md:space-y-0">
          <LeftEnter extraCss="max-w-lg text-[#1A1A1A] space-y-6 bg-[#d5d5d5] p-6 rounded-lg shadow-md font-poppins tracking-wider">
            <p className="lg:text-lg text-md leading-relaxed">If you need additional information not available on this site, or would like to speak with a member of the THE RAJ PALACE Public Relations team directly, you can contact us at:</p>
            <h2 className="lg:text-3xl text-2xl font-poppins-bold text-[#001F54]">The Raj Palace</h2>
            <p className="lg:text-lg text-md font-medium">
              Jorawer Singh Gate, Amer Road<br />
              Jaipur (302002) INDIA
            </p>
            <p className="lg:text-lg text-md font-medium">
              Tel: +91-141-2634077 / 2634078 / 2634011<br />
              Fax: +91-141-2630489
            </p>
            <p className="lg:text-lg text-md font-medium">
              Email: <a href="mailto:gkvhotel@gmail.com" className="text-[#1A73E8] hover:underline">gkvhotel@gmail.com</a>, <a href="mailto:gm@rajpalace.in" className="text-[#1A73E8] hover:underline">gm@rajpalace.in</a>
            </p>
          </LeftEnter>
  
          <RightEnter extraCss="w-full md:w-1/2 lg:h-96 h-64 rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.9871331866557!2d75.83173937505094!3d26.935622376633575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db13c7f9cabdb%3A0x2ef287607dbb0d88!2sThe%20Raj%20Palace%20by%20Small%20Luxury%20Hotels%20of%20The%20World!5e0!3m2!1sen!2sin!4v1734254128062!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </RightEnter>
        </main>
  
        <footer className="bg-[#b2ceff] text-[#1A1A1A] text-center py-6">
          <p className="text-sm font-medium">&copy; {new Date().getFullYear()} The Raj Palace. All rights reserved.</p>
        </footer>
      </div>
    );
  };
  
  export default ContactUs;
