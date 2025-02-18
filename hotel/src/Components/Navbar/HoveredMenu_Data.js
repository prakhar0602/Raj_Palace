import heritage from "../../assets/Images/Misc/HeritageRoom.jpg";
import premier from "../../assets/Images/Misc/premierRooms.jpeg";
import historical from "../../assets/Images/Misc/HistoricalRoom.jpg";
import prestige from "../../assets/Images/Misc/PrestigeSuite .jpg";
import palace from "../../assets/Images/Misc/Palace.jpg";
import maharaja from "../../assets/Images/Misc/Maharajah.jpg";
import khaas from "../../assets/Images/Presidential Suits/(Prestige Suite) Khaas Mahal.jpg";
import baithak from "../../assets/Images/IndoorVenues/Baithak Hall.jpg";
import theatre from "../../assets/Images/IndoorVenues/Manoranjan Theatre.jpg";
import mehfil from "../../assets/Images/IndoorVenues/mehfil mahal.jpg";
import swapna from "../../assets/Images/Dining/Swapna Mahal.jpg";
import rl from "../../assets/Images/Dining/The Royal Loungejpg.jpg";
import shikarbadi from "../../assets/Images/Dining/shikarbadi.jpg";
import Charbagh from "../../assets/Images/Outdoor/Charbagh.jpg";
import diwaneaam from "../../assets/Images/Outdoor/diwan e Aam 2.jpg";
import diwanekhaas from "../../assets/Images/Outdoor/Diwan e Khaas.jpg";
import fountain from "../../assets/Images/Outdoor/Fountain_Courtyard.jpg";
import maharani from "../../assets/Images/Outdoor/Maharani bagh.jpg";
import Moti from "../../assets/Images/Outdoor/Moti Chowk.jpg";
import shatranj from "../../assets/Images/Outdoor/Shatranj_Chowk.jpg";


export const content = {
    a: {
      "Rooms & Suites": {
        content: [
          { name: "Heritage Room", img: heritage, link: "/room/Heritage_Room" },
          { name: "Premier Room", img: premier, link: "/room/Premier_Room" },
          { name: "Historical Room", img: historical, link: "/room/Historical_Room" },
          { name: "Prestige Suites", img: prestige, link: "/room/Prestige_Suites" },
          { name: "Palace Suites", img: palace, link: "/room/Palace_Suites" },
        ],
        function: "Rooms_&_Suites",
      },
      "Presidential Suites": {
        content: [
          { name: "Maharajah's Pavillion", img: maharaja, link: "/room/Maharajah's_Pavillion" },
          { name: "Shahi Mahal", img: khaas, link: "/room/Shahi_Mahal" },
        ],
        function:"Presidential_Suites",
      },
      Reservation: {
        content: [
          {
            name: "Book Online",
            link: "/booking" },
        ],
        link: "#",
      },
    },
    mb: {
      "Indoor Venues": {
        content: [
          { name: "Manoranjan", img: theatre, link: "/room/Manoranjan" },
          { name: "Baithak Hall", img: baithak, link: "/room/Baithak_Hall" },
          { name: "Swapna Mahal", img: swapna, link: "/room/Swapna_Mahal" },
          { name: "Royal Lounge", img: rl, link: "/room/Royal_Lounge" },
          { name: "Shikarbadi", img: shikarbadi, link: "/room/Shikarbadi" },
          { name: "Mehfil Mahal", img: mehfil, link: "/room/Mehfil_Mahal" },
        ],
        function: "Indoor_Venues",
      },
      "Outdoor Venues": {
        content: [
          { name: "Diwan-E-Aam", img: diwaneaam, link: "/room/Diwan_E_Aam" },
          { name: "Diwan-E-Khaas", img: diwanekhaas, link: "/room/Diwan_E_Khaas" },
          { name: "Charbagh", img: Charbagh, link: "/room/Charbagh" },
          { name: "Maharani Bagh", img: maharani, link: "/room/Maharani_Bagh" },
          { name: "Moti Chowk", img: Moti, link: "/room/Moti_Chowk" },
          { name: "Fountain Courtyard", img: fountain, link: "/room/Fountain_Courtyard" },
          { name: "Shatranj Chowk", img: shatranj, link: "/room/Shatranj_Chowk" },
        ],
        function:"Outdoor_Venues",
      },
      "Download MICE Brochure": {
        content: [],
        link: "/Mice-Brochure-The-Raj-Palace.pdf",
      },
    },
  };