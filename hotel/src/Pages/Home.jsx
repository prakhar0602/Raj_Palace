import React from 'react';
import Image_Grid from '../Components/Image_Grid';
import Booking_Form from '../Components/Booking_Form';
import Speciality from '../Components/Speciality';
import f1 from '../assets/f1.jpg'
import f2 from '../assets/f2.jpg'
import f3 from '../assets/f3.jpg'
import f5 from '../assets/f5.jpg'
import f6 from '../assets/f6.jpg'

const Home = () => {
  // Array of specialties
  const specialties = [
    {
      heading: "Museum(s) & Rooms with Original Historical Artefacts",
      imageSrc: f1,
      description:
        "The guest visiting the subcontinent are captivated by stories of India's kings and princes known as 'maharajas'. These immensely powerful feudal rulers resided in vast palaces throughout India in which every conceivable luxury was at their disposal. The grandeur and mystique of one of the Royal Families of Rajasthan can be seen and experienced today at 'The Raj Palace'. The hotel houses 50 luxurious rooms and suites.",
    },
    {
      heading: "GLOBAL GOURMET MEALS 'A CULINARY DELIGHT'",
      imageSrc: f2,
      description:
      "The Swapna Mahal serves A-la- carte, buffet and highly recommended thali – The Maharani Thali (queen's platter), which embraces not just Rajasthani specialties but also dishes from the Royal Principalities of different parts of the world.. From a scroll, the very attentive and always smiling Server would read out a royal Farrman (edict) to initiate the meal for the evening. The Restaurant has been richly decorated with real gold leaf work, a majestic rare crystal chandelier , rich palace furniture and a crockery museum housing centuries old collections. The Kebab Shop live bar be Que restaurant serving the most authentic Mughalai cuisine dashed with rich Indian spices is a food lovers delight, The Royal Lounge (Coffee Shop) is a privileged place, it offers a variety of international and Indian cuisines. "    
    },
    {
      heading: "ACTIVITIES & FUN THINGS TO DO",
      imageSrc: f3,
      description:
        "Jaipur's temperate climate inspires outdoor pursuits, whether relaxing or energetic. The Raj Palace offers a choice of various activities and a superb range of on-site facilities supplemented by additional off-site options. Surrender to many diverse yet discreet options. From marionette shows , gala events or just relaxing at the pool, there's something to suit everyone."     
    },
    {
      heading: "EXPERIENCE THE MOST BEAUTIFUL ROYAL WEDDINGS AT THE RAJ PALACE",
      imageSrc: f1,
      description:
        "Selecting floral arrangements, creating atmosphere through music, preparing a celebratory meal symbolizing abundance and most importantly, choosing the perfect venue. In the weddiing section of our site, you will discover valuable information regarding our facilities, wedding packages, ceremonies and our fabulous essential luxuries guaranteed to enhance your celebration."
    },
    {
      heading: "MULTIPLE VENUES FOR YOUR EVENTS AND BUSINESS MEETINGS",
      imageSrc: f5,
      description:
        "At The Raj Palace Hotel, you get numerous combinations and possibilities of space and seating arrangements, accessibility to high quality audio visual equipments, creative menu options and of course themes which make business at The Raj Palace not usual but extraordinary, especially for hosting conferences, meetings, conventions and corporate events."   
    },
    {
      heading: "LIFE IS TOO SHORT TO BE BORED. COME ENJOY THE FESTIVITIES",
      imageSrc:f6,
      description:"Event planned at the Raj Palace are the customised events designed as per the requirements of the individuals and Group travelers. These events starts with the Royal Welcome followed by meals and Folk performances and finally royal see off is given These can be designed not just for the staying guests but also for the non-resident guests. Our coverage is fairly extensive including categories such as Parties, Concerts, Plays, Gala, Outdoors, Bollywood shows, Sufi to name a few Many Thanks"
    },
  ];

  return (
    <div className="bg-[#F5E6D3] text-[#2C3E50] min-h-screen">
      {/* Hero Section */}
      <Image_Grid />

      {/* Booking Form */}
      <Booking_Form />

      {/* About Section */}
      <div className="container mx-auto px-4 lg:px-8 mt-16 lg:mt-24">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="p-8 lg:p-16 text-center">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-[#4A0E4E] mb-6 tracking-wide">
              Experience The Royal Living with The Raj Palace
            </h1>
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-base lg:text-lg xl:text-xl text-[#6A4C93] font-medium leading-relaxed">
                Located in the heart of Jaipur, The Raj Palace is an imposing palace hotel that will leave you spellbound. Originally called 'The Chaumoo Haveli', this architectural marvel was built in 1727 and named after the last ruler of Chaumoo, Thakur Raj Singh.
              </p>
              <p className="text-base lg:text-lg xl:text-xl text-[#6A4C93] font-medium leading-relaxed">
                Transformed into a luxurious palace hotel by Princess Jayendra Kumari in 1996, it retains its historical splendor with artifacts from a bygone era. Recognized by Conde Nast Traveler and Travel & Leisure, The Raj Palace offers unparalleled extravagance.
              </p>
              <p className="text-base lg:text-lg xl:text-xl text-[#6A4C93] font-medium leading-relaxed">
                Upon arrival, guests are warmly welcomed with marigold garlands, soulful music, and a refreshing welcome drink. Relax on our exquisite jhoola (swing seating) in the courtyard and immerse yourself in a royal experience like no other.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scrollable Specialities List */}
      <div className="container mx-auto px-4 lg:px-8 mt-16 pb-16">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-[#4A0E4E] mb-8 text-center">
          Our Specialities
        </h2>
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-6 pb-4">
            {specialties.map((specialty, index) => (
              <div 
                key={index} 
                className="w-[45%] flex-shrink-0 transform transition-transform duration-300 hover:scale-105"
              >
                <Speciality
                  heading={specialty.heading}
                  imageSrc={specialty.imageSrc}
                  description={specialty.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;