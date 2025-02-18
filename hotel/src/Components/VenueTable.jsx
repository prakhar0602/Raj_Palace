import React from "react";

const VenueTable = () => {
  const venues = [
    { name: "Manoranjan", type: "Indoor", area: 100, buffet: "x", cluster: "x", restaurant: "x", theatre: 50, lounge: 15 },
    { name: "Baithak", type: "Indoor", area: 140, buffet: 150, cluster: 80, restaurant: 100, theatre: 125, lounge: 30 },
    { name: "Swapna Mahal", type: "Indoor", area: 160, buffet: "x", cluster: "x", restaurant: 110, theatre: "x", lounge: "x" },
    { name: "Shikar Badi", type: "Indoor", area: 75, buffet: "x", cluster: "x", restaurant: 30, theatre: "x", lounge: 15 },
    { name: "Royal Lounge", type: "Indoor", area: 90, buffet: "x", cluster: "x", restaurant: "x", theatre: "x", lounge: 20 },
    { name: "Charbagh", type: "Outdoor", area: 1500, buffet: 600, cluster: 350, restaurant: 400, theatre: 400, lounge: 350 },
    { name: "Maharani Bagh", type: "Outdoor", area: 1500, buffet: 600, cluster: 350, restaurant: 400, theatre: 400, lounge: 350 },
    { name: "Diwan-e-Khas", type: "Semi (roof cover)", area: 160, buffet: 200, cluster: 80, restaurant: 130, theatre: 140, lounge: 40 },
    { name: "Diwan-e-Aam", type: "Semi (roof cover)", area: 130, buffet: 150, cluster: 80, restaurant: 110, theatre: 120, lounge: 30 },
    { name: "Fountain Courtyard", type: "Outdoor", area: 225, buffet: 200, cluster: 80, restaurant: 100, theatre: 40, lounge: 50 },
    { name: "Moti Chowk", type: "Outdoor", area: 175, buffet: 100, cluster: 40, restaurant: 50, theatre: "x", lounge: 30 },
    { name: "Chess Courtyard", type: "Outdoor", area: 150, buffet: 60, cluster: "x", restaurant: "x", theatre: 50, lounge: 35 },
  ];

  return (
    <div className="p-4 w-full">
      <h1 className="text-2xl font-bold mb-4 w-full text-center">Venues Details</h1>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <div className="min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap">Venues</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap">Indoor/Outdoor</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap">Area (in sq mts)</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap">Standing Buffet</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap">Round/Cluster Style</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap">Restaurant Service</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap">Theatre Style</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap">Lounge Seating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {venues.map((venue, index) => (
                  <tr 
                    key={index} 
                    className={`hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap font-medium">{venue.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{venue.type}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{venue.area}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{venue.buffet}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{venue.cluster}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{venue.restaurant}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{venue.theatre}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{venue.lounge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueTable;