import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="text-center">
                © {new Date().getFullYear()} |
                Made by <a href="https://prolab.kg/">PROlab LLC</a> and <a href="https://www.instagram.com/_oroz._/"> ZhOroz</a></div>
        </footer>
    );
};

export default Footer;