import React from 'react'
import "./overlay.css";
import {Link} from "gatsby";

const Overlay = ({clazz, setClass}) => {
  
  const menuLinks = [
    {
      name: 'Etusivu',
      link: '/'
    },
    {
      name: 'Verkkovalmennus',
      link: '/verkkovalmennus'
    },
    {
      name: 'Blogi',
      link: '/blogi'
    },
    {
      name: 'Yhteystiedot',
      link: '/yhteystiedot'
    }
  ];
  
  const onChangeClass = () => {
    setClass('overlay')
  };
  
  return (
      <div className={`${clazz}`}>
        <div className='overlayContainer'>
          <div className='top'>
            <div className='logoBlock'>
              <Link className='logo' to="/">
                Terveet Tavat
              </Link>
            </div>
            <div className='btnBlock'>
              <div onClick={() => onChangeClass()} onKeyDown={() => onChangeClass()} role="button"
  tabIndex="0"
                   className='btnClosed'>X
              </div>
            </div>
          </div>
          <div className='navBlock'>
            <nav className='nav'>
              <ul className='list'>
                {menuLinks.map(link => (
                    <li className='item' key={link.name}>
                      <Link className='link' activeClassName='activeLink' to={link.link}>
                        {link.name}
                      </Link>
                    </li>
                ))}
              </ul>
            </nav>
          </div>
        
        </div>
      </div>
  )
  
};

export default Overlay

