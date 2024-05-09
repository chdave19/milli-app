import React from 'react'
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialGithub } from "react-icons/sl";
import { SiStrapi } from "react-icons/si";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Footer() {
  return (
    <div className='footer'>
      <ul className='icon-lists'>
        <li><a href="https://x.com/ch_dave19?t=NgbKHbFBAcU3Lde5_AFy5Q&s=03" target='_blank' rel='noreferrer'><TiSocialTwitter/></a></li>
        <li><a href="https://github.com/chdave19/milli-app.git" target='_blank' rel='noreferrer'><SlSocialGithub/></a></li>
        <li><a href="https://opentdb.com/api_config.php" target='_blank' rel='noreferrer'><SiStrapi/></a></li>
        <li><a href="mailto:chigoziedavid729@gmail.com" target='_blank' rel='noreferrer'><MdOutlineMailOutline/></a></li>
      </ul>
      <span>chdave19 &copy;</span>
    </div>
  )
}
