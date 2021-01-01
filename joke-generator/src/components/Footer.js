import React from 'react';
import './Footer.css';


function Footer(props) {
    return (
        <div className="footer">
            <a href="https://www.youtube.com"><i className="fab fa-youtube fa-2x"></i></a>
            <a href="https://www.twitter.com"><i className="fab fa-twitter fa-2x"></i></a>
            <a href="https://www.facebook.com"><i className="fab fa-facebook-square fa-2x"></i></a>

            <span id="copyright">Take A Break, Inc. &#169;</span>
            
       </div>
    );
}

export default Footer;