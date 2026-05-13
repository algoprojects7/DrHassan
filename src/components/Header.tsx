'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Teaching', href: '#teaching' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-border' :'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <AppLogo size={36} />
            <span className="font-display font-semibold text-base text-foreground hidden sm:block leading-tight">
              Dr. Hassan
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks?.map((link) => (
              <a key={link?.href} href={link?.href} className="nav-link">
                {link?.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="/assets/cv-dr-hassan.pdf"
              download
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-all duration-300 rounded-sm"
            >
              <Icon name="ArrowDownTrayIcon" size={14} />
              Download CV
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex items-center justify-center w-11 h-11 border border-border rounded-sm text-muted-foreground hover:text-foreground hover:border-accent transition-colors"
              aria-label="Toggle menu"
            >
              <Icon name={menuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={20} />
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col pt-24 px-8 pb-10">
          <nav className="flex flex-col gap-6 flex-1">
            {navLinks?.map((link) => (
              <a
                key={link?.href}
                href={link?.href}
                onClick={handleNavClick}
                className="text-2xl font-display font-semibold text-foreground border-b border-border pb-4 hover:text-accent transition-colors"
              >
                {link?.label}
              </a>
            ))}
          </nav>
          <a
            href="/assets/cv-dr-hassan.pdf"
            download
            className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-all duration-300 rounded-sm mt-6"
          >
            <Icon name="ArrowDownTrayIcon" size={16} />
            Download CV
          </a>
        </div>
      )}
    </>
  );
}