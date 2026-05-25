import React,{Component} from 'react';
//the pros that are sending from app compnent are already stored in the childern component by default 
import{Link} from 'react-router-dom';
class ListContacts extends Component{
state ={
query : ''
}
// changing the state depends on the value wich the input has written down
changeHandler =(e) =>{

    this.setState({
        query:e.currentTarget.value
    })
       
   }

   //removing the specific contact that we passed in when we invoke the follow function
   removeContact=(e)=>{
    e.currentTarget.parentElement.remove();
   }

     //showing all contacts 
   

   
    render(){
   // store the props as avariable 
   const {contacts} = this.props;
   let {query}  = this.state;   

    // filter the contacts depends on the new value has written down in the query state 
    const filterContacts = query ==="" 
    ? contacts 
    : contacts.filter((c)=>(
        c.name.toLowerCase().includes(query.toLowerCase())
    ))
  
return(

    <div className='list-contacts'>

        <div className='list-contacts-top'>
            <input className='search-contacts'
            placeholder='search here' 
            type='text'
            value={query}
            onChange={this.changeHandler}
            />
            <Link to='/create'
                  className="add-contact"
            >add contact</Link>
        </div>
     
      
        {filterContacts.length !== contacts.length &&  ( 
        <div className='showing-contacts'>
         <span>  now showing {filterContacts.length} of {contacts.length}</span>  
          <button>showing all</button>  
        </div>
        )
        }
        
        
<ol className='contact-list'>
{filterContacts.map(contact =>{

return(
    <li key={contact.id} 
        className="contact-list-item">
       <div className='contact-avatar' 
            style={{backgroundImage: `url(${contact.avatarURL})`}}>

        </div>
        <div className='contact-details'>
         <p>{contact.name}</p> 
         <p>{contact.handle}</p>   
        </div>
        <button 
        className='contact-remove'
        onClick={this.removeContact}></button>
    </li>
)})}


</ol>
</div>


)


    }
}
export default ListContacts;