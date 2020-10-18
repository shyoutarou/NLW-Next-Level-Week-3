import React, { ButtonHTMLAttributes, LinkHTMLAttributes } from 'react';

import '../styles/components/primarybutton.css';

interface PrimaryButtonProps extends LinkHTMLAttributes<HTMLLinkElement> {
  children: React.ReactNode
}

export default function PrimaryButton({ children, ...props }: PrimaryButtonProps) {
  return (

  <a
    className="primary-button"        
    href={props.href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>    
   
    // <button className="primary-button" {...props}>

    // </button>
  );
}