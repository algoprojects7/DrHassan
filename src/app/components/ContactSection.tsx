'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dr-mostaque-hassan-82921b8a',
    icon: 'LinkIcon',
    handle: 'dr-mostaque-hassan-82921b8a',
  },
  {
    name: 'Google Scholar',
    url: 'https://scholar.google.co.in/citations?user=rkI0qWgAAAAJ&hl=en',
    icon: 'MagnifyingGlassIcon',
    handle: 'rkI0qWgAAAAJ',
  },
  {
    name: 'ORCID',
    url: 'https://orcid.org/0009-0009-3551-4160',
    icon: 'IdentificationIcon',
    handle: '0009-0009-3551-4160',
  },
  {
    name: 'ResearchGate',
    url: 'https://www.researchgate.net',
    icon: 'BeakerIcon',
    handle: 'ResearchGate Profile',
  },
];

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend integration point — connect to email service or API here
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      {/* Atmospheric glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blob-primary pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 items-end gap-12 mb-16 section-reveal">
          <div>
            <span className="text-accent font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
              // Contact
            </span>
            <h2 className="font-display text-section-title font-bold text-foreground">
              Get In <span className="gradient-text-indigo">Touch</span>
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Open to research collaborations, academic invitations, industry partnerships, and
            speaking engagements.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-7 section-reveal">
            {submitted ? (
              <div className="glass-card rounded-2xl p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                  <Icon name="CheckIcon" size={28} className="text-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  Message Received
                </h3>
                <p className="text-muted-foreground max-w-sm">
                  Thank you for reaching out. Dr. Hassan will respond to your inquiry within 2–3
                  business days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 px-6 py-3 border border-border text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground hover:border-accent transition-colors rounded-sm"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Dr. Jane Smith"
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="jane@university.edu"
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-2">
                    Organization / Institution
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formState.organization}
                    onChange={handleChange}
                    placeholder="MIT / Google / Independent"
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
                  >
                    <option value="">Select a topic...</option>
                    <option value="research-collaboration">Research Collaboration</option>
                    <option value="speaking-invitation">Speaking / Conference Invitation</option>
                    <option value="industry-partnership">Industry Partnership</option>
                    <option value="student-inquiry">Student Inquiry</option>
                    <option value="media">Media / Press</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Please describe your inquiry, research interest, or collaboration proposal..."
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-[0.25em] hover:bg-accent hover:text-accent-foreground transition-all duration-300 rounded-sm flex items-center justify-center gap-2"
                >
                  <Icon name="PaperAirplaneIcon" size={14} />
                  Send Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Right: Info + Social links */}
          <div className="lg:col-span-5 section-reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="space-y-6 lg:sticky lg:top-28">
              {/* Contact info */}
              <div className="glass-card-navy rounded-2xl p-7">
                <h3 className="font-display font-semibold text-foreground text-base mb-5">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon
                      name="BuildingOfficeIcon"
                      size={16}
                      className="text-accent mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Algoguido Technologies Pvt. Ltd.
                      </p>
                      <p className="text-xs text-muted-foreground">Director cum Founder</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon
                      name="MapPinIcon"
                      size={16}
                      className="text-accent mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <p className="text-sm font-medium text-foreground">Home Address</p>
                      <p className="text-xs text-muted-foreground">
                        AEC Road, Sundarbari, Jalukbari
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Guwahati - 14, Kamrup Metro (Assam)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="EnvelopeIcon" size={16} className="text-accent flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">mostaq786@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="PhoneIcon" size={16} className="text-accent flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">+91-8638526521</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="glass-card rounded-2xl p-7">
                <h3 className="font-display font-semibold text-foreground text-base mb-5">
                  Academic Profiles
                </h3>
                <div className="space-y-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary/10 transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon name={link.icon as 'LinkIcon'} size={16} className="text-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                          {link.name}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">{link.handle}</p>
                      </div>
                      <Icon
                        name="ArrowTopRightOnSquareIcon"
                        size={14}
                        className="text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0"
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* CV Download */}
              <a
                href="/assets/cv-dr-hassan.pdf"
                download
                className="flex items-center justify-center gap-3 w-full py-4 border border-accent/30 bg-accent/10 rounded-xl text-sm font-bold text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Icon name="ArrowDownTrayIcon" size={16} />
                Download Full CV / Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
