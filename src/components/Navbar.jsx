import React from "react";

import { useRef } from "react";
const Navbar = () => {
    const lastActiveLink = useRef();
    const navItems = [
        {
          label: 'Home',
          link: '#home',
          className: 'nav-link active',
          ref: lastActiveLink
        },
        {
          label: 'About',
          link: '#about',
          className: 'nav-link'
        },
        {
          label: 'Work',
          link: '#work',
          className: 'nav-link'
        },
        {
          label: 'Reviews',
          link: '#reviews',
          className: 'nav-link'
        },
        {
          label: 'Contact',
          link: '#contact',
          className: 'nav-link md:hidden'
        }
      ];    
    return (
       <nav className={'navbar '}>
        {navItems.map(({ label, link, className, ref },key) => (
            <a href={link} 
            className={className}
            ref={ref}
            key={key}
            onClick={null}
            >
                {label}
            </a>
        ))}
       </nav>
    );
}
export default Navbar;