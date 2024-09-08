import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social Media Icons

const Footer = () => {
    return (
        <footer style={footerContainerStyle}>
            <div style={footerSectionStyle}>
                <div style={footerColumnStyle}>
                    <h3>Expense Tracker</h3>
                    <p>Manage your expenses efficiently and easily.</p>
                </div>

                <div style={footerColumnStyle}>
                    <h4>Quick Links</h4>
                    <ul style={footerListStyle}>
                        <li><a href="/home" style={linkStyle}>Home</a></li>
                        <li><a href="/" style={linkStyle}>Transaction</a></li>
                        <li><a href="/add-transaction" style={linkStyle}>Add Transaction</a></li>
                    </ul>
                </div>

                <div style={footerColumnStyle}>
                    <h4>Follow Us</h4>
                    <div style={socialIconsStyle}>
                        <a href="https://www.linkedin.com/in/shriya-borkar-15465122b/" style={iconLinkStyle}><FaLinkedin /></a>
                        <a href="https://facebook.com" style={iconLinkStyle}><FaFacebook /></a>
                        <a href="https://instagram.com" style={iconLinkStyle}><FaInstagram /></a>
                    </div>
                </div>
            </div>

            <div style={footerBottomStyle}>
                <p>&copy; {new Date().getFullYear()} Expense Tracker. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

// Styling
const footerContainerStyle = {
    backgroundColor: 'white',
    color: 'black',
    padding: '10px',
    textAlign: 'center',
    bottom: 0,
    left: 0,
};

const footerSectionStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'start',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
};

const footerColumnStyle = {
    flex: '1',
    minWidth: '200px',
    margin: '10px 0',
    fontSize: '20px',
};

const footerListStyle = {
    fontSize: '20px',
    listStyleType: 'none',
    padding: 0,
};

const linkStyle = {
    color: 'black',
    textDecoration: 'none',
};

const socialIconsStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '25px',
    marginTop: '10px',
};

const iconLinkStyle = {
    color: 'black',
    fontSize: '35px',
};

const footerBottomStyle = {
    marginTop: '20px',
    borderTop: '1px solid #444',
    paddingTop: '20px',
    fontSize: '14px',
};

export default Footer;
