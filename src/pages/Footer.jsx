import copyrightSign from "../assets/icons/copyright-sign.svg";
import footerLogo from "../assets/images/footer-logo.svg";
import { footerLinks, socialMedia } from "../constants";
import '../styles/Footer.css'


const Footer = () => {
    return (
        <>
            <footer className="footer">
                {/* Top Section */}
                <div className="footer-top">
                    {/* Logo Section */}
                    <div className="footer-logo">
                        <a href="/">
                            <img src={footerLogo} alt="logo" width={150} height={46} />
                        </a>
                        <p className="footer-description">
                            Get shoes ready for the new term at your nearest Nike store. Find your perfect size in store. Get rewards.
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="footer-social-icons">
                        {socialMedia.map((icon) => (
                            <div key={icon.alt} className="social-icon">
                                <img src={icon.src} alt={icon.alt} width={24} height={24} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Links Section */}
                <div className="footer-links">
                    {footerLinks.map((section) => (
                        <div key={section.title} className="footer-column">
                            <h4 className="footer-column-title">{section.title}</h4>
                            <ul>
                                {section.links.map((link) => (
                                    <li key={link.name} className="footer-link-item">
                                        <a href={link.href} className="footer-link">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <img src={copyrightSign} alt="copyright" width={20} height={20} />
                        <p>Copyright. All rights reserved. Ashif S</p>
                    </div>
                    <p>Terms & Conditions &copy; 2024</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
