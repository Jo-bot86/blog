import React from 'react';
import {Link} from 'react-router-dom';

import './style.css'

export default function body() {
  return (
    <div className="posts">
      <Link to="/mediaQuerie" style={{ textDecoration: "none", color: "white" }}>Media que</Link>
    </div>
  )
}
