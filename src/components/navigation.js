import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from 'antd';

const navLinks = [
  {
    title: 'ANASAYFA',
    path: '/home'
  },
  {
    title: 'webdev',
    path: '/web-dev'
  },
  {
    title: 'detay ulan!',
    path: '/post-detail'
  },
  {
    title: 'cloud',
    path: '/cloud'
  },
  {
    title: 'algos',
    path: '/algos'
  },
  {
    title: 'Health',
    path: '/health'
  },
  {
    title: 'Giriş Yap',
    path: '/admin/admin-login'
  }
]

export default function Navigation() {
  const [menuActive, setMenuActive] = useState(false)
  var localMail = localStorage.getItem('mail');

  if (localMail != null) {

    navLinks.forEach(x => {
      if (x.title == "Giriş Yap") {
        x.title = localMail.toString();
      }
    })


    console.log(navLinks);
  }
  const test = (link,index) => {
    if(link.title==localStorage.getItem('mail')){
      return(
        <li key={index}>
        <Link style={{'padding-left':'40%'}} to={link.path}>{link.title}</Link>
      </li>
      )
    }
    else {return (
      <li key={index}>
        <Link to={link.path}>{link.title}</Link>
      </li>
    );}
  }
  return (
    <nav className={`site-navigation ${menuActive && 'active'}`} role="navigation">
      <span className="menu-title">Ferdi Tezcan | Yazılım</span>
      <div
        className="menu-content-container"
      >
        <ul>
          {navLinks.map((link, index) => (
            test(link,index)
          ))
          }
        </ul>
        {/* <div className="menu-avatar-container">
                <Avatar size={50} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <span className="menu-avatar-name">Login</span>
            </div> */}
      </div>
      <i
        className="icon ionicons ion-ios-menu"
        onClick={(ev) => setMenuActive(!menuActive)}
      />
    </nav>
  )
}