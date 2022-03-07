import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

function FooterComponent() {
    return (
        <div className="footer">
            <p>© 2021 Webshop | Follow us on</p>
            <ul className="footer-list">
                <li className="footer-item"><a href="https://facebook.com/vodafonero" target="_blank" rel="noreferrer"><FaFacebookSquare/></a></li>
                <li className="footer-item"><a href="https://twitter.com/vodafonebuzz" target="_blank" rel="noreferrer"><FaTwitterSquare/></a></li>
                <li className="footer-item"><a href="https://www.linkedin.com/company/vodafone" target="_blank" rel="noreferrer"><FaLinkedin/></a></li>
                <li className="footer-item"><a href="https://instagram.com/vodafone.romania" target="_blank" rel="noreferrer"><FaInstagramSquare/></a></li>
            </ul>
        </div>
    );
}

export default FooterComponent;