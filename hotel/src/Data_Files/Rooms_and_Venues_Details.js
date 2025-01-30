import hr1 from "../assets/Images/Rooms/Heritage Rooms/1.jpg";
import hi1 from "../assets/Images/Rooms/Historical Room/1.jpg";
import ps1 from "../assets/Images/Rooms/Palace Suits/1.jpg";
import ps2 from "../assets/Images/Rooms/Palace Suits/2.jpg";
import pr1 from "../assets/Images/Rooms/Premier Room/1.jpg";
import pr2 from "../assets/Images/Rooms/Premier Room/2.jpg";
import pre1 from "../assets/Images/Rooms/Prestige Room/1.jpg";
import a1 from "../assets/Images/Presidential Suits/Maharajah's Pavillion/1.jpg";
import durbar2 from "../assets/Images/Presidential Suits/Maharajah's Pavillion/durbar.png";
import level1 from "../assets/Images/Presidential Suits/Maharajah's Pavillion/Level 1.jpg";
import level2 from "../assets/Images/Presidential Suits/Maharajah's Pavillion/Level 2.jpg";
import baithak from "../assets/Images/IndoorVenues/Baithak Hall.jpg";
import theatre from "../assets/Images/IndoorVenues/Manoranjan Theatre.jpg";
import mehfil from "../assets/Images/IndoorVenues/mehfil mahal.jpg";
import rl from "../assets/Images/Dining/The Royal Loungejpg.jpg";
import shikarbadi from "../assets/Images/Dining/shikarbadi.jpg";
import swapna from "../assets/Images/Dining/Swapna Mahal.jpg";
import Charbagh from "../assets/Images/Outdoor/Charbagh.jpg";
import diwaneaam from "../assets/Images/Outdoor/diwan e Aam 2.jpg";
import diwanekhaas from "../assets/Images/Outdoor/Diwan e Khaas.jpg";
import fountain from "../assets/Images/Outdoor/Fountain_Courtyard.jpg";
import maharani from "../assets/Images/Outdoor/Maharani bagh.jpg";
import Moti from "../assets/Images/Outdoor/Moti Chowk.jpg";
import shatranj from "../assets/Images/Outdoor/Shatranj_Chowk.jpg";
import shahi from "../assets/Images/Presidential Suits/shahi_mahal.jpg"

export let room = {
  "Heritage Room": {
    roomDetails: {
      title: "Heritage Rooms",
      description:
        "The heritage Rooms are restored and refurnished, few of them offer private museums of the Art collection of the Royal family. The bathrooms are laid in Italian marble and offer the best modern facilities and designer fittings. The rich palace furniture along with special fabrics and colors add the princely charm to the whole setting of the room. Each room has its own soul, its own individual harmony a marriage of the finest material, rare woods, silk, brocades, furniture and artefacts created by master’s craftsman. The royal guests and the junior members of the royal family had lived in these rooms.",
      price: "$443",
    },
    amenities: [
      { icon: "💻", text: "High-Speed Internet" },
      { icon: "📶", text: "Wi-Fi" },
      { icon: "🍽️", text: "Catering" },
    ],
    galleryImages: [hr1],
  },
  "Premier Room": {
    roomDetails: {
      title: "Premier Room",
      description:
        "The Premier Rooms are newly restored and refurbished rooms. The large bathrooms are laid in Italian marble and offer the best modern facilities and designer fittings. The rich palace furniture along with special fabrics and colors add the princely charm to the whole setting of the room. These rooms are specially designed for leisure and business traveler and are on a separate floor, the elegantly appointed bedroom features a king size or a twin bed, a dressing with a closet and a spacious marble bathroom with bathtub and shower cubical. Premier rooms are 450 Sq ft Room features Italian marble floors, modern palace furniture.",
      price: "$443",
    },
    amenities: [
      { icon: "🛏️", text: "Double or Twin Bed" },
      { icon: "📺", text: "LED TV" },
      { icon: "🛋️", text: "Sofa" },
    ],
    galleryImages: [pr1, pr2],
  },
  "Historical Room": {
    roomDetails: {
      title: "Historical Room",
      description:
        "The historical rooms were lived by the Royal Dignitaries of other Thikanas, other wives of Thakur Sahib and wife of Crowned prince and other senior members of The Royal Family, these suites have best view with large area and are laid with finest Italian Marble the bathrooms have the latest design and technology and are laid in finest Italian marble, the original old Royal antique furniture is used in most of these suites and they have a private museum with valuable collections of the Royal Family.",
      price: "$567",
    },
    amenities: [
      { icon: "💻", text: "High-Speed Internet" },
      { icon: "📶", text: "Wi-Fi" },
      { icon: "🍽️", text: "Catering" },
    ],
    galleryImages: [hi1],
  },
  "Prestige Suites": {
    roomDetails: {
      title: "Prestige Suites",
      description:
        "The prestige suites embody the very essence of The Raj Palace where 17th century panelling echoes allegorical ceilings, old masters antique furniture and of course the priceless museums displaying the collections of the Thakur and Thakurani Sahiba. The preserved and restored Raj Mahal, Swarna Mahal, Khaas Mahal Suite and others were part of the personal chambers of the royal family. They are carefully restored with period furniture and large windows overlooking the Charbagh or Maharani Bagh gardens.",
      price: "$856",
    },
    amenities: [
      { icon: "💻", text: "High-Speed Internet" },
      { icon: "📶", text: "Wi-Fi" },
      { icon: "🍽️", text: "Catering" },
    ],
    galleryImages: [pre1],
  },
  "Palace Suites": {
    roomDetails: {
      title: "Palace Suites",
      description:
        "The Palace Suites are specialty suites and offers the complete Royal apartment blocks within the Palace which include two bedrooms, Living and Dining room. They are the private Pavilions within the Palace. The finest Palace furniture is in real gold , silver or Antique. The suite has display of finest royal art collection in its private museums and offers either private terrace or Private Durbar. The Suite comes with discreet Check-ins and butlers off-Course, and our well trained butlers know how to pamper you , keeping your privacy in mind. A favorite of visiting dignitaries and high powered CEOs alike, this is one suite that – just like its namesake – succeeds in making a big impression, with a massage pool and butler service thrown in for good measure. Let’s take a quick look at our very exclusive two bedroom Palace suites.",
      price: "$5900",
    },
    amenities: [
      { icon: "💻", text: "High-Speed Internet" },
      { icon: "📶", text: "Wi-Fi" },
      { icon: "🍽️", text: "Catering" },
    ],
    galleryImages: [ps1, ps2],
  },
  "Maharajah's Pavillion": {
    roomDetails: {
      title: "Maharajah's Pavillion",
      description:
        "The suite is a four floor apartment with a private entrance through the Charbagh and the victory corridor, The Pavilion has a private elevator connecting all four floors and the total area of the suite is 16000 square feets and has four bedrooms. The First Floor of the pavilion has a private lounge / lobby and the entrance leads you to your private secretarial and an extra luggage storage area, this further leads you to a large luxurious private Lounge with a bar. The Second Floor of the pavilion the was the private floor used by the ruler himself it overlooks the inner courts of the palaces, and the Charbagh gardens, it combines a double-height reception room with vaulted apartments intended for private use. It was a sleeping chamber for the Thakur Sahib and its luxurious ornamentation includes Gold leafed painted walls , Stucco and mirror work, The furniture is in gold and silver. It has a private passage connecting the different pavilions and the Zenana. The Highlight of the Suite is a private museum displaying the Old Throne and Bolsters of The Thakur Sahib (king or Maharajah). The Third Floor of the pavilion, has got the Library with a lavish Dining room connected to a kitchen, second accommodation room. The Fourth Floor of the pavilion was the pleasure pavilion in past and now has a private roof top Terrace with panoramic view of the city and a small Jacuzzi. Swimming pool, this spacious part of the pavilion has large soft seating lounge, a private bar, Library, study area and an elegant dining complete with a separate Butler entrance , a private spa adjoining the pleasure pavilion. The bedroom is laid with rich ivory and gold furniture empanelling and two luxurious bathrooms.",
      price: "Rs.",
    },
    amenities: [
      { icon: "💻", text: "High-Speed Internet" },
      { icon: "📶", text: "Wi-Fi" },
      { icon: "🍽️", text: "Catering" },
    ],
    galleryImages: [durbar2, level1, level2, a1],
  },
  "Shahi Mahal": {
    roomDetails: {
      title: "Shahi Mahal",
      description:
        "Being restored since 12 years continuously at The Raj Palace The best designers and architects of the world are blending a real to life Palace of the 17th century Rajput Maharaja's luxurious lifestyle combined with 21st century most modern conveniences provided by technology. Under Renovation opening in october 2018",
      price: "Rs.",
    },
    amenities: [
      { icon: "💻", text: "High-Speed Internet" },
      { icon: "📶", text: "Wi-Fi" },
      { icon: "🍽️", text: "Catering" },
    ],
    galleryImages: [shahi],
  },
  Manoranjan: {
    roomDetails: {
      title: "Manoranjan",
      description:
        "In the 18th Century, the Thakur Sahib had got the first Gramophone (popularly known as CHURI WALA BAAZA), the public from the all the connecting villages and Thikanas came to the haveli to see that Baaza and it was a grand occasion in the evening, later the Churi wala Baaza was converted into the Radio and then the television. Manoranjan, the hi-tech digital potential place for the canvas moving pictures and their perfect melodrama. The cozy home theatre entertains with a big collection of Hollywood and Bollywood movies with subtitles in various European languages. The theatre has a big space for luxury push back chairs with fold write pads. It is designed with Acoustics innovations and has state of art technology and latest 2000 Lumen LCD Projector.",
      price: "Rs.",
    },
    amenities: [
      { icon: "💻", text: "High-Speed Internet" },
      { icon: "📶", text: "Wi-Fi" },
      { icon: "🍽️", text: "Catering" },
    ],
    galleryImages: [theatre],
  },
  "Baithak Hall": {
    roomDetails: {
      title: "Baithak Hall",
      description:
        "It's a private board or meeting room with finest Mariner furniture from spain it has a adjoining business centre which can be used for a office cum secretarial space it has a complete audio visual facility and video conferencing facilities can also be arranged .",
      price: "Rs.",
    },
    amenities: [
      { icon: "💻", text: "High-Speed Internet" },
      { icon: "📶", text: "Wi-Fi" },
      { icon: "🍽️", text: "Catering" },
    ],
    galleryImages: [baithak],
  },
  "Swapna Mahal": {
    roomDetails: {
      title: "Swapna Mahal",
      description:
        "Formal receptions remained the focal activity of courtly life during the British period. Hence the Thakur Sahib made The Swapna Mahal, imitating the great Houses of the British and French nobility. This hall is completely fitted out with European furniture, chandeliers, mirrors, curtains and a crockery collections. The Swapna Mahal means the palace of Dreams. The double height ceiling has breathtaking majestic crystal chandeliers and panels of silk curtains will take you to the dream world.",
      price: "Rs.",
    },
    amenities: [
      { icon: "💻", text: "High-Speed Internet" },
      { icon: "📶", text: "Wi-Fi" },
      { icon: "🍽️", text: "Catering" },
    ],
    galleryImages: [swapna],
  },
  "Royal Lounge": {
    roomDetails: {
      title: "Royal Lounge",
      description:
        "Thakur Sahib use to meet his officials for the small meetings and coffee breaks in the royal lounge. The Royal Lounge is fitted with Royal furniture, mirrors and Celebrity museum. It has beautiful arches, decorated in tones of pink, green sand gold, the floor is embellished with Italian marble. The Royal Lounge exudes an elegant Royal ambience and it offers an impeccable service with great attention to detail. The afternoon conservatory tea of the Royal Lounge is served with a variety of lip smacking cakes, cookies, sandwiches complimented by the fine selection of Signature French press coffees and freshly infused teas.",
      price: "Rs.",
    },
    amenities: [
      { icon: "💻", text: "High-Speed Internet" },
      { icon: "📶", text: "Wi-Fi" },
      { icon: "🍽️", text: "Catering" },
    ],
    galleryImages: [rl],
  },
  Shikarbadi: {
    roomDetails: {
      title: "Shikarbadi",
      description:
        "Royals in the 19th and 20th centuries gave particular emphasis to the pursuit of pleasure and comfort. Palaces created special pavilions for European visitors, which were none other than pleasure pavilions, designed purposely for recreation and pleasure, with facilities for sports and games, including Hunting Bars. Shikarbadi as this pavilion was popularly known, is adorned with rare artifacts, Trophies, Memorabilia’s and leather upholstered furniture from the west. It creates a dramatic old world charm to demonstrate regal command over the elements of water and earth. The Royals were fond of Hunting tigers and wild animals as a symbol of being most powerful.",
      price: "Rs.",
    },
    amenities: [
      { icon: "💻", text: "High-Speed Internet" },
      { icon: "📶", text: "Wi-Fi" },
      { icon: "🍽️", text: "Catering" },
    ],
    galleryImages: [shikarbadi],
  },
  "Mehfil Mahal": {
    roomDetails: {
      title: "Mehfil Mahal",
      description:
        "Mehfil Mahal is a beautiful ball room on the first level with a capacity of 500 people. Fit for private functions, conference, ceremonies and events. This can be combined with the lunch or dinner.",
      price: "Rs.",
    },
    amenities: [
      { icon: "💻", text: "High-Speed Internet" },
      { icon: "📶", text: "Wi-Fi" },
      { icon: "🍽️", text: "Catering" },
    ],
    galleryImages: [mehfil],
  },
  "Diwan-E-Aam": {
    roomDetails: {
      title: "Diwan-E-Aam",
      description:
        "The Diwan E Aam a hall of public audience is a double height verandah overlooking the magnificent Palace façade,fountain courtyard and the Charbagh garden. Thakur Sahib used to hold public audiences here he sat on the royal throne surrounded by carpets in silk and gold,receiving homage from the nobles and courtiers. The place is a perfect setting for a formal announcement followed by meals and entertainments. It can seat upto 90 people.",
      price: "Rs.",
    },
    amenities: [
      { icon: "💻", text: "High-Speed Internet" },
      { icon: "📶", text: "Wi-Fi" },
      { icon: "🍽️", text: "Catering" },
    ],
    galleryImages: [diwaneaam],
  },
  "Diwan-E-Khaas": {
    roomDetails: {
      title: "Diwan-E-Khaas",
      description:
        "The hall of private audience this beautiful verandah with a Double height ceiling has a amazing landscape and decoration as the pillars are laid with natural semiprecious stones inlay into white marble. The place is a perfect setting for hosting receptions and functions as the attached to Baithak Mahal on one side and the Maharani Bagh on the other side gives it the advantage to be clubbed with either of these venues depending on the function and needs also this serves as a protection from rain and sun inspite of giving a feeling that it is an open place. The floor are laid in Italian Marble and the old water fountain adds to the charm and character of the place.",
      price: "Rs.",
    },
    amenities: [
      { icon: "💻", text: "High-Speed Internet" },
      { icon: "📶", text: "Wi-Fi" },
      { icon: "🍽️", text: "Catering" },
    ],
    galleryImages: [diwanekhaas],
  },
  Charbagh: {
    roomDetails: {
      title: "Charbagh",
      description:
        "The Charbagh venue is a perfect place as an outdoor venue for big board meetings, product launches, and felicitations. The Charbagh is spacious and versatile ready to cater to different requirements and capacities. The Lawn enchants you with its majestic view of the palace façade. To top it up are the special menus, impeccable service and an eye for the smallest of details. The Charbagh lawns are perfect for Gala Dinners and Lunches, Wedding Receptions, Incentives and post conference dinners. The added advantage you get with the Charbagh is the adjoining Shikarbadi Bar that can be extended and made available for drinks and cocktails.",
      price: "Rs.",
    },
    amenities: [
      { icon: "💻", text: "High-Speed Internet" },
      { icon: "📶", text: "Wi-Fi" },
      { icon: "🍽️", text: "Catering" },
    ],
    galleryImages: [Charbagh],
    img: Charbagh,
  },
  "Maharani Bagh": {
    roomDetails: {
      title: "Maharani Bagh",
      description:
        "Maharani Bagh lawn is very private and intimate as it is a huge courtyard surrounded by hundreds of arches and beautiful Cano topes of the palace, it is situated at the North-eastern side of the palace with the adjoining Hamam pool north-eastern side. Maharani Bagh Lawns are perfect for Gala Lunches/ Shamiana Lunches, Champagne breakfast at the poolside, events like marriage ceremonies, product launches and Private Dining.",
      price: "Rs.",
    },
    amenities: [
      { icon: "💻", text: "High-Speed Internet" },
      { icon: "📶", text: "Wi-Fi" },
      { icon: "🍽️", text: "Catering" },
    ],
    galleryImages: [maharani],
  },
  "Moti Chowk": {
    roomDetails: {
      title: "Moti Chowk",
      description:
        "The Moon light square of the Palace this is a breathtaking courtyard with a huge pure white Italian Marble fountain of 5M X 5M in the middle of the courtyard the place is a big tourist attraction and is the most photographed courtyard of the Palace . The place is just perfect setting for Sajjan Goth or Haldi Ceremony",
      price: "Rs.",
    },
    amenities: [
      { icon: "💻", text: "High-Speed Internet" },
      { icon: "📶", text: "Wi-Fi" },
      { icon: "🍽️", text: "Catering" },
    ],
    galleryImages: [Moti],
  },
  "Fountain Courtyard": {
    roomDetails: {
      title: "Fountain Courtyard",
      description:
        "It's a Marble Terrace adjoining the Diwan E Aaam and has a Kebab Shop which works as a live kitchen for on site cooking of live food in functions the centre of the Courtyard is a antique Blue pottery fountain which adds to the charm and decoration of the place . The venue is most suitable for Brunches or Bar be que dinners as it is adjacent to the Bar on one side and Coffee lounge on the other side.",
      price: "Rs.",
    },
    amenities: [
      { icon: "💻", text: "High-Speed Internet" },
      { icon: "📶", text: "Wi-Fi" },
      { icon: "🍽️", text: "Catering" },
    ],
    galleryImages: [fountain],
  },
  "Shatranj Chowk": {
    roomDetails: {
      title: "Shatranj Chowk",
      description:
        "This Royal Family courtyard was typical of Vastu architecture as these were the health zones of the palaces as they drew fresh light and air into the rooms of the palace",
      price: "Rs.",
    },
    amenities: [
      { icon: "💻", text: "High-Speed Internet" },
      { icon: "📶", text: "Wi-Fi" },
      { icon: "🍽️", text: "Catering" },
    ],
    galleryImages: [shatranj],
  },
};
