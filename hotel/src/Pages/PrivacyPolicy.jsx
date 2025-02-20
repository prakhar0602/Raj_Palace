import { useEffect } from "react";
import { setLoading } from "../Redux/CommonVariables";
import { useDispatch } from "react-redux";
import Fade from "../Components/Fade";
import LeftEnter from "../Components/LeftEnter";
import RightEnter from "../Components/RightEnter";

const PrivacyPolicy = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const allMedia = document.querySelectorAll("img");

    if (allMedia.length === 0) {
      setTimeout(() => dispatch(setLoading(false)), 1000);
      return;
    }

    let mediaLoaded = 0;
    
    const handleMediaLoad = () => {
      mediaLoaded++;
      if (mediaLoaded === allMedia.length) {
        setTimeout(() => dispatch(setLoading(false)), 1000);
      }
    };

    allMedia.forEach((mediaElement) => {
      if (mediaElement.complete) {
        handleMediaLoad();
      } else {
        mediaElement.onload = handleMediaLoad;
        mediaElement.onerror = handleMediaLoad;
      }
    });
  }, [dispatch]);

  return (
    <div className="min-h-screen font-sans pt-20 lg:pt-36 bg-gray-50">
      <Fade extraCss="bg-blue-200 text-gray-900 text-center py-8 shadow-lg mb-8">
        <h1 className="text-3xl lg:text-5xl font-extrabold tracking-wide">Privacy Policy</h1>
      </Fade>
      
      <main className="md:mx-14 py-12 px-6 space-y-12">
        <LeftEnter extraCss="bg-white rounded-xl shadow-md text-gray-800 p-8 border-l-4 border-blue-400">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-3">Personal Information Collection</h2>
          <p className="text-lg leading-relaxed mb-6">
            The Raj Palace understands the importance of your privacy and respect that you want to safeguard the use to which your personal information is put. Consequently, we make it a high priority to ensure that your personal information (including credit card details) remains secure and confidential and is used only for the intended purpose. In this privacy policy we explain how we collect data about you and the nature of that data, how we use that data, who that data may be sent to and how you can amend data you have submitted to us. Our privacy policy applies to your personal data supplied or collected from our website (www.rajpalace.com or any other web page) and to personal data supplied or collected over the telephone, by e-mail, by fax or by letter. The personal data we collect and how we collect it We may collect or be provided with, store and use the following kinds of personal information:
          </p>
            
          <ol className="list-decimal ml-8 mb-6 space-y-2 text-lg">
            <li>Your first and last name, telephone number, postal and e-mail address, fax number.</li>
            <li>Information about your computer and about your visits to and use of our website including your IP address, geographical location, browser type and version, operating system, referral source, length of visit, page views and website navigation.</li>
            <li>If you make a reservation or purchase any items using a credit or debit card then we need the card number, cardholder name, expiry date and CVV number.</li>
            <li>Your membership details, hotel preferences and travel experiences.</li>
            <li>Any survey responses or feedback.</li>
          </ol>
            
          <p className="text-lg leading-relaxed mb-4">
            We may ask you for personal information in a variety of circumstances, for instance:
          </p>
            
          <ol className="list-decimal ml-8 mb-6 space-y-2 text-lg">
            <li>When you make a hotel reservation or purchase something from our website or on the telephone or by e-mail, letter or fax.</li>
            <li>When you register with us, subscribe to our newsletter, enter competitions or register for promotions.</li>
            <li>When you take part in surveys or provide us with feedback.</li>
          </ol>
            
          <p className="text-lg leading-relaxed">
            We may be provided with personal information by third parties in connection with a reservation at The Raj Palace Hotel, for instance, by a travel agent you may use to make a reservation or by the Raj Palace hotel in connection with your reservation or stay.
            <br /><br />
            We may also collect personal information in the course of telephone calls to and from our office or reservation service which may be recorded or monitored for the purpose of quality control and for staff training. Call recordings will be maintained as long as reasonably necessary and will then be deleted. Any personal information obtained from you during the call will be treated in accordance with the provisions of this privacy policy.
          </p>
        </LeftEnter>

        <RightEnter extraCss="bg-white rounded-xl shadow-md text-gray-800 p-8 border-r-4 border-blue-400">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-3">Using Your Personal Information</h2>
          
          <p className="text-lg mt-4 leading-relaxed mb-6">
            The Raj Palace may use your personal data in a number of ways, set out below.
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Reservations</h3>
          <p className="text-lg leading-relaxed mb-6">
            The Raj Palace provides an online reservations facility on the hotel's website and a telephone facility for making reservations at the hotel. In the course of making and fulfilling a guest reservation it is necessary for The Raj Palace to collect and use personal data which will be subject to our Reservations Privacy Policy.
          </p>
          
         <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Website and Marketing</h3>
         <p className="text-lg mb-4">The Raj Palace may also use your personal information to:</p>
         
         <ol className="list-decimal ml-8 mb-6 space-y-2 text-lg">
            <li>Administer the website.</li>
            <li>Improve your browsing experience by personalising the website.</li>
            <li>Enable your use of the services available on the website.</li>
            <li>Send you goods purchased via the website and/or supply you with services purchased via the website.</li>
            <li>Send statements and invoices to you and track payments.</li>
            <li>Track your use of the reservation process and contact you once via email regarding your experience.</li>
            <li>Send you general (non-marketing) commercial communications.</li>
            <li>Send you e-mail notifications which you have specifically requested.</li>
            <li>Send you marketing communications relating to our business or the businesses of carefully selected third parties which we think may be of interest to you by post or, where you have specifically agreed to this, by e-mail or similar technology (you can inform us at any time if you no longer require such marketing communications).</li>
            <li>Provide third parties with statistical information about our users but this information will not be used to identify any individual user.</li>
            <li>Deal with enquiries and complaints made by or about you relating to the website.</li>
         </ol>
         
        <p className="text-lg leading-relaxed mb-6">
          Where you submit personal information for publication on the website, SLH will publish and otherwise use that information in accordance with the licence you grant to us.
          <br /><br />
          The Raj Palace will not, without your express consent, provide your personal information to any third parties for the purpose of direct marketing.
        </p>
        </RightEnter>
        
        <LeftEnter extraCss="bg-white rounded-xl shadow-md text-gray-800 p-8 border-l-4 border-blue-400">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-3">Sharing Your Personal Information</h2>
          <p className="text-lg leading-relaxed mb-8">
            The Raj Palace may disclose information about you to any member of our group, which means our subsidiaries, holding company and its subsidiaries, as defined in section 1159 of the UK Companies Act 2006, any employees, officers, agents, suppliers or sub-contractors including, but not limited to, Small Luxury Hotels of the World Management Limited, insofar as reasonably necessary for the purposes as set out in this privacy policy.
            <br /><br />
            It may sometimes be necessary for The Raj Palace to disclose your personal information in order to comply with a legal obligation but we will only do so in accordance with data protection legislation and will ensure that the appropriate security measures are observed. Except as provided in this privacy policy, The Raj Palace will not provide your information to third parties.
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">How Long Do We Hold Your Personal Information?</h3>
          <p className="text-lg leading-relaxed mb-8">
            The Raj Palace will only store your personal data for as long as is necessary for the legitimate purpose for which it was supplied and it will be destroyed or deleted when it is no longer necessary for The Raj Palace to hold it. You can ask us to erase or delete all or some of your personal data at any time although that may impact upon the benefit you get from our website or other services.
          </p>
        </LeftEnter>
        
        <RightEnter extraCss="bg-white rounded-xl shadow-md text-gray-800 p-8 border-r-4 border-blue-400">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-3">Security and International Data Transfers</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-900">Security of Your Personal Information</h3>
          <p className="text-lg leading-relaxed mb-6">
            The Raj Palace will take reasonable legal, technical and organisational precautions to prevent the loss, misuse or alteration of your personal information.
            <br /><br />
            The Raj Palace will store all the personal information you provide on its secure (password and firewall protected) servers. Reservations you make with The Raj Palace will be encrypted using SSL technology.
            <br /><br />
            In the course of processing or transmitting your credit card CVV number The Raj Palace will observe and fully comply with the current Data Security Standard of the PCI Security Standards Council.
            <br /><br />
            You accept that data transmission over the Internet is inherently insecure and The Raj Palace cannot guarantee the security of data sent over the Internet.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">International Data Transfers</h3>
          <p className="text-lg leading-relaxed mb-6">
            Personal information that The Raj Palace collects or holds may be transferred to, and stored at a destination outside the European Economic Area ("EEA"). It may also be processed by staff operating outside the EEA who work for The Raj Palace or for one of its suppliers. This includes staff engaged in, amongst other things, the fulfillment of any reservation, the processing of your payment details and the provision of support services.
            <br /><br />
            Personal information which you provide may be transferred to countries (including the United States of America) which do not have data protection laws equivalent to those in force in the European Economic Area. However, wherever possible SLH has implemented the appropriate legal and security measures to ensure that your personal data is protected.
            <br /><br />
            In addition, personal information that you submit for publication on the website will be published on the Internet and may be available, via the Internet, around the world. The Raj Palace cannot prevent the use or misuse of such information by others.
            <br /><br />
            You expressly agree to any such transfers of personal information.
          </p>
        </RightEnter>
        
        <LeftEnter extraCss="bg-white rounded-xl shadow-md text-gray-800 p-8 border-l-4 border-blue-400">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-3">Your Privacy Rights</h2>
          <p className="text-lg leading-relaxed mb-4">
            You have the rights listed below in relation to personal data we hold about you:
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-900">1. Delete Data:</h3>
          <p className="text-lg leading-relaxed ml-6 mb-4">
            You can ask us to erase or delete all or some of your personal data.
          </p>
          
          <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900">2. Change or Correct Data:</h3>
          <p className="text-lg leading-relaxed ml-6 mb-4">
            You can ask us to change, update or fix your data in certain cases particularly if it is inaccurate.
          </p>
          
          <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900">3. Object to, or Limit or Restrict Our Use of Data:</h3>
          <p className="text-lg leading-relaxed ml-6 mb-4">
            You can ask us to stop using all or some of your personal data or to limit our use of it.
          </p>
          
          <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900">4. Right to Access and/or Take Your Data:</h3>
          <p className="text-lg leading-relaxed ml-6 mb-4">
            You can ask us for a copy of your personal data to be provided in machine readable form.
          </p>
          
          <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900">5. Complaint:</h3>
          <p className="text-lg leading-relaxed ml-6 mb-6">
            You have the right to lodge a complaint with SLH's supervisory authority which is the UK's Information Commissioner's Office. If you wish to exercise any of these rights you can contact our Data Protection Team by email at pro@rajpalace.in.
          </p>
        </LeftEnter>
        
        <RightEnter extraCss="bg-white rounded-xl shadow-md text-gray-800 p-8 border-r-4 border-blue-400">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-3">Data Controller and Other Information</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-900">Data Controller and Contact</h3>
          <p className="text-lg leading-relaxed mb-6">
            The data controller responsible in respect of the information collected on the website or otherwise in the course of your dealings with us is The Raj Palace Hotel whose registered office is at Jorawer Singh Gate, Amer Road, Jaipur (302002) INDIA. Our Data Protection Officer is Tanushree Sharma and any queries regarding The Raj Palace's use of you personal data should be addressed to our Data Protection Team by email, pro@rajpalace.in.
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Our Use of 'Cookies'</h3>
          <p className="text-lg leading-relaxed mb-6">
            To make The Raj Palace work even better for you, we also use 'cookies' to collect information about your use of the website. You should read our Cookies Policy for full details.
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Policy Amendments</h3>
          <p className="text-lg leading-relaxed mb-4">
            The Raj Palace may update this privacy policy from time-to-time by posting a new version on the SLH website and, as appropriate, this will be notified to you by email. You should check this page when using the Raj Palace website to ensure you are happy with any changes. Effective from 24 May 2018.
          </p>
        </RightEnter>
      </main>
      
      <footer className="bg-gray-800 text-white py-6 text-center mt-12">
        <p className="text-sm">© {new Date().getFullYear()} The Raj Palace. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;