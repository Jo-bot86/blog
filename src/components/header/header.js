import React from 'react';
import { Link } from 'react-router-dom'

import GitHub from './github-logo';
import Email from './email-logo';
import LinkedIn from './linkedin-logo';
import './header.css';

export default function header() {
  return (
    <div>
      <Link to="/" style={{ textDecoration: "none" }}><h1 className="name">Josef <br /> Weldemariam</h1></Link>
      <ul className="header_links">
        <li className="icon_link">
          <a href="https://github.com/Jo-bot86">
            <GitHub />
          </a>
        </li>
        <li className="icon_link">
          <a href="mailto:j.weldemariam@web.de">
            <Email />
          </a>
        </li>
        <li className="icon_link">
          <a href="https://www.linkedin.com/in/josef-weldemariam-1b287b201/">
            <LinkedIn />
          </a>
        </li>
      </ul>

    </div>
  )
}
