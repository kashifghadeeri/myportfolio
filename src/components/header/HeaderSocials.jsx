import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/mohammed-ali-kashif-253b58215/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/kashifghadeeri" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/kas.coder/" target="_blank" rel="noreferrer" ><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocials