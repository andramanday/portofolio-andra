import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import '../styles/footer.scss';
const Footer = () => {
    return(
        <footer>
            <ul>
                <li> <a className="text-primary" href="https://www.facebook.com/Dastan.Rizwan"><FaFacebook /><span className="tooltiptext">Facebook</span></a></li>
                <li> <a className="text-info" href="https://twitter.com/andramanday"><FaTwitter/><span className="tooltiptext">Twitter</span></a></li>
                <li> <a className="text-warning" href="https://www.instagram.com/storyofmdy/"><FaInstagram/><span className="tooltiptext">Instagram</span></a></li>
                <li> <a className="text-primary" href="https://www.linkedin.com/in/andramanday/"><FaLinkedin/><span className="tooltiptext">Linkedin</span></a></li>
                <li> <a className="text-danger" href="https://www.youtube.com/channel/UCebNH9-tHbTCnIyuqZjXPYA"><FaYoutube/><span className="tooltiptext">Youtube</span></a></li>
            </ul>
        </footer>
    )
}

export default Footer;