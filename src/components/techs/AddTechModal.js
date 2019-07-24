import React , {useState} from "react" ;
import M from "materialize-css/dist/js/materialize.min.js"
import {connect} from "react-redux" ;
import {addTech} from "../../actions/techAction" ;


const AddTechModal = ({addTech}) =>{
const [firstName , setFirstName] =useState('');
const [lastName , setlastName] = useState("");


const onSubmit = ()=>{
    if (firstName == '' || lastName == ''){
        M.toast({html:"Please enter Firstname  and lastName"})
    } else {
        addTech({
           firstName ,
           lastName
        })
        M.toast({html:"added succesgully "})
        setFirstName('')
        setlastName('')

    }

}

    return (
        <div id="add-tech-modal" className="modal" >
            <div className="modal-content">
               <h4>New Tech</h4> 
               <div className="row">
                <div className="input-field">
                    <input type="text" name="firstName"  value={firstName} onChange ={e =>setFirstName (e.target.value)}/>
                <label htmlFor="firstName" className="active" >firstName</label>
                </div>
               </div>

               <div className="row">
                <div className="input-field">
                    <input type="text" name="lastName"  value={lastName} onChange ={e =>setlastName (e.target.value)}/>
                <label htmlFor="lastName" className="active" >lastName</label>
                </div>
               </div>

              
            </div>
            <div class="modal-footer">
                                <a href="" onClick={onSubmit} className="modal-close waves-effect waves-green btn-flat">Enter</a>
            </div>
        </div>
    )
}



export default connect(null , {addTech}) (AddTechModal) ;