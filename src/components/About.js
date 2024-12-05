import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
  const [showFullTextMRC, setShowFullTextMRC] = useState(false);
  const [showFullTextCA, setShowFullTextCA] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768); // Check if small screen

  // Update screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Paragraphs for Migration Research Cell and Crossroads Advisory
  const mrcText = "The Migration Research Cell (MRC) was established in May 2024 at the Department of Political Science, University of Peshawar, to inform policy-making, support humanitarian interventions, and develop stakeholders’ networks related to migration through rigorous research on global, regional, and national trends in migration and the impacts of migration on societies, economies, and politics.";
  
  const caText = "Crossroads Advisory (CA) is a private limited company, incorporated under Section 16 of the Companies Act, 2017 (XIX of 2017) by the Securities and Exchange Commission of Pakistan. It was founded and is headed by Saba Gul Khattak, a well-known independent researcher who has worked in senior positions in both government and non-government sectors. CA’s mandate is to work in institutional development, project planning, strategic development, capacity building, and ancillary activities and services. CA has a Board of Advisors consisting of eminent Pakistani professionals: Dr. Farzana Bari, Dr. Afiya S. Zia, Mr. Owais Tohid, Mr. Rajib ul Akhter, and Dr. Amena Mohsin. Currently, CA has received seed funding from the Women’s Research Network for establishing the Maraka Humanitarian Observatory (MHO) to monitor humanitarian governance trends.";

  return (
    <div id='about' className="bg_color" style={{ minHeight: '100vh' }}>
      <Container className="my-5">
        <h1 className="text-center mb-5 display-4 tex_color">ABOUT</h1>

        

        <Row>
          <Col className='text-white mx-4 my-2  text-justify card-text'>
          <p>Maraka Humanitarian Observatory (MHO) is a joint initiative of Crossroads Advisory (CA) and Migration Research Cell (MRC), Department of Political Science, University of Peshawar. Women’s Regional Network has provided seed funding for the Observatory. The Maraka Humanitarian Observatory is envisioned as a hub for meaningful exchange, discursive analysis, learning, research and action on local humanitarian issues and topics of global humanitarian governance issues that impact local humanitarian dynamics. The MHO aims to include among its membership key stakeholders belonging to diverse civil society groups, including academia, media, non-government institutions, public intellectuals, independent researchers and business community representatives. It seeks to bring all these diverse groups together on a single platform through monthly meetings at the Department of Political Science’s Migration Research Cell and at the Crossroads Advisory in Islamabad, both acting as platforms for the MHO.</p>
          </Col>
        </Row>
        <Row>
          <Col className='text-white mx-4 my-2 mb-2  text-justify card-text'>
          {/* <h3 className="sec-color fs-3 fw-bold mt-4">Host Institution Information</h3> */}
        <p >
        The Department of Political Science is an ideal institution to carry out academically rigorous research, and generate contextual findings on humanitarian governance issues. While hosting students from different parts of Pakistan and from neighbouring Afghanistan, the Department over the course of the past two decades has established institutional linkages with Universities, think tanks, donor agencies and research institutes through international conferences, workshops, summer schools and research colloquia. Similarly, CA brings expertise on research, policy and advocacy related to Afghan refugees in multiple contexts including women’s experience of displacement, refugee-hood and insecurity and its centrality in Islamabad ensures that member’s voices are heard at different fora in the capital. 
        </p>
          </Col>
        </Row>

        {/* Organizations Heading */}
        <Row className="text-center mb-4">
          <Col>
            <h2 className="display-5 text-white">Organizations</h2>
          </Col>
        </Row>

        {/* Migration Research Cell */}
        <Row className="mb-5">
          <Col md={6} className="text-center">
            <Image 
              src="/Picture2.png" 
              alt="Migration Research Cell" 
              fluid 
              rounded 
              className="shadow-lg"
            />
          </Col>
          <Col md={6} className="px-4">
            <p className="text-white text-justify card-text">
              {isSmallScreen && !showFullTextMRC
                ? `${mrcText.substring(0, 150)}...`
                : mrcText}
              {isSmallScreen && (
                <span
                  className="text-primary cursor-pointer"
                  onClick={() => setShowFullTextMRC(!showFullTextMRC)}
                >
                  {showFullTextMRC ? ' Read Less' : ' Read More'}
                </span>
              )}
            </p>
          </Col>
        </Row>

        {/* Crossroads Advisory */}
        <Row className="">
          <Col md={6} className="text-center">
            <Image 
              src="/Picture3.png" 
              alt="Crossroads Advisory" 
              fluid 
              rounded 
              className="shadow-lg" 
            />
          </Col>
          <Col md={6} className="px-4">
            <p className="text-white text-justify card-text ">
              {isSmallScreen && !showFullTextCA
                ? `${caText.substring(0, 150)}...`
                : caText}
              {isSmallScreen && (
                <span
                  className="text-primary cursor-pointer"
                  onClick={() => setShowFullTextCA(!showFullTextCA)}
                >
                  {showFullTextCA ? ' Read Less' : ' Read More'}
                </span>
              )}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
