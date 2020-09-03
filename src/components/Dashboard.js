import React from "react";
import { Link, useHistory } from "react-router-dom";
const Dashboard = () => {

  const history = useHistory();
  const handleClick = () => history.push('/');

  return (
    <nav className='navbar navbar-inverse'>
      <ul className='nav navbar-nav'>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <button className='btn' onClick={handleClick}>
            Goodbye
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Dashboard;
