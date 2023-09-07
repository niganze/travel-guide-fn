import '../css/admin.css'
import queen from "../assets/queen.jpg" 
import {AiOutlineDashboard} from 'react-icons/ai'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineUsergroupDelete} from 'react-icons/ai'
import {VscFeedback} from 'react-icons/vsc'
import { useState } from 'react'
import Getting from './getting'
const AdminDashBoard = () => {
    const [activeLink, setActiveLink] = useState('dashboard');


    const handleLinkClick = (link) => {
        setActiveLink(link);
      };
      let displayComponent;
      if (activeLink === 'dashboard') {
        displayComponent = "dashboard";
      } else if (activeLink === 'create') {
        displayComponent = <Getting/>;
      }
       else if (activeLink === 'users') {
        displayComponent = "users";
      }

       else if (activeLink === 'feedbacks') {
        displayComponent = "feedbacks";
      }

    return ( <>
    
    
    
    
<div className='dashContainer'>
  <section className='dashNav'>
        <div className='avatarUser'>
            <img src={queen}  alt="queen" />
            <p>Nsenga Queen </p>
    </div>
    <div className='dashNavLinks'>

<div className={`linkContainer ${activeLink === 'dashboard' ? 'activeDashLink' : '' } `    } onClick={() => handleLinkClick('dashboard')}>
    <div><AiOutlineDashboard/></div>
    <p>Dashbboard</p>
</div>
<div className={`linkContainer ${activeLink === 'create' ? 'activeDashLink' : '' } `    }onClick={() => handleLinkClick('create')}>
    <div><AiOutlinePlus/></div>
    <p>Create destination</p>
</div>
<div className={`linkContainer ${activeLink === 'users' ? 'activeDashLink' : '' } `    } onClick={() => handleLinkClick('users')}>
    <div><AiOutlineUsergroupDelete/></div>
    <p>Users</p>
</div>
<div className={`linkContainer ${activeLink === 'feedbacks' ? 'activeDashLink' : '' } `    } onClick={() => handleLinkClick('feedbacks')}>
    <div><VscFeedback/></div>
    <p>Feedbacks</p>
</div>

    </div>
    
    
    </section>  
  <section className='dashDisplay'>
  {displayComponent}
    </section>  
    
</div>    
    
    
    
    
    
    
    </> );
}
 
export default AdminDashBoard;