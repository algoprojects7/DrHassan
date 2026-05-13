import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <AppLogo size={28} />
          <span className="font-display text-sm text-muted-foreground font-medium">
            Dr. Mostaque Hassan
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-8 flex-wrap justify-center">
          <a
            href="#about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
          <a
            href="#research"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Research
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/dr-mostaque-hassan-82921b8a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://scholar.google.co.in/citations?user=rkI0qWgAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
          >
            Google Scholar
          </a>
          <a
            href="https://orcid.org/0009-0009-3551-4160"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
          >
            ORCID
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground font-medium flex items-center justify-center gap-1.5 mt-4 md:mt-0">
          © {new Date().getFullYear()} Dr. Mostaque Hassan{' '}
          <span className="text-border mx-1">·</span>
          <Link
            href="/privacy"
            className="hover:text-primary transition-colors hover:underline underline-offset-2"
          >
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}
