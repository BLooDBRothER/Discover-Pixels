import React, {useEffect} from "react";
import {FaFontAwesomeFlag, FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa';
import {RiRemixiconLine} from 'react-icons/ri';


const Credit = ({ setIsNavbarVisible }) => {
  useEffect(() => {
    setIsNavbarVisible(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="credit">
      {/* <img className="credit--logo" src={logo} alt="logo"/> */}
      <div className="credit-project">
        <h2 className="credit--title">About This Project</h2>
        <div>
          <div>
            <p className="credit--info">Hi!! This is my first <span className="accent">React</span> project. I developed this project for learning purpose.</p>
            <h3 className="credit--info">What I have <span className="accent">Used</span></h3>
            <ul className="credit--list">
              <li>React Hooks</li>
              <li>Custom hooks</li>
              <li>React Routing</li>
              <li>React Responsive</li>
              <li>React Icons</li>
              <li>IntersectionObserver</li>
              <li>Pixabay API</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="credit-thanks">
        <h2 className="credit--title credit--title-center">Thanks To</h2>
        <div className="credit--img">
          <a href="https://pixabay.com/" target="_blank" title="pixabay" rel="noreferrer"><img className="credit--thanks-logo credit--pixabay" src="https://pixabay.com/static/img/logo.svg" alt="pixabay api"/></a>
          <a href="https://fontawesome.com/" target="_blank" title="font-awesome" rel="noreferrer"><FaFontAwesomeFlag className="credit--thanks-logo credit--fa" /></a>
          <a href="https://remixicon.com/" target="_blank" title="remix" rel="noreferrer"><RiRemixiconLine className="credit--thanks-logo credit--ri" /></a>
        </div>
        <div className="credit--home-img">
          <p>
            Home page Photo by <a href="https://unsplash.com/@cmreflections?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Clément M.</a> on <a href="https://unsplash.com/s/photos/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </p>
          <p>
            Home page Video by <a href="https://www.pexels.com/@yaroslav-shuraev"> Enrique Hoyos.</a> on <a href="https://www.pexels.com">Pexels</a>
          </p>
        </div>
      </div>
      <div className="credit-my-profile">
        <h2 className="credit--title credit--title-center no-background">My Profile</h2>
        <div className="credit-prof-ic">
          <a href="https://github.com/bloodbrother" target="_blank" title="github" rel="noreferrer"><FaGithub className="credit-my-profile-ic" /></a>
          <a href="https://linkedin.com/in/arul-murugavel" target="_blank" title="linkedin" rel="noreferrer"><FaLinkedin className="credit-my-profile-ic" /></a>
          <a href="mailto:arulmurugavel04b@pm.me" target="_blank" title="mail me" rel="noreferrer"><FaEnvelope className="credit-my-profile-ic" /></a>
        </div>
      </div>
    </div>
  )
};

export default Credit;
