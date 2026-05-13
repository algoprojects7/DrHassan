import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const highlights = [
  { icon: 'AcademicCapIcon', label: 'PhD — Computer Science, Gauhati University (2019)' },
  { icon: 'BeakerIcon', label: 'Pursuing Post-Doctoral Fellow, Eudoxia Research University, USA' },
  { icon: 'DocumentTextIcon', label: '157+ Google Scholar Citations' },
  { icon: 'LightBulbIcon', label: '5 Patents (Indian & UK) — Published & Filed' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left: Portrait + stat card */}
          <div className="lg:col-span-4 xl:col-span-4 section-reveal flex flex-col items-center lg:items-end">
            <div className="relative group w-full max-w-[280px] mx-auto lg:mx-0">
              <div className="absolute -inset-3 blob-primary opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
              
              <div className="relative rounded-2xl overflow-hidden border border-border aspect-[3/4] shadow-sm mb-4">
                <AppImage
                  src="/images/profile.jpg"
                  alt="Professional portrait of Dr. Mostaque Md. Morshedur Hassan"
                  fill
                  className="object-cover object-top transition-all duration-700"
                  sizes="(max-width: 768px) 280px, 280px" />
              </div>

              <div className="glass-card rounded-xl p-5 relative z-10 w-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulseGlow" />
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Currently Active
                  </span>
                </div>
                <p className="text-sm font-semibold text-foreground">
                  Director cum Founder
                </p>
                <p className="text-xs text-muted-foreground mt-1">Algoguido Technologies Pvt. Ltd.</p>
              </div>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {highlights.map((h) =>
              <div key={h.label} className="glass-card rounded-xl p-4 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name={h.icon as 'AcademicCapIcon'} size={16} className="text-accent" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground leading-snug">
                    {h.label}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Biography */}
          <div className="lg:col-span-8 section-reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="space-y-8">
              <div>
                <span className="text-accent font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
                  // About
                </span>
                <h2 className="font-display text-section-title font-bold text-foreground mb-6">
                  Biography
                </h2>
                <div className="hud-line mb-8 w-24" />
              </div>

              <div className="space-y-5 text-base text-foreground font-medium leading-relaxed text-justify">
                <p>
                  A dedicated academic leader, AI researcher, and industry practitioner with over 19 years of experience in higher education, research, and industry-integrated training. Currently rendering services as Director cum Founder at <a href="https://algoguido.com" target="_blank" rel="noopener noreferrer" className="font-bold text-foreground hover:text-accent transition-colors">Algoguido Technologies Private Limited</a>, Guwahati, leading initiatives in data science, AI-driven solutions, and skill development through industry-oriented, project-based learning, while actively contributing to talent mentoring and research-driven innovation.
                </p>
                <p>
                  Holding a PhD in Computer Science (Gauhati University, 2019) and pursuing a Post-Doctoral Fellowship at Eudoxia Research University, USA, my research interests include AI, Machine Learning, Network Security and GAN-based Image Generation. I have authored peer-reviewed papers, books, and patents, and guided over 500 academic and industrial projects.
                </p>
                <p>
                  Bringing together academic leadership, research expertise, and corporate exposure, I am committed to advancing innovation, quality education, and effective academic governance.
                </p>
              </div>

              {/* Social links */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/dr-mostaque-hassan-82921b8a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 glass-card-navy rounded-lg text-xs font-bold uppercase tracking-widest text-secondary-foreground hover:text-accent transition-colors">
                  
                  <Icon name="LinkIcon" size={14} className="text-accent" />
                  LinkedIn
                </a>
                <a
                  href="https://scholar.google.co.in/citations?user=rkI0qWgAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 glass-card-navy rounded-lg text-xs font-bold uppercase tracking-widest text-secondary-foreground hover:text-accent transition-colors">
                  
                  <Icon name="MagnifyingGlassIcon" size={14} className="text-accent" />
                  Google Scholar
                </a>
                <a
                  href="https://orcid.org/0009-0009-3551-4160"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 glass-card-navy rounded-lg text-xs font-bold uppercase tracking-widest text-secondary-foreground hover:text-accent transition-colors">
                  
                  <Icon name="IdentificationIcon" size={14} className="text-accent" />
                  ORCID
                </a>
                <a
                  href="https://www.researchgate.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 glass-card-navy rounded-lg text-xs font-bold uppercase tracking-widest text-secondary-foreground hover:text-accent transition-colors">
                  
                  <Icon name="BeakerIcon" size={14} className="text-accent" />
                  ResearchGate
                </a>
              </div>

              {/* Quote block */}
              <div className="border-l-2 border-primary pl-6 py-2">
                <p className="font-display text-lg font-medium text-foreground italic leading-relaxed">
                  "Bridging theoretical AI with practical engineering — one algorithm at a time."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
