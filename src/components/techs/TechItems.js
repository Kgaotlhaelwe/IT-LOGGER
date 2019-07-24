import React from "react" ;
import {connect} from "react-redux" ;
import {deleteTech} from "../../actions/techAction"
import M from "materialize-css/dist/js/materialize.min.js"
import PropTypes from "prop-types" ;


const TechItem =  ({tech , deleteTech})=>{
   const onDeleteTech  =() =>{
    deleteTech(tech.id);
    M.toast({html:"Deleted successfully "})
   }
    return (
        <li className='collection-item'>
      <div>
        {tech.firstName} {tech.lastName}
        <a href='#!' className='secondary-content'  onClick={onDeleteTech}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
       
    )

}

TechItem.prototype = {
tech: PropTypes.object.isRequired
}

export default connect(null , {deleteTech}) (TechItem) ;