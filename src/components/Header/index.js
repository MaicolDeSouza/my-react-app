import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        <FaHome size={30} />
      </Link>
      <Link to="Usuario">
        <FaUserAlt size={24} />
      </Link>
      <Link to="Login">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}
