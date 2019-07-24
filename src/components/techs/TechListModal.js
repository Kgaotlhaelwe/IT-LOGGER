import React, { useState, useEffect } from "react";
import  TechItem from "./TechItems" ;
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import  {getTechs} from "../../actions/techAction" ;


const TechListModal= ({getTechs, tech:{techs , loading}}) => {
   

    useEffect(() => {
        getTechs();

        //estLint-disable-next-line
    }, [])



  

    
    return (

        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician List </h4>

                {!loading &&  techs !== null && techs.map(tech =>(
                    <TechItem tech={tech}  key={tech.id}/>
                ))}

            </div>
        </div>

    )
}


const mapStateToProps = state => ({
    tech: state.tech
  });

export default connect(mapStateToProps , {getTechs}) (TechListModal) 