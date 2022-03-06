import React, { Component } from 'react'
import{Link} from 'react-router-dom';
import ImageInput from './ImageInput';
import * as ContactsAPI from './utils/ContactsAPI';
import serialize from 'form-serialize'
class creatContact extends Component {
    
 

    submitForm=(e)=>{
        e.preventDefault();
        const values= serialize(e.target , {hash:true})

        if(this.props. onCreateContact){
            this.props. onCreateContact(values)
        }
    }
    render() {
        return (
            <div>
                <Link to="/"
                      className='close-create-contact'
            />
            <form onSubmit={this.submitForm} className='create-contact-form'>

            <ImageInput 
            className='create-contact-avatar-input'
            name="avatarURL"
            maxHeight={64}
            
            />
            <div className='create-contact-details'>
                <input type='text' name='name' placeholder='name'/>
                <input type='text' name='handle' placeholder='number' />
                <button className=''>add contact</button>
            </div>
          </form>

            </div>
        );
    }
}

export default creatContact;
