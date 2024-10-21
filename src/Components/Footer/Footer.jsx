import React from 'react';
import './footer.css'; 
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container text-center">
                <p>&copy; {new Date().getFullYear()} NexBot pvt.ltd.  </p>
                <ul className="footer-links">
                    <li><a>Privacy Policy</a></li>
                    <li><a>Terms of Service</a></li>
                    <li><Link  to={"/contact"}>Contact Us</Link></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
