import React from 'react';

import Icon from '@/components/ui/AppIcon';

const credentials = [
  {
    type: 'education',
    title: 'Post-Doctoral Fellowship (Pursuing)',
    institution: 'Eudoxia Research University, USA',
    period: '2023 – Present',
    detail: 'Research focus: "Generation of Photorealistic Images using Generative Adversarial Networks (GANs)". Registered: 4th August 2023.',
  },
  {
    type: 'education',
    title: 'PhD — Computer Science',
    institution: 'Gauhati University, Guwahati',
    period: '2019',
    detail: 'Thesis: "Network Intrusion Detection System Using Genetic Algorithm and Fuzzy Logic". Specialization in AI, Network Security, and Fuzzy Logic Systems.',
  },
  {
    type: 'education',
    title: 'Master of Computer Application (MCA)',
    institution: 'Allahabad Agricultural Institute – Deemed University, Allahabad',
    period: '2006',
    detail: 'Advanced coursework in algorithms, data structures, software engineering, and computer applications.',
  },
];

const awards = [
  {
    title: '5 Patents — Indian & UK',
    body: 'Indian Patent Office & UK IPO',
    year: '2023–Present',
    detail: '2 Indian patents published, 1 under examination, 2 UK design patents filed — covering AI, cybersecurity, and GAN-based image generation.',
    icon: 'TrophyIcon',
  },
  {
    title: 'Books Authored — 2025',
    body: 'RDG Scientific Publications',
    year: '2025',
    detail: 'Authored 2 academic books: "AI for Advanced Manufacturing" (ISBN: 978-81-986993-2-9) and "ML & AI: Multidisciplinary Concepts" (ISBN: 978-81-989673-3-6).',
    icon: 'BookOpenIcon',
  },
  {
    title: 'SCIE/Scopus Publications',
    body: 'Frontiers in Plant Science · Ain Shams Engineering Journal · Scientific Reports',
    year: '2025–2026',
    detail: 'Published in high-impact SCIE/Scopus-indexed journals: Frontiers in Plant Science (IF: 4.8), Ain Shams Engineering Journal (IF: 5.9), and Scientific Reports (IF: 3.9).',
    icon: 'StarIcon',
  },
  {
    title: '157+ Google Scholar Citations',
    body: 'Google Scholar',
    year: '2026',
    detail: 'Cumulative academic citation count reflecting research impact across AI, network security, and health informatics domains.',
    icon: 'PresentationChartBarIcon',
  },
];

const experience = [
  {
    role: 'Director cum Founder',
    org: 'Algoguido Technologies Pvt. Ltd.',
    dept: 'Data Science · Web & Mobile Apps · Cloud Systems',
    period: 'Jan 2026 – Present',
    type: 'Industry',
    detail:
      'Founder and Director of Algoguido Technologies, leading data science projects, web and mobile application development, and cloud solutions. Mentoring real-world projects and driving technology innovation.',
  },
  {
    role: 'Principal Data Scientist Instructor',
    org: 'upGrad Education Pvt. Ltd.',
    dept: 'Kolkata Centre — Data Science',
    period: 'Sep–Dec 2025',
    type: 'Industry',
    detail:
      'Trained and mentored learners for Data Analyst and Data Scientist roles through project-based, industry-aligned instruction. Designed modules on Python, ML, and Data Visualization. Served as Interview Panel Member for instructor recruitment.',
  },
  {
    role: 'Assistant Professor (Senior)',
    org: 'Brainware University, Kolkata',
    dept: 'Dept. of Artificial Intelligence & Machine Learning',
    period: 'Jan–Aug 2025',
    type: 'Academic',
    detail:
      'Taught AI and Machine Learning courses at undergraduate and postgraduate levels. Supervised student research projects and contributed to curriculum development in the AI & ML department.',
  },
  {
    role: 'Assistant Professor',
    org: 'Assam down town University',
    dept: 'Faculty of Computer Technology, Guwahati',
    period: 'Jun 2022 – Dec 2024',
    type: 'Academic',
    detail:
      'Delivered outcome-based, industry-relevant education integrating real-world expertise and emerging technology trends. Member of the Time Table Preparation Committee and Smart India Hackathon Mentor. (Appointed via iNurture Education Solutions Pvt. Ltd., Bengaluru)',
  },
  {
    role: 'Assistant Professor & Head of Department',
    org: 'Scholars Institute of Technology & Management (SITM)',
    dept: 'Dept. of Computer Science & Engineering, Guwahati',
    period: 'Mar 2020 – May 2022',
    type: 'Academic',
    detail:
      'Head of Department (BCA). Member of the Time Table Preparation Committee and Smart India Hackathon Mentor. Online Examination In-charge during COVID-19 for BCA and BTech courses under Assam Science and Technology University.',
  },
  {
    role: 'Assistant Professor',
    org: 'Lalit Chandra Bharali College',
    dept: 'Dept. of Computer Science, Guwahati',
    period: 'Mar 2008 – Jan 2020',
    type: 'Academic',
    detail:
      'Served for ~12 years. IGNOU Course Coordinator for MCA and BCA programs. Technical Team In-charge, NAAC Committee. Contributed significantly to academic administration and distance education coordination.',
  },
  {
    role: 'Assistant Professor',
    org: 'IIES College',
    dept: 'Dept. of Computer Science & Engineering, Guwahati',
    period: 'Nov 2006 – Feb 2008',
    type: 'Academic',
    detail:
      'Early academic career role teaching computer science and engineering subjects at undergraduate level.',
  },
  {
    role: 'Guest Faculty',
    org: 'IDOL, Gauhati University',
    dept: 'Distance and Online Education',
    period: '2 Years',
    type: 'Academic',
    detail:
      'Served as Guest Faculty for 2 years, contributing to the academic development of students under the Institute of Distance and Open Learning (IDOL).',
  },
];

export default function CredentialsSection() {
  return (
    <section id="credentials" className="py-24 px-6 bg-muted/20 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 section-reveal">
          <span className="text-accent font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
            // Credentials
          </span>
          <h2 className="font-display text-section-title font-bold text-foreground">
            Academic Credentials,{' '}
            <span className="gradient-text-cyan">Awards & Experience</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left: Education + Awards */}
          <div className="lg:col-span-7 space-y-12">
            {/* Education */}
            <div className="section-reveal">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-3">
                <Icon name="AcademicCapIcon" size={14} className="text-accent" />
                Education
              </h3>
              <div className="space-y-4">
                {credentials.map((c, i) => (
                  <div
                    key={i}
                    className="glass-card rounded-xl p-6 flex gap-5 items-start stagger-child"
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="AcademicCapIcon" size={18} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <h4 className="font-semibold text-foreground text-sm leading-snug">{c.title}</h4>
                        <span className="text-xs text-muted-foreground flex-shrink-0">{c.period}</span>
                      </div>
                      <p className="text-xs text-accent font-medium mb-1">{c.institution}</p>
                      <p className="text-xs text-muted-foreground">{c.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div className="section-reveal">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-3">
                <Icon name="TrophyIcon" size={14} className="text-accent" />
                Awards & Recognition
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {awards.map((a, i) => (
                  <div
                    key={i}
                    className="award-badge rounded-xl p-5 stagger-child"
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <Icon name={a.icon as 'TrophyIcon'} size={18} className="text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground text-sm leading-snug">{a.title}</h4>
                        <p className="text-xs text-accent mt-0.5">{a.body} · {a.year}</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed pl-7">{a.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Experience */}
          <div className="lg:col-span-5 section-reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="lg:sticky lg:top-28">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-3">
                <Icon name="BriefcaseIcon" size={14} className="text-accent" />
                Experience (18+ Years)
              </h3>
              <div className="space-y-4 max-h-[700px] overflow-y-auto pr-1">
                {experience.map((e, i) => (
                  <div key={i} className="glass-card-navy rounded-xl p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="font-display font-semibold text-foreground text-sm leading-snug">{e.role}</h4>
                      <span className="px-2 py-0.5 bg-primary/20 border border-primary/30 text-xs font-bold text-primary rounded-full flex-shrink-0">
                        {e.type}
                      </span>
                    </div>
                    <p className="text-xs text-accent font-medium mb-0.5">{e.org}</p>
                    <p className="text-xs text-muted-foreground mb-2">{e.dept}</p>
                    <div className="hud-line mb-2 w-16" />
                    <p className="text-xs text-muted-foreground leading-relaxed">{e.detail}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <div className={`w-1.5 h-1.5 rounded-full ${e.period === 'Current' ? 'bg-accent animate-pulseGlow' : 'bg-muted-foreground'}`} />
                      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{e.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
