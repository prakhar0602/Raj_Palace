import React, { useEffect } from "react";
import p1 from "../assets/Images/Dining/1.jpg";
import p2 from "../assets/Images/Dining/2.jpg";
import p3 from "../assets/Images/Dining/3.jpg";
import dining1 from "../assets/Images/Dining/tablebooking.png";
import afternoontea from "../assets/Images/Dining/afternoontea1.jpg";
import shikarbadi from "../assets/Images/Dining/shikarbadi.jpg";
import sm from "../assets/Images/Dining/Swapna Mahal.jpg";
import thali from "../assets/Images/Dining/Thali.png";
import kebab from "../assets/Images/Dining/The Kebab Shop.jpg";
import rl from "../assets/Images/Dining/The Royal Loungejpg.jpg";
import rd from "../assets/Images/Dining/rd.jpeg";
import Image_Grid from "../Components/Image_Grid";
import Speciality from "../Components/Speciality";
import { useDispatch } from "react-redux";
import { setLoading } from "../Redux/CommonVariables";
import Fade from "../Components/Fade";

const Dining = () => {
  const images = [p1, p2, p3];
  const dispatch = useDispatch()
  useEffect(()=>{
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

    },[])
  const dining = {
    "Swapna Mahal": {
      img: sm,
      desc: "Formal receptions remained the focal activity of courtly life during the British period. Hence the Thakur Sahib made The Swapna Mahal, imitating the great Houses of the British and French nobility. This hall is completely fitted out with European furniture, chandeliers, mirrors, curtains and a crockery collections. The Swapna Mahal means the palace of Dreams. The double height ceiling has breathtaking majestic crystal chandeliers and panels of silk curtains will take you to the dream world.",
    },
    "Royal thali": {
      img: thali,
      desc: "Thali is a big plate made of silver, gold or any other metal. In former times when royal families used to sit down for their meals, all the authentic dishes used to be presented in various katori’s in Thali. Dishes were created by Raj Hakim’s, royal family’s doctor who would keep in mind the health aspects of the food being served. These dishes were used to be cooked by specially trained Khaansama’s (chefs) who were trained to cook food for the Royal Family.",
    },
    "The Royal Lounge, Cafe": {
      img: rl,
      desc: "Formal receptions remained the focal activity of courtly life during the British period. Hence the Thakur Sahib made The Swapna Mahal, imitating the great Houses of the British and French nobility. This hall is completely fitted out with European furniture, chandeliers, mirrors, curtains and a crockery collections. The Swapna Mahal means the palace of Dreams. The double height ceiling has breathtaking majestic crystal chandeliers and panels of silk curtains will take you to the dream world.",
    },
    "Afternoon tea (Fountain Courtyard)": {
      img: afternoontea,
      desc: "Fresh scones, elegant sandwiches, clotted cream,cakes,preserves and jam, served with delicate,refreshing beverages. That’s the image the words ‘Afternoon Tea’ immediately brings to mind. Perfect for relaxing with friends and family, or as a pick-me-up in the middle of a hectic day. Today, this royal tradition is still honoured and upheld at The Raj Palace, where guests can enjoy a freshly baked spread along with a selection of exotic teas and coffee or a glass of bubbly chilled on ice.",
    },
    "Shikarbadi Bar": {
      img: shikarbadi,
      desc: "Thakur Sahib use to meet his officials for the small meetings and coffee breaks in the royal lounge. The Royal Lounge is fitted with Royal furniture, mirrors and Celebrity museum. It has beautiful arches, decorated in tones of pink, green sand gold, the floor is embellished with Italian marble. The Royal Lounge exudes an elegant Royal ambience and it offers an impeccable service with great attention to detail.",
    },
    "The Kebab Shop": {
      img: kebab,
      desc: "The Mughals have invaded again, but this time it’s royal chefs who have been invited all the way from Lucknow especially to pamper the taste buds of the royals. Imported wines and champagnes were served to the nobles and rich on formal occasions.",
    },
    "Royal Private Dining": {
      img: rd,
      desc: "Royal Private Dining is the special theme Dinner of The Raj Palace where the guest are accorded with a Gala Welcome.",
    },
  };

  return (
    <Fade extraCss="flex flex-col justify-center items-center">
      <Image_Grid images={images} />
      <img src={dining1} className="lg:h-[200px] h-[150px] lg:py-5 py-2" alt="" />
      <div className="container mx-auto px-4 py-5 h-fit">
        <h2 className="lg:text-5xl text-3xl font-poppins-bold text-center text-[#001F54] lg:mb-14 mb-5 tracking-wider">
          Dining
        </h2>
        <div className="h-fit flex justify-center ">
          <div className="flex lg:flex-row flex-col gap-14 w-full p-5 overflow-scroll justify-center md:justify-normal items-center">
            {Object.keys(dining).map((specialty, index) => (
              <div
                key={index}
                className="w-fit flex-shrink-0 cursor-default transform transition-transform duration-300 hover:scale-105"
              >
                <Speciality
                  heading={specialty}
                  imageSrc={dining[specialty]["img"]}
                  description={dining[specialty]["desc"]}
                  height="lg:h-[420px] h-[220px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Dining;
