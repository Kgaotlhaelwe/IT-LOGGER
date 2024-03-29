import React , {useRef} from "react";

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import { searchLogs } from '../../actions/logAction';

const SearchBar = ({ searchLogs}) => {
    const text = useRef('')


  const onChange = e =>{
        searchLogs(text.current.value)
    }
    return (
        <nav style= {{marginBottom:'30px'}} className="blue">
            <div class="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" placeholder="Search logs "  ref={text} onChange={onChange} required />
                        <label className="label-icon" htmlFor="search"><i class="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    )
}


export default connect(null , {searchLogs}) (SearchBar)