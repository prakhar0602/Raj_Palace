import heritage from "../../assets/Images/Menu/HeritageRoom.jpg";
import premier from "../../assets/Images/Menu/premierRooms.jpeg";
import historical from "../../assets/Images/Menu/HistoricalRoom.jpg";
import prestige from "../../assets/Images/Menu/PrestigeSuite .jpg";
import palace from "../../assets/Images/Menu/Palace.jpg";
import maharaja from "../../assets/Images/Menu/Maharajah.jpg";
import khaas from "../../assets/Images/Menu/(Prestige Suite) Khaas Mahal.jpg";
import baithak from "../../assets/Images/Menu/Baithak Hall.jpg";
import theatre from "../../assets/Images/Menu/Manoranjan Theatre.jpg";
import mehfil from "../../assets/Images/Menu/mehfil mahal.jpg";
import swapna from "../../assets/Images/Menu/Swapna Mahal.jpg";
import rl from "../../assets/Images/Menu/The Royal Loungejpg.jpg";
import shikarbadi from "../../assets/Images/Menu/shikarbadi.jpg";
import Charbagh from "../../assets/Images/Menu/Charbagh.jpg";
import diwaneaam from "../../assets/Images/Menu/diwan e Aam 2.jpg";
import diwanekhaas from "../../assets/Images/Menu/Diwan e Khaas.jpg";
import fountain from "../../assets/Images/Menu/Fountain_Courtyard.jpg";
import maharani from "../../assets/Images/Menu/Maharani bagh.jpg";
import Moti from "../../assets/Images/Menu/Moti Chowk.jpg";
import shatranj from "../../assets/Images/Menu/Shatranj_Chowk.jpg";


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
      "Menu Venues": {
        content: [
          { name: "Diwan-E-Aam", img: diwaneaam, link: "/room/Diwan_E_Aam" },
          { name: "Diwan-E-Khaas", img: diwanekhaas, link: "/room/Diwan_E_Khaas" },
          { name: "Charbagh", img: Charbagh, link: "/room/Charbagh" },
          { name: "Maharani Bagh", img: maharani, link: "/room/Maharani_Bagh" },
          { name: "Moti Chowk", img: Moti, link: "/room/Moti_Chowk" },
          { name: "Fountain Courtyard", img: fountain, link: "/room/Fountain_Courtyard" },
          { name: "Shatranj Chowk", img: shatranj, link: "/room/Shatranj_Chowk" },
        ],
        function:"Menu_Venues",
      },
      "Download MICE Brochure": {
        content: [],
        link: "/Mice-Brochure-The-Raj-Palace.pdf",
      },
    },
  };