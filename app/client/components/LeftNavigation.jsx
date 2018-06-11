import React from 'react';

class LeftNavigation extends React.Component {
  render() {
    return <div className="sidebar" data-color="red" data-active-color="danger">
      <div className="logo">
        <a href="http://www.creative-tim.com" className="simple-text logo-mini">
          <div className="logo-image-small">
          </div>
        </a>
        <a href="http://www.creative-tim.com" className="simple-text logo-normal">
          Creative Tim
        </a>
      </div>
        <ul className="nav">
          <li className="active ">
            <a href="./dashboard.html">
              <i className="nc-icon nc-bank"></i>
              <p>Dashboard</p>
            </a>
          </li>
          <li>
            <a href="./icons.html">
              <i className="nc-icon nc-diamond"></i>
              <p>Icons</p>
            </a>
          </li>
          <li>
            <a href="./map.html">
              <i className="nc-icon nc-pin-3"></i>
              <p>Maps</p>
            </a>
          </li>
          <li>
            <a href="./notifications.html">
              <i className="nc-icon nc-bell-55"></i>
              <p>Notifications</p>
            </a>
          </li>
          <li>
            <a href="./user.html">
              <i className="nc-icon nc-single-02"></i>
              <p>User Profile</p>
            </a>
          </li>
          <li>
            <a href="./tables.html">
              <i className="nc-icon nc-tile-56"></i>
              <p>Table List</p>
            </a>
          </li>
          <li>
            <a href="./typography.html">
              <i className="nc-icon nc-caps-small"></i>
              <p>Typography</p>
            </a>
          </li>
          <li className="active-pro">
            <a href="./upgrade.html">
              <i className="nc-icon nc-spaceship"></i>
              <p>Upgrade to PRO</p>
            </a>
          </li>
        </ul>
    </div>
  }
}

export default LeftNavigation;