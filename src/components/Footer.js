import { FaPhoneSquareAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { MdLocationOn } from 'react-icons/md';
import { Link, animateScroll as scroll } from 'react-scroll'
import { MdOutlineVerticalAlignTop } from "react-icons/md";
function Footer() {


  return (
    <footer className='bg_color'>
      <div className="">
      <div className="row justify-content-md-center justify-content-start">
        <div className="col-md-4 d-flex justify-content-center">
          {" "}
          {/* Adjust col-md-6 to your desired width */}
          <div id="contact-us" className="d-flex flex-column">
            <div className="text-white h1 mb-4">Contact Info</div>

            <div className="my-2 d-flex align-items-center">
              <IoMdMail color="#ffffff" className="me-2" size={20} />
              <span className="text-white">
                {/* {adminAgencyData?.email} */}
                mho@marakahumanitarianobservatory.com
                </span>
            </div>

            <div className="my-2 d-flex align-items-center">
              <FaPhoneSquareAlt color="#ffffff" className="me-2" size={20} />
              <span className="text-white">
                {/* {adminAgencyData?.mobile_no} */}
                03119111979

              </span>
            </div>

            <div className="my-2 d-flex align-items-center">
              <MdLocationOn color="#ffffff" className="me-2" size={22} />
              <span className="text-white">
                {/* {adminAgencyData?.address?.replace(/]/g, ", ").toUpperCase()} */}
                UOP,Peshawar,Pakistan.
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-none d-md-block">
          <div className="d-flex gap-4 flex-wrap justify-content-center  ">
           
          <img
            src="/Picture1.png" // Replace with your logo URL
            alt="MHO"
            width={120}
                      height={90}
            //  className="logo_"
          />
          {' '}
          <img
            src="/Picture2.png" // Replace with your logo URL
            alt="MH2"
            width={120}
            height={90}
            // className="logo_"
          />
          {' '}
          <img
            src="/Picture3.png" // Replace with your logo URL
            alt="MH3"
            width={120}
            height={90}
            // className="logo_"
          />

          </div>
        </div>{" "}
      </div>
    </div>
      
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"><MdOutlineVerticalAlignTop/></i></button>

    </footer>
  );
}
export default Footer;
