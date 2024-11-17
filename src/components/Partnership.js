import React from 'react';
import { Image } from 'react-bootstrap';

const Partnership = () => {
  return (
    <div className="partnership-section" style={{ minHeight: '100vh' }}>
      
      {/* Top Heading */}
      <h1 className="text-center main-heading bg_color text-white d-flex justify-content-center align-items-center" style={{height:"80px"}}>Migration Research Cell & Crossroads Advisory</h1>

      {/* Crossroads Advisory Section */}
      <div className="partnership-content">
        <div className="image-container">
          <img 
            src="/Picture3.png" 
            alt="Crossroads Advisory Logo" 
            fluid 
            rounded 
            // className="image-style" 
            width={500}
            height={500}
            style={{ backgroundColor: 'transparent' }} 
          />
        </div>
        <div className="text-container">
          <h3 className="section-heading fs-1">Crossroads Advisory</h3>
          <p className="section-paragraph fs-3">
            Crossroads Advisory (CA) is a private limited company, incorporated under Section 16 of the Companies Act, 2017 (XIX of 2017) Securities and Exchange Commission of Pakistan. It was founded and is headed by Saba Gul Khattak, a well-known independent researcher who has worked in senior positions in the government and non-government sectors. CA’s mandate is to work in institutional development, project planning, strategic development, capacity building, and ancillary activities and services. CA has a Board of Advisors consisting of eminent Pakistani professionals from different fields: Dr. Farzana Bari, Dr. Afiya S. Zia, Mr. Owais Tohid, Mr. Rajib ul Akhter, and Dr. Amena Mohsin. Currently, CA has received seed funding for establishing the Maraka Humanitarian Observatory (MHO) to look at humanitarian governance trends. This funding has been provided by the Women’s Research Network.
          </p>
        </div>
      </div>
      <hr/>

      {/* Migration Research Cell Section */}
      <div className="partnership-content">
        <div className="image-container " style={{ backgroundColor: 'none' }} >
          <img 
            src="/Picture2.png" 
            alt="Migration Research Cell Logo" 
            fluid 
            rounded 
            // className="bg-primary"
            width={500}
            height={500}
            style={{ backgroundColor: 'none' }} 
          />
        </div>
        <div className="text-container">
          <h3 className="section-heading fs-1">Migration Research Cell</h3>
          <p className="section-paragraph fs-3">
            The Migration Research Cell (MRC) was established in May 2024 at the Department of Political Science, University of Peshawar, to inform policy-making, support humanitarian interventions, and develop stakeholders’ networks related to migration through rigorous research on global, regional, and national trends in migration and the impacts of migration on societies, economies, and politics.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Partnership;
