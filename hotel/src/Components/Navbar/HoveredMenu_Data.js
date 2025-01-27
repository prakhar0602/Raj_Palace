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
          { name: "Heritage Room", img: heritage, link: "/room" },
          { name: "Premier Room", img: premier, link: "/room" },
          { name: "Historical Room", img: historical, link: "/room" },
          { name: "Prestige Suites", img: prestige, link: "/room" },
          { name: "Palace Suites", img: palace, link: "/room" },
        ],
        function: "Rooms & Suites",
      },
      "Presidential Suites": {
        content: [
          { name: "Maharajah's Pavillion", img: maharaja, link: "/room" },
          { name: "Shahi Mahal", img: khaas, link: "/room" },
        ],
        function:"Presidential Suites",
      },
      Reservation: {
        content: [
          {
            name: "Book Online",
            link: "https://be.synxis.com/?adult=1&arrive=2025-01-26&chain=22402&child=0&currency=USD&depart=2025-01-27&hotel=78522&level=hotel&locale=en-US&productcurrency=USD&rooms=1&src=24C" },
        ],
        link: "#",
      },
    },
    mb: {
      "Indoor Venues": {
        content: [
          { name: "Manoranjan", img: theatre, link: "/room" },
          { name: "Baithak Hall", img: baithak, link: "/room" },
          { name: "Swapna Mahal", img: swapna, link: "/room" },
          { name: "Royal Lounge", img: rl, link: "/room" },
          { name: "Shikarbadi", img: shikarbadi, link: "/room" },
          { name: "Mehfil Mahal", img: mehfil, link: "/room" },
        ],
        function: "Indoor Venues",
      },
      "Outdoor Venues": {
        content: [
          { name: "Diwan-E-Aam", img: diwaneaam, link: "/room" },
          { name: "Diwan-E-Khaas", img: diwanekhaas, link: "/room" },
          { name: "Charbagh", img: Charbagh, link: "/room" },
          { name: "Maharani Bagh", img: maharani, link: "/room" },
          { name: "Moti Chowk", img: Moti, link: "/room" },
          { name: "Fountain Courtyard", img: fountain, link: "/room" },
          { name: "Shatranj Chowk", img: shatranj, link: "/room" },
        ],
        function:"Outdoor Venues",
      },
      "Download MICE Brochure": {
        content: [],
        link: "/src/assets/Mice-Brochure-The-Raj-Palace.pdf",
      },
    },
  };