import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#645120] pt-5 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Subscribe Section */}
        <div className="flex flex-col items-center sm:items-start sm:flex-row sm:justify-between">
          <div>
            <p className="text-lg font-semibold mb-2">Get the freshest Raj Palace news</p>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter email here"
                className="px-4 py-2 text-black rounded border border-gray-300 focus:outline-none focus:ring-2 "
              />
              <button className="bg-white text-green-900 px-4 py-2 rounded font-semibold hover:bg-gray-200">
                Subscribe
              </button>
            </div>
            <div className="mt-2">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                By checking the box, you agree that you are at least 18 years of age.
              </label>
            </div>
          </div>
        </div>

       

        {/* Social Icons Section */}
        <div className="flex justify-center space-x-4 mt-6">
          <a href="#" className="hover:text-gray-400">
          <ion-icon name="logo-youtube"></ion-icon>
             </a>
          <a href="#" className="hover:text-gray-400">
          <ion-icon name="logo-pinterest"></ion-icon>
          </a>
          <a href="#" className="hover:text-gray-400">
          <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a href="#" className="hover:text-gray-400">
          <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a href="#" className="hover:text-gray-400">
          <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </div>

        {/* Legal Section */}
        <div className="text-center sm:text-left text-xs text-gray-300 mt-6">
          <p>© 2024 Raj Palace, LLC. All Rights Reserved.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
            <a href="#" className="hover:underline">
              Website Terms
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Do Not Sell or Share My Personal Information
            </a>
            <a href="#" className="hover:underline">
              California: Your Privacy Rights
            </a>
            <a href="#" className="hover:underline">
              Accessibility Statement
            </a>
            <a href="#" className="hover:underline">
              CA Transparency in Supply Chains Act
            </a>
            <a href="#" className="hover:underline">
              Supplier Code of Conduct
            </a>
            <a href="#" className="hover:underline">
              Marketing to Children
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
