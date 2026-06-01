'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  // Helper for anchor links: if we are on home page, use #anchor. 
  // If we are on another page, use /#anchor to navigate back to home then scroll.
  const getAnchor = (id) => pathname === '/' ? `#${id}` : `/#${id}`;

  return (
    <nav id="mainNav" className={`${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <Link href="/" className="nav-logo" aria-label="Audecy AI Home" onClick={closeMenu}>
        <img src="/logo.png" alt="Audecy AI" className="nav-logo-img" />
      </Link>
      <button className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
        <div className="hamburger"><span></span><span></span></div>
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link href="/about" onClick={closeMenu}>About</Link></li>
        <li><Link href="/team" onClick={closeMenu}>Team</Link></li>
        <li><Link href={getAnchor('services')} onClick={closeMenu}>Services</Link></li>
        <li><Link href={getAnchor('process')} onClick={closeMenu}>Process</Link></li>
        <li><Link href={getAnchor('why')} onClick={closeMenu}>Why Us</Link></li>
        <li><Link href={getAnchor('testimonials')} onClick={closeMenu}>Testimonials</Link></li>
        <li><Link href={getAnchor('contact')} className="nav-cta-mobile" onClick={closeMenu}>Start a Project</Link></li>
      </ul>
      <Link href={getAnchor('contact')} className="nav-cta" onClick={closeMenu}>Start a Project</Link>
    </nav>
  );
}
