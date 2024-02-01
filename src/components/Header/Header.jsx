import React, { useState } from 'react';
import './Header.scss';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [filled,setFilled] = useState(false);

  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      setIsDropdownOpen(false);
    }
  }

  const handleNotification = () => {
    setFilled(filled === true ? false : true);
  }

  return (
    <div className='header'>
      <div className='notification' onClick={()=>handleNotification()}>
        {filled === true ? <NotificationsOutlinedIcon color='primary'/> : <NotificationsIcon color='primary'/>}
      </div>
      <div className='user'>
        <img src='../../images/profile.jpg' alt='' />
        <div className='name'>
          <span>Abhishek Malik</span>
          <span>admin</span>
        </div>
      </div>
      <div className="dropdown" style={{ marginRight: "3%" }} onClick={toggleDropdown}>
        <div className="dropbtn">⌄</div>
        <div id="myDropdown" className={isDropdownOpen ? 'dropdown-content show' : 'dropdown-content'}
        style={{marginRight:"5%"}}>
          <a href="https://leetcode.com/abhishek_0040/"><img src='../../images/leetcode.png' alt=''/>Leetcode</a>
          <a href="https://www.codechef.com/users/abhishek_2310a"><img src='../../images/codechef.png' alt=''/>Codechef</a>
          <a href="https://codeforces.com/profile/AbhishekKu_AK47"><img src='../../images/codeforces.png' alt=''/>codeforces</a>
          <a href="https://www.linkedin.com/in/abhishek-kumar-031a81235/"><img src='../../images/linkedin.png' alt=''/>Linked In</a>
        </div>
      </div>
    </div>
  );
}

export default Header;


{/* <KeyboardArrowDownOutlinedIcon fontSize='medium' /> */}