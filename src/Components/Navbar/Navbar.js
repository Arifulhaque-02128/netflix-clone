import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [bg, setBg] = useState(false);

    useEffect( () => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
              setBg(true)
            } else setBg(false);
          });
          return () => {
            window.removeEventListener("scroll")
        }
        // window.addEventListener('scroll', (e) => {
        //     e.preventDefault();
        //     window.scrollY < 100 ? setBg(true) : setBg(false);
        // });

        // return () => {
        //     window.removeEventListener("scroll");
        // };

    },[]);

    return (
        <div className={`navbar ${bg && "navbar_bg"}`}>
            <div className="nav-logo">
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png" alt="NETFLIX LOGO" />
            </div>
            <div className="nav-avatar">
                <img className="logo" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt="Avatar" />
            </div>
        </div>
    );
};

export default Navbar;