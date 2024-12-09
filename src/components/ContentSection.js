import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ContentSection = () => {
  return (
    <div className="d-flex justify-content-center " style={{marginTop:"90px",marginBottom:"10px"}}>
      <div
        className="p-5 rounded shadow-lg bg-white"
        style={{
          maxWidth: "80%",  // Ensures the container takes 70% of the viewport width
          lineHeight: "1.7",
        }}
      >
        {/* <h2 className="sec-color card-title ">Maraka Humanitarian Observatory</h2> */}
        <p className="fontPara text-justify card-text" >
        Maraka Humanitarian Observatory (MHO) is a joint initiative of Crossroads Advisory (CA) and Migration Research Cell (MRC), Department of Political Science, University of Peshawar. Women’s Regional Network has provided seed funding for the Observatory. Maraka is a Pashto word with variations in Dari/Hazargi/Persian and Shina languages, referring to a gathering of diverse people for articulating and discussing issues. The MHO aims to provide a platform for multiple actors to discuss emerging trends in humanitarian governance; it seeks to facilitate collaboration through learning, exchange, strategic thinking and calls for action. 
        </p>

        <h3 className="sec-color card-title mt-4 ">Background</h3>
        <p className="fontPara text-justify card-text">
        Humanitarian Observatories provide organised spaces for diverse groups including governmental, non-governmental organizations, and bi- and multi-lateral institutions to critically engage with issus of humanitarian governance. The MHO is mandated to provide contextualised inputs into issues of humanitarianism and humanitarian governance, areas that are usually dominated by a top-down generated discourse focused on regional or global perspectives. 
        </p>

        <h3 className="sec-color card-title mt-4">Need</h3>
        <p className="fontPara text-justify card-text">
        Out of the 4 million registered and non-registered Afghan refugess hosted by Pakistan, 58 % reside in the Khyber Pakhtunkhwa province, where the University of Peshawar is located and where the MHO is hosted. These Afghan refugees, now at the center of the securitization debates in the country have faced forcible deportations, and dehmanization. The huge refugee population, regular conflict displacements, climate catastrophes and proliferating terrorist attacks in Pakistan has made the creation of Humanitarian Observatory long over due.
        </p>

        <h3 className="sec-color card-title mt-4">Purpose</h3>
        <p className="fontPara text-justify card-text">
        The MHO is envisioned as a hub for meaningful exchange, learning, research and action on local and global humanitarian governance issues. It aims to include among its membership key stakeholders from diverse civil society groups, including academia, media, non-government institutions, public intellectuals , independent researchers and business community representatives and provide them with a platform through monthly meetings at the Department of Political Science’s Migration Research Cell, Peshawar and Crossroads Advisory in Islamabad.
        </p>
      </div>
    </div>
  );
};

export default ContentSection;
