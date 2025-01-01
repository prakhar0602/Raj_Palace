import React, { useEffect } from 'react'
import image1 from '../../assets/Images/History/2_1.jpg'
import image2 from '../../assets/Images/History/2_2.jpg'
import image3 from '../../assets/Images/History/2_3.jpg'
import { setLoading } from '../../Redux/CommonVariables'
import { useDispatch } from 'react-redux'
import image11 from '../../assets/Images/History/1_1.jpg'
import Image from '../../Components/Image';
import Fade from '../../Components/Fade'
import LeftEnter from '../../Components/LeftEnter'
import RightEnter from '../../Components/RightEnter'

const History = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setLoading(false))
  },[])
  return (
    <div className='flex flex-col w-full h-fit '>
      
        
      <div className=" min-h-screen  pt-16 lg:pt-44 pb-5 px-8">
        <Fade>
      <h2 className='
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                font-poppins-bold text-center 
                text-[#001F54]
                mb-8 sm:mb-10 md:mb-12 lg:mb-14 
                tracking-wide sm:tracking-wider
              '>
                The Raj Palace
              </h2>

              </Fade>
      <div className="max-w-4xl mx-auto space-y-12">
        {/* First Section */}
        <LeftEnter extraCss="bg-[#cacaca] shadow-2xl rounded-xl overflow-hidden flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <Image src={image11} height="h-full" width="w-full" />
          </div>
          <div className="md:w-1/2 p-8 ">
            <h2 className="text-3xl font-garamond text-[#4A3F35] mb-4 border-b-2 border-[#001F54] pb-2">
              The Raj Palace
            </h2>
            <p className="text-[#000] leading-relaxed font-poppins tracking-widest">
              The Raj Palace, a traditional palace with some of the modern structures, robs the town of its singular character and charm. This beautiful blend of Mughal and Periodic is the oldest mansion of Jaipur.
            </p>
          </div>
        </LeftEnter>

        {/* Second Section */}
        <RightEnter extraCss="bg-[#cacaca] shadow-2xl rounded-xl overflow-hidden flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2">
            <Image src={image2} height="h-full" width="w-full" />
            
          </div>
          <div className="md:w-1/2 p-8 ">
            <h2 className="text-3xl font-garamond text-[#4A3F35] mb-4 border-b-2 border-[#001F54] pb-2">
              Princess Jayendra Kumariji
            </h2>
            <p className="text-[#000] leading-relaxed font-poppins tracking-widest">
              In 1995, Princess Jayendra Kumari Ji decided to restore this luxurious palace into the finest luxury Palace hotel. The Royal family renovated the arched corridors, the residential quarters and its courtyards with small amplifications, Best services were added like Handicap access etc.
            </p>
          </div>
        </RightEnter>

        {/* Third Section */}
        <LeftEnter extraCss="bg-[#cacaca] shadow-2xl rounded-xl overflow-hidden flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <Image src={image3} height="h-full" width="w-full" />
          </div>
          <div className="md:w-1/2 p-8 ">
            <h2 className="text-3xl font-garamond text-[#4A3F35] mb-4 border-b-2 border-[#001F54] pb-2">
              The Royal Treasure
            </h2>
            <p className="text-[#000] leading-relaxed font-poppins tracking-widest">
              Museum suites were created which have the finest Royal antiques giving the property the honor of being first museum suite palace hotel of the world as the suites have their private museum. The specially designed frescoes deciphered with the finest mirror and hand-painted work and rare palace furniture. Large crystal chandeliers leave you adorned with an astonishing fantasy.
            </p>
          </div>
        </LeftEnter>
      </div>
    </div>
      
       
    <div className=" min-h-screen pt-14 lg:pt-44 pb-5 px-4 sm:px-6 lg:px-8">
       <Fade><h2 className='
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                font-poppins-bold text-center 
                text-[#001F54] 
                mb-8 sm:mb-10 md:mb-12 lg:mb-14 
                tracking-wide sm:tracking-wider
              '>
                Glimpse of Royal Life
              </h2>
              </Fade>
      <div className="max-w-4xl mx-auto space-y-12">
        <LeftEnter extraCss="bg-[#cacaca] shadow-xl rounded-xl overflow-hidden">
          <div className="md:flex">
            <div className=" p-8">
              <h2 className="text-3xl font-garamond text-[#4A3F35] mb-4 border-b-2 border-[#001F54] pb-2">
                Indian Courts
              </h2>
              <p className="text-[#000] leading-relaxed font-poppins tracking-widest">
              India was portrayed as the land populated with monsters, magicians and maharajas; its rulers were immeasurably powerful potentates enthroned in vast citadels surrounded by every conceivable luxury, but Indian courts were not accessible to the gaze of foreign observers and the royal continued to be mysterious and alluring. Indeed, this ‘exotic’ appeal of Indian palaces has proved to be long-lasting; it has survived the colonial experience and exists till today in the Royal residences as fortified citadels, complete with massive walls and defensive gateways, as well as armories, barracks and stables and all the culture and richness developed over centuries still lies here preserved in these palaces. </p>
            </div>
          </div>
        </LeftEnter>

        <RightEnter extraCss="bg-[#cacaca] shadow-xl rounded-xl overflow-hidden">
          <div className="md:flex md:flex-row-reverse">
            <div className="md:w-1/2">
              <Image
                src={image1}
                alt="Divine Rights of Royals"
                width="w-full" height="h-full "
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-garamond text-[#4A3F35] mb-4 border-b-2 border-[#001F54] pb-2">
                Divine Rights of Royals
              </h2>
              <p className="text-[#000] leading-relaxed font-poppins tracking-widest">
              The old belief that governed and design the “Divine power of Royals”.

Whether great or small, Indian monarchs never hesitated to style themselves as maharajas, or ‘great kings’, in the belief that their powers were cosmic rather than worldly. They were ‘great kings’ in terms of royal rituals and ceremonies, if not always in authority and influence. To demonstrate regal command over the elements of water and earth. Resplendent with heavenly motifs such as the globe of the sun, the royal throne and furniture was sumptuously ornamented with gold, silver, rubies and diamonds, the treasures of the earth. Sun motifs appear on the walls and ceilings of palace, suggesting the beneficial influence of the heavens. The gleaming sun with radiating spokes as dynastic emblem is placed over the top of the palace.
                </p>
            </div>
          </div>
        </RightEnter>

        <LeftEnter extraCss="bg-[#cacaca] shadow-xl rounded-xl overflow-hidden">
          <div className="md:flex">
            <div className="p-8">
              <h2 className="text-3xl font-garamond text-[#4A3F35] mb-4 border-b-2 border-[#001F54] pb-2">
                Forces of Nature
              </h2>
              <p className="text-[#000] leading-relaxed font-poppins tracking-widest">
              Parades of elephants, horses and other animals were further expressions of the king’s cosmic potency. Only kings were permitted to own elephants, and only kings could import horses and other exotic beasts. Lions and mythical beasts were particularly popular; so too were peacocks, as they were used as symbolic to be used to demonstrate command and power even over them.
                  </p>
            </div>
          </div>
        </LeftEnter>
      </div>
    </div>
    </div>
  )
}

export default History