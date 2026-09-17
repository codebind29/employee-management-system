import React, { useEffect, useState } from 'react';

const Header = (props) => {
  const [isLight, setIsLight] = useState(() => localStorage.getItem('theme') === 'light');

  useEffect(() => {
    document.documentElement.dataset.theme = isLight ? 'light' : 'dark';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  }, [isLight]);

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  return (
    
    <div className='topbar'>
      <div>
        <p className='eyebrow'>Workspace / {props.data?.email || 'Admin'}</p>
        <h1 className='welcome'>Hello, <span>{props.data?.firstName || 'Admin'}</span></h1>
      </div>
      <div className='header-actions'>
        <button className='icon-button' onClick={() => setIsLight((value) => !value)} aria-label='Toggle color theme'>
          {isLight ? 'Dark mode' : 'Light mode'}
        </button>
        <button onClick={logOutUser} className='logout-button'>Log out</button>
      </div>
    </div>
  );
};

export default Header;