
import React from "react";
// import '../Style/styles.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="large-4 columns">
                {/* <h2 className='my-name'>Aditya Kumar</h2> */}
                <p class="madewithlove">
                    Made with <i className="fa fa-heart" style={{ color: "red" }}></i> in India
                </p>
            </div>
            <p>
                <span className="copyright-section">
                    {" "}
                    <a href="https://github.com/adityapal87" target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-github"></i> {new Date().getFullYear()} -
                        Aditya Kumar
                    </a>
                </span>
            </p>
        </div>
    );
};

export default Footer;
