import React from "react";
import { Container } from "reactstrap";
import '../../styles/common-section.css'
 

const CommonSection =({title})=>{
    return( 
    <section className="common__section">
            <div className="section-intro" >
            <h2  className="section-intro-title">
                <img src=""
                    alt=""/>
              {title} 
                <img src="" alt=""/>
            </h2>
        </div>
            
      

    </section>
    );
};

export default CommonSection;